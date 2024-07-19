import React from 'react';
import { motion } from 'framer-motion';
import imageBG from '../assets/bg.jpeg';
import appLogo from '../assets/beecara.png'; // Ganti dengan path logo aplikasi Anda

const Home = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-[#FFB526] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageBG})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.img
          src={appLogo}
          alt="App Logo"
          className="w-24 md:w-32 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 bg-black bg-opacity-60 py-6 px-8 rounded-3xl shadow-2xl mx-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Fun & Effective Language Learning through Virtual Adventures
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white max-w-4xl bg-black bg-opacity-60 py-6 px-8 rounded-2xl shadow-2xl mx-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Immerse yourself in interactive virtual adventures with our app. Practice speaking with AI-powered virtual characters, receive instant feedback on your pronunciation, and track your progress in grammar and vocabulary to enhance your learning experience.
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
