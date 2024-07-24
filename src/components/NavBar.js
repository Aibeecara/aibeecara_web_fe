import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useLocation } from 'react-router-dom'
import aibeecaraText from '../assets/TextAibeecaraOnly.png'
import aibeecaraLogo from '../assets/IconAibeecaraOnly.png'
import { BsAndroid } from 'react-icons/bs'
import { useLanguage } from '../contexts/LanguageContext'
import PopUpDownload from './PopUpDownload'

const menuVariants = {
	open: {
		opacity: 1,
		pointerEvents: 'auto',
		transition: { duration: 0.3 },
	},
	closed: {
		opacity: 0,
		pointerEvents: 'none',
		transition: { duration: 0.3 },
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function MobileMenu({ isOpen, onToggle, pathname }) {
	const [isOpenPopUp, setIsOpenPopUp] = useState(false)

	const { language, changeLanguage } = useLanguage()

	const handleLanguageChange = (event) => {
		changeLanguage(event.target.value)
	}

	const openModal = () => setIsOpenPopUp(true)
	const closeModal = () => setIsOpenPopUp(false)

	const handleDownload = () => {
		const link = document.createElement('a')
		link.href =
			'https://github.com/Aibeecara/aibeecara_web_fe/releases/download/v0.25.07-alpha/aibeecara-alpha.apk'
		link.download = 'aibeecara-alpha.apk' // Nama file saat diunduh
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
		closeModal()
	}

	return (
		<motion.div
			className="fixed top-0 left-0 right-0 bottom-0 z-50 text-lg"
			style={{
				backgroundColor: 'rgba(255, 255, 255, 0.8)',
				backdropFilter: 'blur(10px)',
			}}
			initial="closed"
			animate={isOpen ? 'open' : 'closed'}
			variants={menuVariants}
		>
			<div className="flex justify-between p-5">
				<button onClick={onToggle}>
					<FaTimes style={{ color: 'black' }} />
				</button>
			</div>
			<ul className="flex flex-col items-center justify-center h-full space-y-8">
				{language === 'EN'
					? ['Home', 'Features', 'Contact', 'About'].map((item) => {
							const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`
							return (
								<motion.li
									key={item}
									variants={itemVariants}
									initial="hidden"
									animate="visible"
								>
									<a
										href={itemPath}
										className={`px-4 py-2 font-semibold ${
											pathname === itemPath
												? 'bg-gradient-to-r from-[#FFB526] to-[#FF8E26] text-white font-semibold'
												: ''
										} rounded-full`}
										onClick={onToggle}
									>
										{item}
									</a>
								</motion.li>
							)
					  })
					: ['Beranda', 'Fitur', 'Kontak', 'Tentang'].map((item) => {
							const itemPath =
								item === 'Beranda' ? '/' : `/${item.toLowerCase()}`
							return (
								<motion.li
									key={item}
									variants={itemVariants}
									initial="hidden"
									animate="visible"
								>
									<a
										href={itemPath}
										className={`px-4 py-2 font-semibold ${
											pathname === itemPath
												? 'bg-gradient-to-r from-[#FFB526] to-[#FF8E26] text-white font-semibold'
												: ''
										} rounded-full`}
										onClick={onToggle}
									>
										{item}
									</a>
								</motion.li>
							)
					  })}
				{/* Mobile Download Button */}
				<motion.li
					variants={itemVariants}
					initial="hidden"
					animate="visible"
					className="w-full flex gap-4 justify-center items-center absolute bottom-8"
				>
					<select
						value={language}
						onChange={handleLanguageChange}
						className="bg-white text-black px-4 py-2 rounded-full"
					>
						<option value="EN">EN</option>
						<option value="ID">ID</option>
					</select>
					<button
						onClick={openModal}
						className="px-4 py-2 bg-gradient-to-r from-[#FFB526] to-[#FF8E26] hover:bg-[#d4a13b] rounded-full text-lg font-bold text-white cursor-pointer transition-all duration-300 flex items-center"
					>
						Download
						<BsAndroid size={20} className="ml-2" />
					</button>
				</motion.li>
			</ul>

			{isOpenPopUp && (
				<PopUpDownload
					closeModal={closeModal}
					handleDownload={handleDownload}
				/>
			)}
		</motion.div>
	)
}

export default function Navbar() {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const location = useLocation()
	const pathname = location.pathname

	const handleMenuToggle = () => {
		setMenuOpen(!isMenuOpen)
	}

	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)

	const { language, changeLanguage } = useLanguage()

	const handleLanguageChange = (event) => {
		changeLanguage(event.target.value)
	}

	return (
		<motion.div
			style={{ backgroundColor: '#ffffff' }}
			className="rounded-[25px] fixed top-[24px] left-[24px] right-[24px] border-2 z-50 font-baloobhaijaan2 font-normal text-lg shadow-lg"
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="flex justify-between items-center px-5 py-4">
				<a href="/" className="flex flex-row gap-3 items-center">
					<LazyLoadImage
						src={aibeecaraLogo}
						alt="logo-beecara"
						className="w-8 cursor-pointer"
					/>
					<LazyLoadImage
						src={aibeecaraText}
						alt="logo-beecara"
						className="w-28 cursor-pointer"
					/>
				</a>
				<ul
					className="hidden md:flex space-x-8 justify-center absolute items-center transition-all"
					style={{ right: '50%', transform: 'translateX(50%)' }}
				>
					{language === 'EN'
						? ['Home', 'Features', 'Contact', 'About'].map((item) => {
								const itemPath =
									item === 'Home' ? '/' : `/${item.toLowerCase()}`
								return (
									<motion.li
										key={item}
										initial="hidden"
										animate="visible"
										variants={itemVariants}
									>
										<a
											href={itemPath}
											className={`transition-all hover:font-semibold hover:cursor-pointer ${
												pathname === itemPath
													? 'bg-gradient-to-r from-[#FFB526] to-[#FF8E26] rounded-full px-4 py-2 text-white font-semibold'
													: ''
											}`}
										>
											{item}
										</a>
									</motion.li>
								)
						  })
						: ['Beranda', 'Fitur', 'Kontak', 'Tentang'].map((item) => {
								const itemPath =
									item === 'Beranda' ? '/' : `/${item.toLowerCase()}`
								return (
									<motion.li
										key={item}
										initial="hidden"
										animate="visible"
										variants={itemVariants}
									>
										<a
											href={itemPath}
											className={`transition-all hover:font-semibold hover:cursor-pointer ${
												pathname === itemPath
													? 'bg-gradient-to-r from-[#FFB526] to-[#FF8E26] rounded-full px-4 py-2 text-white font-semibold'
													: ''
											}`}
										>
											{item}
										</a>
									</motion.li>
								)
						  })}
				</ul>
				<div className="absolute right-0 hidden md:flex items-center space-x-4 pr-4">
					<select
						value={language}
						onChange={handleLanguageChange}
						className="bg-white text-black px-2 py-1 rounded"
					>
						<option value="EN">EN</option>
						<option value="ID">ID</option>
					</select>
					<motion.li
						variants={itemVariants}
						initial="hidden"
						animate="visible"
						className="flex justify-center items-center"
					>
						<button
							onClick={openModal}
							className="px-4 py-2 bg-gradient-to-r from-[#FFB526] to-[#FF8E26] hover:bg-[#d4a13b] rounded-full text-lg font-bold text-white cursor-pointer transition-all duration-300 flex items-center"
						>
							{language === 'EN' ? 'Download' : 'Unduh'}
							<BsAndroid size={20} className="ml-2" />
						</button>
					</motion.li>
				</div>
				<div className="flex items-center md:hidden">
					<button
						className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-full text-xl p-2"
						onClick={handleMenuToggle}
					>
						{isMenuOpen ? (
							<FaTimes style={{ color: 'black' }} />
						) : (
							<FaBars style={{ color: 'black' }} />
						)}
					</button>
				</div>
			</div>

			{isOpen && (
				<PopUpDownload
					closeModal={closeModal}
				/>
			)}
			<MobileMenu
				isOpen={isMenuOpen}
				onToggle={handleMenuToggle}
				pathname={pathname}
			/>
		</motion.div>
	)
}
