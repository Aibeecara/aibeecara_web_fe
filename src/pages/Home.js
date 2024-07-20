import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import imageBG from '../assets/bg.jpeg'
import appLogo from '../assets/beecara.png'
import { Helmet } from 'react-helmet'
import { AiOutlineClose } from 'react-icons/ai'
import { BsAndroid } from 'react-icons/bs'
import { useLanguage } from '../contexts/LanguageContext'
import PopUpDownload from '../components/PopUpDownload'

const Home = () => {
	const [isOpen, setIsOpen] = useState(false)

	const [isScrollDownVisible, setIsScrollDownVisible] = useState(true)

	const { language } = useLanguage()

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

	const handleDownload = () => {
		const link = document.createElement('a')
		link.href =
			'https://firebasestorage.googleapis.com/v0/b/aibeecara-firebase.appspot.com/o/beecara-text.rar?alt=media&token=c036a3c1-2fe3-461a-9ceb-f3ead61cd88c'
		link.download = 'beecara-text.rar' // Nama file saat diunduh
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
		closeModal()
	}

	return (
		<div
			className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-[#FFB526] bg-cover bg-center font-baloobhaijaan2"
			style={{ backgroundImage: `url(${imageBG})` }}
			id="home"
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
					{language === 'EN' ? 'Fun & Effective Language Learning through Virtual Adventures' : 'Belajar Bahasa Asing yang Menyenangkan & Efektif melalui Petualangan Virtual'}
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
						{language === 'EN' ? 'Download Now' : 'Unduh Sekarang'}
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

			{isOpen && (
				<PopUpDownload closeModal={closeModal} handleDownload={handleDownload} />
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
			<Helmet>
				<title>
					Fun & Effective Language Learning through Virtual Adventures |
					aibeecara
				</title>
				<meta
					name="description"
					content="Aibeecara adalah platform pembelajaran bahasa asing yang inovatif dengan karakter virtual. Tingkatkan keterampilan bahasa Anda melalui pengalaman belajar interaktif dan menyenangkan dengan teman-teman virtual yang cerdas."
				/>

				<meta
					name="keywords"
					content="pembelajaran bahasa asing, belajar bahasa Inggris, aibeecara, latih bahasa, belajar bahasa, latih inggris, latihan berbahsa asing, karakter virtual AI, AI, bahasa asing, inggris, karakter virtual, aplikasi bahasa, belajar bahasa online, pembelajaran interaktif, aplikasi edukasi, aplikasi belajar, aplikasi belajar dengan AI karakter"
				/>
			</Helmet>
		</div>
	)
}

export default Home
