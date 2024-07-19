import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import aibeecaraText from '../assets/TextAibeecaraOnly.png'
import aibeecaraLogo from '../assets/IconAibeecaraOnly.png'
import { MdEmail } from 'react-icons/md'
import { InView } from 'react-intersection-observer'

const Footer = () => {
	const footerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<footer className="bg-zinc-900 text-white py-12 font-baloobhaijaan2">
			<div className="container mx-auto px-4">
				<InView triggerOnce>
					{({ inView, ref }) => (
						<motion.div
							ref={ref}
							className="flex flex-col md:flex-row justify-between items-center"
							variants={footerVariants}
							initial="hidden"
							animate={inView ? 'visible' : 'hidden'}
							transition={{ duration: 0.8 }}
						>
							{/* Brand Section */}
							<div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
								<a href="/" className="flex flex-row gap-3 items-center mb-4">
									<LazyLoadImage
										src={aibeecaraLogo}
										alt="logo-beecara"
										className="w-12 cursor-pointer"
									/>
									<LazyLoadImage
										src={aibeecaraText}
										alt="logo-beecara"
										className="w-40 cursor-pointer"
									/>
								</a>
								<p className="text-gray-400 text-lg text-center">
									Fun & Effective Language Learning through Virtual Adventures
								</p>
							</div>

							{/* Navigation Links */}
							<div className="flex flex-wrap justify-center space-x-6 md:space-x-12 mb-8 md:mb-0 text-lg">
								{['Home', 'Features', 'Contact', 'About'].map((item, index) => (
									<a
										key={index}
										href={`/${item.toLowerCase()}`}
										className="text-gray-400 hover:text-yellow-500 transition duration-300"
									>
										{item}
									</a>
								))}
							</div>

							{/* Social Media Icons */}
							<div className="flex space-x-6">
								<a
									href="https://www.instagram.com/aibeecara/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-yellow-500 transition duration-300"
								>
									<FaInstagram size={24} />
								</a>
								<a
									href="https://www.linkedin.com/in/aibeecara-indonesia/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-yellow-500 transition duration-300"
								>
									<FaLinkedin size={24} />
								</a>
								<a
									href="mailto:aibeecara.id@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-yellow-500 transition duration-300"
								>
									<MdEmail size={24} />
								</a>
							</div>
						</motion.div>
					)}
				</InView>
				<div className="mt-8 text-center text-gray-500">
					&copy; {new Date().getFullYear()} Aibeecara Indonesia. All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer
