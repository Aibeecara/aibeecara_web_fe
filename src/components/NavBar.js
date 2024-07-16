import React, { useEffect, useState, useRef } from 'react';
import { FaUserCircle, FaSignInAlt } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import aibeecaraText from '../assets/TextAibeecaraOnly.png';
import aibeecaraLogo from '../assets/IconAibeecaraOnly.png';

const NavBar = ({ hideNavBar }) => {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const storedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(storedLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleSignOut = () => {
    setUser(null);
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
      <nav className={`${window.location.pathname === '/login' ? 'hidden' : ''} px-20 bg-opacity-90 backdrop-blur-[4px] bg-white p-2 py-5 justify-between flex items-center fixed top-0 left-0 right-0  w-full z-50 shadow-lg`}>
        <div className="cursor-pointer z-50 flex flex-row items-center justify-start gap-0">
          <a href="https://aibeecara.id/" className='flex flex-row gap-3 items-center'>
            <LazyLoadImage src={aibeecaraLogo} alt="logo-beecara" className="w-8 cursor-pointer" />
            <LazyLoadImage src={aibeecaraText} alt="logo-beecara" className="w-28 cursor-pointer" />
          </a>
        </div>
        <div className="flex items-center justify-end">
          <ul className="flex space-x-[60px] items-center justify-end font-semibold text-xl">
            <li>
              <span className='flex gap-2 items-center hover:text-[#FF8526] transition-all duration-300'>
                {window.location.pathname === '/explore' ? translations['en'].explore : <a href="/explore">{translations[language].explore}</a>}
              </span>
            </li>
            <li>
              <span className='flex gap-2 items-center hover:text-[#FF8526] transition-all duration-300'>
                {window.location.pathname === '/contact' ? translations['en'].contact : <a href="/contact">{translations[language].contact}</a>}
              </span>
            </li>
            <li>
              <span className='flex gap-2 items-center hover:text-[#FF8526] transition-all duration-300'>
                {window.location.pathname === '/game' ? translations['en'].game : <a href="/game">{translations[language].game}</a>}
              </span>
            </li>
            {user ?
            <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef} className='-mb-2'>
              <button type="button" className="cursor-pointer outline-none" id="userMenuButton" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <FaUserCircle className={`text-4xl text-black`} />
              </button>
              <div
                className={`${
                  isDropdownOpen
                    ? 'opacity-100 scale-100 visible'
                    : 'opacity-0 scale-95 invisible'
                } flex flex-col p-2 gap-2 transform transition-all duration-300 origin-top-right absolute right-20 top-20 border-zinc-200 border-2 w-64 rounded-xl shadow-2xl bg-white`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="userMenuButton"
              >
                <div className='flex px-2 gap-6 flex-row items-center justify-between text-lg'>
                  <span className={`font-semibold text-black`}>
                    {translations[language].language}
                  </span>
                  <select onChange={handleLanguageChange} value={language} className={`bg-white hover:bg-zinc-200 text-black outline-none px-2 py-2 w-fit cursor-pointer border-none text-right rounded-xl`} role="menuitem">
                    <option value="en">{language === 'en' ? 'English' : 'Inggris'}</option>
                    <option value="id">{language === 'en' ? 'Indonesian' : 'Indonesia'}</option>
                  </select>
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
                {window.location.pathname === '/login' ? translations['en'].login : <a href="/login">{translations['en'].login}</a>}
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
};

export default NavBar;
