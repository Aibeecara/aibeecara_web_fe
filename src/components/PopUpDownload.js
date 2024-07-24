import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { useLanguage } from '../contexts/LanguageContext'

const PopUpDownload = ({ closeModal }) => {
	const { language } = useLanguage()

	return (
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
					{language === 'EN'
						? 'Download Our App Now'
						: 'Unduh Aplikasi Kami Sekarang'}
				</h2>
				<p className="text-gray-700 mb-2 text-center">
					{language === 'EN'
						? 'Click the button below to download our app and start your journey towards effective language learning.'
						: 'Klik tombol di bawah untuk mengunduh aplikasi kami dan mulai perjalanan Anda'}
				</p>
				<p className="text-red-600 mb-6 text-center font-bold p-4 rounded-xl border-2 border-red-500 border-dashed bg-red-100">
					{language === 'EN'
						? 'Note: The app is currently in alpha testing phase.'
						: 'Catatan: Saat ini, aplikasi sedang dalam tahap pengujian alpha'}
				</p>
				<div className="flex justify-center">
					<a
						href="https://github.com/Aibeecara/aibeecara_web_fe/releases/download/v0.25.07-alpha/aibeecara-v0.25.07-alpha.apk"
						download
						className="bg-[#FFB526] text-white px-6 py-3 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105"
					>
						{language === 'EN' ? 'Download Now' : 'Unduh Sekarang'}
					</a>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default PopUpDownload
