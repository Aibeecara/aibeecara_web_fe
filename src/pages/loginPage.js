import React, { useState, useEffect } from 'react'
import { auth, provider } from '../firebase'
import { useNavigate, Link } from 'react-router-dom'
import logoBeecara from '../assets/beecara.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import bgPage from '../assets/bg-first.png'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF, FaMicrosoft } from "react-icons/fa";
import { useDarkModeContext } from '../DarkModeContext';
import { Helmet } from 'react-helmet';
import { serverTimestamp, ref, set } from 'firebase/database';
import fireDb from '../firebase';
import firebase from 'firebase/compat/app';
import microsoftIcon from '../assets/microsoft.png'

const firebaseConfig = {
  apiKey: "AIzaSyDmM_l76JMmKhIGkw4hvZytJ2w6IyJxAlQ",
  authDomain: "beecara-web.firebaseapp.com",
  projectId: "beecara-web",
  storageBucket: "beecara-web.appspot.com",
  messagingSenderId: "144971556419",
  appId: "1:144971556419:web:c66eb27ad5d5025f55d6f6"
};

firebase.initializeApp(firebaseConfig);

const cleanDisplayName = (displayName) => {
  return displayName.replace(/[^\w\s]/gi, '');
};

const LoginPage = () => {
  const [countdown, setCountdown] = useState(3);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  const navigate = useNavigate();

  const storedLanguage = localStorage.getItem('language') || 'en';

  const storedRedirectPath = localStorage.getItem('redirectPath') || '/';

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
      const userRef = fireDb.ref(`/usersLogin/${user.displayName}`);
      set(userRef, { lastLogin: new Date().toISOString() });
      setUser(auth.currentUser);
    } catch (error) {
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
          const cleanedDisplayName = cleanDisplayName(user.displayName);
          const userStatusRef = fireDb.ref(`/statusUsersLogin/${cleanedDisplayName}/status`);
          set(userStatusRef, { online: true });
  
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
          
          if (user) {
            navigate('/');
          }
        }
      }, 1000);
    }

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
      loginText: 'Log In to your Beecara Account',
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
    },
  };

  return (
    <div className='flex items-center justify-center h-svh' style={{ background: isDarkMode ? `linear-gradient(to right, rgba(0, 0, 0, 0.85) 80%, rgba(0, 0, 0, 0.85) 80%, rgba(0, 0, 0, 0.85) 80%), url(${bgPage}) center/cover no-repeat` : `linear-gradient(to left, rgba(255, 255, 255, 0.85) 10%, rgba(255, 255, 255, 0.85) 100%, rgba(255, 255, 255, 0.85) 100%), url(${bgPage}) center/cover no-repeat` }}>
      <div className='flex items-center justify-end absolute top-4 right-4 w-full z-10'>
        {/* Tambahkan elemen bahasa di pojok kanan atas */}
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
            <div className={`p-8 border-2 shadow-lg w-full rounded-2xl flex flex-col items-center justify-center gap-3 bg-white ${isDarkMode ? 'backdrop-blur-sm bg-zinc-700 bg-opacity-50 text-white' : ' backdrop-blur-sm text-black'}`}>
              <h3 className='text-center'>{translations[language].welcome} <br /> <span className='font-bold'>{user.displayName}</span></h3>
              <div className=''>
                <img src={user.photoURL} alt="user" referrerPolicy='no-referrer' className='rounded-full border-4' />
              </div>
              <p>{user.email}</p>
            </div>
            {countdown > 0 && (
              <p className='text-white px-4 py-2 bg-[#FF8526] rounded-lg w-full text-center'>{translations[language].redirecting} <span className='font-bold animate-pulse'>{user && translations[language].home}</span> {translations[language].in} <span className='font-bold'>{countdown}</span>{translations[language].s}</p>
            )}
          </>
        :
          <>
            <div className={`p-8 border-2 rounded-2xl w-full flex flex-col items-center shadow-lg bg-white ${isDarkMode ? 'backdrop-blur-sm bg-zinc-700 bg-opacity-50' : ' backdrop-blur-sm'} glow-effect`}>
              <Link to='/'>
                <LazyLoadImage
                  src={logoBeecara}
                  alt="beecara-logo"
                  className='mb-5'
                  width={70}
                />
              </Link>
              <form onSubmit={signIn} className='flex flex-col items-center gap-2'>
                <h1 className={`mb-3 font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>{translations[language].loginText}</h1>
                <input className='input-box' type="email" placeholder={translations[language].enterEmail} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className='input-box' type="password" placeholder={translations[language].enterPassword} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' className='w-full hover:bg-[#E16C00] transition-all duration-300 ease-in-out bg-[#FF8526] py-3 rounded-xl mt-4 text-white'>{translations[language].login}</button>
              </form>
              <div className='flex flex-row justify-between items-center gap-2'>
                <hr className='my-4 w-[120px] border-gray-300' />
                <p className='text-gray-400 my-4'>{translations[language].or}</p>
                <hr className='my-4 w-[120px] border-gray-300' />
              </div>
              <div className='flex flex-col gap-2 w-full h-full items-center justify-center'>
                <button className='hover:bg-gray-300 transition-all h-full duration-300 ease-in-out w-full bg-white border-2 py-3 rounded-xl flex flex-row gap-2 items-center justify-center' onClick={handleGoogleSignIn}>
                  <FcGoogle className='w-6 h-6' />
                  <p className='font-semibold'>Google</p>
                </button>
                <button className='hover:bg-gray-300 transition-all h-full duration-300 ease-in-out w-full bg-white border-2 py-3 rounded-xl flex flex-row gap-2 items-center justify-center'>
                  <FaFacebookF className='w-6 h-6 text-blue-600' />
                  <p className='font-semibold'>Facebook</p>
                </button>
                <button className='hover:bg-gray-300 transition-all h-full duration-300 ease-in-out w-full bg-white border-2 py-3 rounded-xl flex flex-row gap-2 items-center justify-center'>
                  <FaApple className='w-6 h-6' />
                  <p className='font-semibold'>Apple</p>
                </button>
                <button className='hover:bg-gray-300 transition-all h-full duration-300 ease-in-out w-full bg-white border-2 py-3 rounded-xl flex flex-row gap-2 items-center justify-center'>
                  <img src={microsoftIcon} alt="microsoft" className='w-6 h-6' />
                  <p className='font-semibold'>Microsoft</p>
                </button>
              </div>
            </div>
          </>
        }
      </div>
      
      <Helmet>
        <title>{translations[language].signIn} - Beecara</title>
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

export default LoginPage