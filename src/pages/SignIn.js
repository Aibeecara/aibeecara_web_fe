import React, { useState, useEffect } from 'react'
import { auth, provider } from '../../firebase'
import { useNavigate, Link } from 'react-router-dom'
import logoHypertopia from '../../assets/images/hypertopia-controlleronly-big.png'
import bgPage from '../../assets/images/bg.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useDarkModeContext } from '../../DarkModeContext';
import { Helmet } from 'react-helmet'
import { serverTimestamp, ref, set } from 'firebase/database';
import fireDb from '../../firebase';
import { onDisconnect } from 'firebase/database';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyC009NbWFGi3ln8BbMxnwVKe7XBF26lCt0",
  authDomain: "hypertopia-web.firebaseapp.com",
  databaseURL: "https://hypertopia-web-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hypertopia-web",
  storageBucket: "hypertopia-web.appspot.com",
  messagingSenderId: "197031865238",
  appId: "1:197031865238:web:daa24422ed1858badd4bb7"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const cleanDisplayName = (displayName) => {
  return displayName.replace(/[^\w\s]/gi, '');
};

const SignIn = () => {
  const [countdown, setCountdown] = useState(3);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  const navigate = useNavigate();
  const [redirectPath, setRedirectPath] = useState('/');

  const storedLanguage = localStorage.getItem('language') || 'en';

  const storedRedirectPath = localStorage.getItem('redirectPath') || '/';

  const allowedEmails = ['hypertopiaid@gmail.com'];

  const [language, setLanguage] = useState(storedLanguage);
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (selectedTheme) => {
    const newMode = selectedTheme === 'dark';
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    toggleDarkMode();
    setSelectedTheme(selectedTheme);
  };


  useEffect(() => {
    let userStatusRef;
  
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const cleanedDisplayName = cleanDisplayName(user.displayName);

        const userStatusDatabaseRef = fireDb.ref(`/usersMessages/${cleanedDisplayName}/status`);
  
        userStatusRef = fireDb.ref(`/usersMessages/${cleanedDisplayName}/status`);
        set(userStatusDatabaseRef, { online: true });
  
      } else {
        setUser(null);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);  

  const signIn = async (e) => {
    e.preventDefault();
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
  
      // Menambahkan timestamp dan status online ke database
      const userRef = fireDb.ref(`/usersLogin/${user.displayName}`);
      set(userRef, { lastLogin: new Date().toISOString() });
  
      // Update state pengguna setelah login berhasil
      setUser(auth.currentUser);
    } catch (error) {
      // Tangani kesalahan
      console.error(error.message);
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user.disabled) {
          setUser(null);
        } else {
          // Set status online saat login
          const cleanedDisplayName = cleanDisplayName(user.displayName);
          const userStatusRef = fireDb.ref(`/statusUsersLogin/${cleanedDisplayName}/status`);
          set(userStatusRef, { online: true });
  
          // Set timestamp dan status online saat login
          const userRef = fireDb.ref(`/usersLogin/${cleanedDisplayName}/status`);
          set(userRef, {
            lastLogin: new Date().toISOString(),
            userPhoto: user.photoURL,
          });
  
          setUser(user);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };  

  useEffect(() => {
    let countdownInterval;
    if (user) {
      let secondsLeft = countdown;
      const countdownInterval = setInterval(() => {
        secondsLeft -= 1;
        setCountdown(secondsLeft);

        if (secondsLeft === -1) {
          clearInterval(countdownInterval);
          
          if (user && !allowedEmails.includes(user.email)) {
            // Jika user terautentikasi tapi email-nya tidak diizinkan, kembalikan ke halaman utama
            navigate('/profile');
          } else {
            navigate('/dba/dashboard');
          }
        }
      }, 1000); // Update countdown every second
    }

    // Clear interval when the component unmounts
    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown, navigate, storedRedirectPath, user]);

  const handleLogout = () => {
    setUser(null)
  }

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const translations = {
    en: {
      loginText: 'Log In to your Account',
      login: 'Login',
      enterEmail: 'Enter your email',
      enterPassword: 'Enter your password',
      or: 'or',
      
      welcome: 'Welcome',
      redirecting: 'Redirecting to ',
      home: 'Home',
      profile: 'Profile',
      dashboardAdmin: 'Dashboard Admin',
      in: ' in',
      s: 's',

      dark: 'Dark',
      light: 'Light',

      signIn: 'Sign In',

      infoSignIn: "By closing any pages related to HYPERTOPIA, you will automatically log out of your account for security reasons!"
    },
    id: {
      loginText: 'Masuk ke Akun Anda',
      login: 'Masuk',
      enterEmail: 'Masukkan email Anda',
      enterPassword: 'Masukkan kata sandi Anda',
      or: 'atau',

      welcome: 'Selamat Datang',
      redirecting: 'Mengalihkan ke ',
      home: 'Beranda',
      profile: 'Profil',
      dashboardAdmin: 'Dasbor Admin',
      in: ' dalam',
      s: ' detik',

      dark: 'Gelap',
      light: 'Terang',

      signIn: 'Masuk',

      infoSignIn: "Dengan Anda menutup laman apapun yang berkaitan dengan laman HYPERTOPIA, maka secara otomatis keluar dari akun Anda demi keamanan!"
    },
  };

  return (
    <div className='flex items-center justify-center h-svh' style={{ background: isDarkMode ? `linear-gradient(to right, rgba(0, 0, 0, 0.85) 80%, rgba(0, 0, 0, 0.85) 80%, rgba(0, 0, 0, 0.85) 80%), url(${bgPage}) center/cover no-repeat` : `linear-gradient(to left, rgba(255, 255, 255, 0.95) 10%, rgba(255, 255, 255, 0.95) 100%, rgba(255, 255, 255, 0.95) 100%), url(${bgPage}) center/cover no-repeat` }}>
      <div className='flex items-center justify-end absolute top-4 right-4 w-full z-10'>
        <div className='flex px-2 gap-6 flex-row items-center justify-between'>
          <select onChange={handleLanguageChange} value={language} className={`${isDarkMode ? 'bg-zinc-700 hover:bg-zinc-500 text-white' : 'bg-white hover:bg-zinc-200 text-black'} outline-none px-2 py-2 w-full cursor-pointer ${isDarkMode ? 'border-zinc-500': 'border-zinc-300'} border-2 rounded-xl`} role="menuitem">
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>
        </div>

        {/* Tambahkan elemen tema di pojok kanan atas */}
        <div className='flex px-2 gap-6 flex-row items-center justify-between'>
          <select onChange={(e) => handleThemeChange(e.target.value)} value={isDarkMode ? 'dark' : 'light'} className={`${isDarkMode ? 'bg-zinc-700 hover:bg-zinc-500 text-white' : 'bg-white hover:bg-zinc-200 text-black'} outline-none px-2 py-2 w-full cursor-pointer ${isDarkMode ? 'border-zinc-500': 'border-zinc-300'} border-2 rounded-xl`} role="menuitem">
            <option value="dark">{translations[language].dark}</option>
            <option value="light">{translations[language].light}</option>
          </select>
        </div>
      </div>

      <div className='flex flex-col items-center gap-4 max-w-96'>
        {user ? 
          <>
            {/* <div className='mb-2 w-full bg-white p-4 rounded-2xl text-center'>
              <span className='text-red-500 text-center font-semibold animate-pulse'>{translations[language].infoSignIn}</span>
            </div> */}
            <div className={`p-8 border-2 shadow-lg w-full rounded-2xl flex flex-col items-center justify-center gap-3 ${isDarkMode ? 'backdrop-blur-sm bg-zinc-700 bg-opacity-50 text-white' : ' backdrop-blur-sm text-black'}`}>
              {/* <button className='btn btn-secondary btn-md'
              onClick={handleLogout}>
                Logout
              </button> */}
              <h3 className='text-center'>{translations[language].welcome} <br /> <span className='font-bold'>{user.displayName}</span></h3>
              <div className=''>
                <img src={user.photoURL} alt="user" referrerPolicy='no-referrer' className='rounded-full border-4' />
              </div>
              <p>{user.email}</p>
            </div>
            {countdown > 0 && (
              <p className='text-white px-4 py-2 bg-[#FF8526] rounded-lg w-full text-center'>{translations[language].redirecting} <span className='font-bold animate-pulse'>{user && !allowedEmails.includes(user.email) ? translations[language].profile : translations[language].dashboardAdmin}</span> {translations[language].in} <span className='font-bold'>{countdown}</span>{translations[language].s}</p>
            )}
          </>
        :
          <>
            {/* <div className='mb-2 w-full bg-white p-4 rounded-2xl text-center'>
              <span className='text-red-500 text-center font-semibold animate-pulse'>{translations[language].infoSignIn}</span>
            </div> */}
            <div className={`p-8 border-2 rounded-2xl w-full flex flex-col items-center shadow-lg ${isDarkMode ? 'backdrop-blur-sm bg-zinc-700 bg-opacity-50' : ' backdrop-blur-sm'} glow-effect`}>
              <Link to='/'>
                <LazyLoadImage
                  src={logoHypertopia}
                  alt="hypertopia-logo"
                  className='mb-5'
                  width={70}
                />
              </Link>
              <form onSubmit={signIn} className='flex flex-col items-center gap-2'>
                <h1 className={`mb-3 font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-black'}`}>{translations[language].loginText}</h1>
                <input className='input-box' type="email" placeholder={translations[language].enterEmail} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className='input-box' type="password" placeholder={translations[language].enterPassword} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                {/* <button type='submit' className='w-full transition-all duration-300 ease-in-out py-3 mt-4 text-white'>{translations[language].login}</button> */}
              </form>
              <div className='flex flex-row justify-between items-center gap-2'>
                <hr className='my-4 w-[120px] border-gray-300' />
                <p className='text-gray-400 my-4'>{translations[language].or}</p>
                <hr className='my-4 w-[120px] border-gray-300' />
              </div>
              <div className='flex flex-row gap-2 w-full h-full items-center justify-center'>
                <button className='hover:bg-gray-300 transition-all h-full duration-300 ease-in-out w-full bg-white border-2 py-3 rounded-xl flex flex-row gap-2 items-center justify-center' onClick={handleGoogleSignIn}>
                  <FcGoogle className='w-6 h-6' />
                  <p className='font-semibold'>Google</p>
                </button>
                <button className='hover:bg-gray-300 transition-all h-full duration-300 ease-in-out w-full bg-white border-2 py-3 rounded-xl flex flex-row gap-2 items-center justify-center'>
                  <FaFacebookF className='w-6 h-6 text-blue-600' />
                  <p className='font-semibold'>Facebook</p>
                </button>
              </div>
            </div>
          </>
        }
      </div>
      
      <Helmet>
        <title>{translations[language].signIn} - Hypertopia</title>
      </Helmet>

      <style>
        {`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px 0 ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(212, 212, 216, 0.2)'};
          }
          50% {
            box-shadow: 0 0 30px 5px ${isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(212, 212, 216, 0.4)'};
          }
          100% {
            box-shadow: 0 0 5px 0 ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(212, 212, 216, 0.2)'};
          }
        }
        
        .glow-effect {
          animation: glow 6s infinite;
        }

        .input-box {
          width: 300px;
          padding: 12px 20px;
          margin: 2px 0;
          display: block;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-sizing: border-box;
        }
        `}
      </style>
    </div>
  )
}

export default SignIn