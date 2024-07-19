import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRobot, FaVolumeUp, FaCheckCircle, FaEdit } from 'react-icons/fa'
import patternImage from '../assets/pattern.png'
import { Helmet } from 'react-helmet'
import { useLanguage } from '../contexts/LanguageContext'

const Features = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

	const { language } = useLanguage()

	const featuresData = [
		{
			title:
				language === 'EN'
					? 'Virtual Character Interaction'
					: 'Interaksi Karakter Virtual',
			description:
				language === 'EN'
					? 'Engage in conversations with a virtual character powered by AI, making learning interactive and engaging.'
					: 'Terlibat dalam percakapan dengan karakter virtual yang ditenagai oleh AI, membuat pembelajaran menjadi interaktif dan menarik.',
			icon: (
				<FaRobot className="text-5xl text-[#FFB526] group-hover:text-white transition-colors duration-300" />
			),
		},
		{
			title:
				language === 'EN' ? 'Pronunciation Feedback' : 'Umpan Balik Pengucapan',
			description:
				language === 'EN' ? 'Improve your pronunciation with our advanced assessment tool that provides real-time feedback.' : 'Perbaiki pengucapan Anda dengan alat penilaian canggih kami yang memberikan umpan balik secara real-time.',
			icon: (
				<FaVolumeUp className="text-5xl text-[#FFB526] group-hover:text-white transition-colors duration-300" />
			),
		},
		{
			title: language === 'EN' ? 'Grammar Checking' : 'Pengecekan Tata Bahasa',
			description:
				language === 'EN' ? 'Ensure your grammar is perfect with our comprehensive grammar checking feature.' : 'Pastikan tata bahasa Anda sempurna dengan fitur pengecekan tata bahasa kami yang komprehensif.',
			icon: (
				<FaEdit className="text-5xl text-[#FFB526] group-hover:text-white transition-colors duration-300" />
			),
		},
		{
			title: language === 'EN' ? 'Word Count Accuracy' : 'Akurasi Hitung Kata',
			description:
				language === 'EN' ? 'Track and improve the accuracy of your word count with detailed analytics.' : 'Lacak dan tingkatkan akurasi hitung kata Anda dengan analitik yang detail.',
			icon: (
				<FaCheckCircle className="text-5xl text-[#FFB526] group-hover:text-white transition-colors duration-300" />
			),
		},
	]

	return (
		<div
			className="relative bg-gradient-to-b from-gray-50 to-[#FFB526] py-16 font-baloobhaijaan2 overflow-hidden"
			id="features"
		>
			<div
				className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
				style={{ backgroundImage: `url(${patternImage})` }}
			/>
			<div className="relative z-10 container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-12 text-black">
					{language === 'EN' ? 'App Features' : 'Fitur Aplikasi'}
				</h2>
				<div
					ref={ref}
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
				>
					{featuresData.map((feature, index) => (
						<motion.div
							key={index}
							className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-b hover:from-[#FFB526] hover:to-[#FF8E26] group"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={
								inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
							}
							transition={{ duration: 0.6, delay: index * 0.2 }}
						>
							<div className="mb-6">{feature.icon}</div>
							<h3 className="text-2xl font-bold mb-3 text-black group-hover:text-white">
								{feature.title}
							</h3>
							<p className="text-gray-700 group-hover:text-white">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>

			<Helmet>
				<title>Features | aibeecara</title>
				<meta
					name="description"
					content="Engage in conversations with a virtual character powered by AI, making learning interactive and engaging."
				/>
			</Helmet>
		</div>
	)
}

export default Features
