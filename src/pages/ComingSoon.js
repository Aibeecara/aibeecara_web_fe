import React from 'react';
import { motion } from 'framer-motion';
import appLogo from '../assets/beecara.png'; // Ganti dengan path logo aplikasi Anda

const ComingSoon = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-gradient-to-r from-[#FFB526] to-[#FF8E26] font-baloobhaijaan2"
      // style={{ backgroundImage: `url(${imageBG})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <motion.img
          src={appLogo}
          alt="App Logo"
          className="w-24 md:w-32 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We're working hard to bring you something amazing. Stay tuned for updates!
        </motion.p>
        {/* <div className="mt-8 flex flex-col md:flex-row items-center">
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="p-3 text-black rounded-lg border-2 border-white bg-white placeholder-gray-600 mb-4 md:mb-0 md:mr-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.button
            className="p-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Notify Me
          </motion.button>
        </div> */}
      </div>
    </div>
  );
}

export default ComingSoon;