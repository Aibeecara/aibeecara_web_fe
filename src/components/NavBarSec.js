import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BeecaraText from '../assets/beecara-text.png';
import { FaSignInAlt } from 'react-icons/fa';
import { useDarkModeContext } from '../DarkModeContext';

import { auth } from '../firebase';
import fireDb from '../firebase';

const NavBar = ({ hideNavBar }) => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode } = useDarkModeContext();

  const dropdownRef = useRef(null);

  const storedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(storedLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    auth.signOut();
  };

  const translations = {
    en: {
      home: 'Home',
      explore: 'Explore',
      contact: 'Contact',
      game: 'Game',
      login: 'Login',

      language: 'Language',

      signOut: 'Sign Out',
    },
    id: {
      home: 'Beranda',
      explore: 'Jelajahi',
      contact: 'Kontak',
      game: 'Permainan',
      login: 'Masuk',

      language: 'Bahasa',

      signOut: 'Keluar',
    },
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value);
    window.location.reload();
  };

  return (
    <>
      <nav className={`${location.pathname === '/login' ? 'hidden' : ''} px-20 bg-opacity-90 backdrop-blur-[4px] bg-white p-2 py-5 justify-between flex items-center fixed w-full z-50 shadow-lg`}>
        <div className=" cursor-pointer z-50 flex flex-row items-center justify-start gap-0">
          {/* <div className="lg:hidden cursor-pointer" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <FaBars className={`text-xl mr-5 text-black`} />
          </div> */}
          <Link to="/">
            <LazyLoadImage src={BeecaraText} alt="logo-beecara" className="w-40 cursor-pointer" />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <ul className="flex space-x-[60px] items-center justify-end font-semibold text-2xl">
            <li>
              <span className='flex gap-2 items-center hover:text-[#FF8526] transition-all duration-300'>
                {location.pathname === '/explore' ? translations['en'].explore : <Link to="/explore">{translations[language].explore}</Link>}
              </span>
            </li>
            <li>
              <span className='flex gap-2 items-center hover:text-[#FF8526] transition-all duration-300'>
                {location.pathname === '/contact' ? translations['en'].contact : <Link to="/contact">{translations[language].contact}</Link>}
              </span>
            </li>
            <li>
              <span className='flex gap-2 items-center hover:text-[#FF8526] transition-all duration-300'>
                {location.pathname === '/game' ? translations['en'].game : <Link to="/game">{translations[language].game}</Link>}
              </span>
            </li>
            {user ?
            <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef} className='-mb-2'>
              <button type="button" className="cursor-pointer outline-none" id="userMenuButton" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {user
                ? <img src={user.photoURL} alt="" className={`size-9 rounded-full border-2 border-[#FF8526] transition-all duration-300 outline-none`} />
                : <FaUserCircle className={`text-4xl ${isDarkMode ? 'text-white' : 'text-black'}`} />}
              </button>
              <div
                className={`${
                  isDropdownOpen
                    ? 'opacity-100 scale-100 visible'
                    : 'opacity-0 scale-95 invisible'
                } flex flex-col p-2 gap-2 transform transition-all duration-300 origin-top-right absolute right-20 top-20 ${isDarkMode ? 'border-zinc-500' : 'border-zinc-200'} border-2 w-64 rounded-xl shadow-2xl ${isDarkMode ? 'bg-zinc-700' : 'bg-white'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="userMenuButton"
              >
                <div className='flex px-2 gap-6 flex-row items-center justify-between text-lg'>
                  <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {translations[language].language}
                  </span>
                  {language === 'en' ?
                  <select onChange={handleLanguageChange} value={language} className={`${isDarkMode ? 'bg-zinc-700 hover:bg-zinc-500 text-white' : 'bg-white hover:bg-zinc-200 text-black'} outline-none px-2 py-2 w-fit cursor-pointer border-none text-right rounded-xl`} role="menuitem">
                    <option value="en">English</option>
                    <option value="id">Indonesian</option>
                  </select>
                  : 
                  <select onChange={handleLanguageChange} value={language} className={`${isDarkMode ? 'bg-zinc-700 hover:bg-zinc-500 text-white' : 'bg-white hover:bg-zinc-200 text-black'} outline-none px-2 py-2 w-fit cursor-pointer border-none text-right rounded-xl`} role="menuitem">
                    <option value="en">Inggris</option>
                    <option value="id">Indonesia</option>
                  </select>
                  }
                </div>
                <button className={`border-red-400 border-2 w-full flex px-4 gap-6 flex-row items-center justify-between hover:bg-red-600 transition-all duration-300 bg-red-500 py-2 text-lg rounded-lg shadow-2xl text-white`} onClick={handleSignOut}>
                  <span>{translations[language].signOut}</span>
                  <FaSignInAlt />
                </button>
              </div>
            </span>
            : 
            <li>
              <span className='flex gap-2 items-center hover:text-[#FF8526] transition-all duration-300 text-[#FF8526]'>
                {location.pathname === '/login' ? translations['en'].game : <Link to="/login">{translations['en'].login}</Link>}
              </span>
            </li>
            }
          </ul>
        </div>
      </nav>
  
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
          .focus {
            width: 250px;
          }

          .font-baloo-bhaijaan {
            font-family: 'Baloo Bhaijaan', sans-serif;
            font-size: 30px;
            letter-spacing: 0.1rem;
          }
        `}
      </style>
    </>
  );
} 

export default NavBar;