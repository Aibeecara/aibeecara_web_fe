import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import patternImage from '../assets/pattern.png'
import { InView } from 'react-intersection-observer'

const cardVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
}

const Contact = () => {
	return (
		<div
			className="relative bg-gradient-to-b from-gray-50 to-[#FFB526] py-16 font-baloobhaijaan2"
			id="contact"
		>
			<div
				className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
				style={{ backgroundImage: `url(${patternImage})` }}
			/>
			<div className="container mx-auto px-6 flex flex-col items-center justify-center">
				<InView triggerOnce>
					{({ inView, ref }) => (
						<motion.h1
							ref={ref}
							className="text-4xl font-bold text-center mb-12 text-black"
							initial={{ opacity: 0, y: -50 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
							transition={{ duration: 0.8 }}
						>
							Contact Us
						</motion.h1>
					)}
				</InView>

				<div className="flex flex-col md:flex-row justify-center gap-6 w-full">
					<InView triggerOnce>
						{({ inView, ref }) => (
							<motion.div
								ref={ref}
								className="w-full bg-white p-6 rounded-lg shadow-lg text-center"
								variants={cardVariants}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<a
									href="https://www.linkedin.com/in/aibeecara-indonesia/" // Ganti dengan URL LinkedIn Anda
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center text-gray-800 hover:text-[#FFB526] transition-colors duration-300"
								>
									<FaLinkedin className="text-6xl mb-4" />
									<h3 className="text-2xl font-semibold">LinkedIn</h3>
									<p className="text-gray-600 mt-2">Connect with us on LinkedIn.</p>
								</a>
							</motion.div>
						)}
					</InView>

					<InView triggerOnce>
						{({ inView, ref }) => (
							<motion.div
								ref={ref}
								className="w-full bg-white p-6 rounded-lg shadow-lg text-center"
								variants={cardVariants}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								transition={{ duration: 0.6, delay: 0.4 }}
							>
								<a
									href="https://www.instagram.com/aibeecara/" // Ganti dengan URL Instagram Anda
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center text-gray-800 hover:text-[#FFB526] transition-colors duration-300"
								>
									<FaInstagram className="text-6xl mb-4" />
									<h3 className="text-2xl font-semibold">Instagram</h3>
									<p className="text-gray-600 mt-2">Follow us on Instagram.</p>
								</a>
							</motion.div>
						)}
					</InView>

					<InView triggerOnce>
						{({ inView, ref }) => (
							<motion.div
								ref={ref}
								className="w-full bg-white p-6 rounded-lg shadow-lg text-center"
								variants={cardVariants}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<a
									href="mailto:aibeecara.id@gmail.com" // Ganti dengan alamat email Anda
									className="flex flex-col items-center text-gray-800 hover:text-[#FFB526] transition-colors duration-300"
								>
									<FaEnvelope className="text-6xl mb-4" />
									<h3 className="text-2xl font-semibold">Email</h3>
									<p className="text-gray-600 mt-2">Drop us an email for any inquiries.</p>
								</a>
							</motion.div>
						)}
					</InView>
				</div>
			</div>
		</div>
	)
}

export default Contact
