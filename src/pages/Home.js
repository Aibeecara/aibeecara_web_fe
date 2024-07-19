import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import imageBG from '../assets/bg.jpeg'
import appLogo from '../assets/beecara.png'
import { Helmet } from 'react-helmet'
import { AiOutlineClose } from 'react-icons/ai'
import { BsAndroid } from 'react-icons/bs'

const Home = () => {
	const [isOpen, setIsOpen] = useState(false)

	const [isScrollDownVisible, setIsScrollDownVisible] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			const homeSection = document.getElementById('home')
			if (homeSection) {
				const rect = homeSection.getBoundingClientRect()
				setIsScrollDownVisible(
					rect.bottom > window.innerHeight - window.innerHeight * 0.5
				)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)

	return (
		<div
			className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-[#FFB526] bg-cover bg-center font-baloobhaijaan2"
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
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
				>
					<button
						onClick={openModal}
						className="px-6 py-3 bg-gradient-to-r from-[#FFB526] to-[#FF8E26] hover:bg-[#d4a13b] rounded-full text-xl font-bold text-white cursor-pointer transition-all duration-300 flex items-center"
					>
						Download App
						<BsAndroid size={20} className="ml-2" />
					</button>
				</motion.div>
				{/* <a
					href="#about"
					className={`${
						isScrollDownVisible ? 'opacity-100' : 'opacity-0'
					} transition-all duration-500 flex flex-col justify-center items-center absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10`}
				>
					<p className="text-white mb-2">Scroll Down</p>
					<div className="scroll-down"></div>
				</a> */}

				{/* <motion.p
					className="text-lg md:text-xl text-white max-w-4xl bg-black bg-opacity-60 py-6 px-8 rounded-2xl shadow-2xl mx-4"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					Immerse yourself in interactive virtual adventures with our app.
					Practice speaking with AI-powered virtual characters, receive instant
					feedback on your pronunciation, and track your progress in grammar and
					vocabulary to enhance your learning experience.
				</motion.p> */}
			</div>

			<Helmet>
				<title>
					Fun & Effective Language Learning through Virtual Adventures |
					aibeecara
				</title>
			</Helmet>

			{isOpen && (
				<motion.div
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					{/* Modal Container */}
					<motion.div
						className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative"
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.3 }}
					>
						{/* Close Button */}
						<button
							onClick={closeModal}
							className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
						>
							<AiOutlineClose className="text-2xl" />
						</button>

						{/* Modal Content */}
						<h2 className="text-2xl font-bold mb-4 text-center">
							Download Our App
						</h2>
						<p className="text-gray-700 mb-6 text-center">
							Click the button below to download our app and start your journey
							towards effective language learning.
						</p>
						<div className="flex justify-center">
							<a
								href="https://github.com/rigelra15/aibeecara-download-app/raw/main/beecara-text.rar" // Ganti dengan link unduh aplikasi Anda
								className="bg-[#FFB526] text-white px-6 py-3 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105"
								onClick={closeModal}
								download="beecara-text.rar"
							>
								Download Now
							</a>
						</div>
					</motion.div>
				</motion.div>
			)}

			<style>
				{`
  .scroll-down {
    height: 50px;
    width: 30px;
    border: 2px solid #fff;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    margin-top: 10px; /* Adjust margin to space from the text */
  }

  .scroll-down::before,
  .scroll-down::after {
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    border: 2px solid #fff;
    height: 10px;
    width: 10px;
    transform: translate(-50%, -100%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
    animation: scrollDown 1s ease-in-out infinite;
  }
  .scroll-down::after {
    top: 30%;
    animation-delay: .3s;
  }
  @keyframes scrollDown {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: 90%;
    }
  }
  `}
			</style>
		</div>
	)
}

export default Home
