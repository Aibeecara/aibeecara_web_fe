import React from 'react'
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
	FaTiktok,
} from 'react-icons/fa'
import { BsScissors } from 'react-icons/bs'
import { FaX, FaXTwitter } from 'react-icons/fa6'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import aibeecaraText from '../assets/TextAibeecaraOnly.png'
import aibeecaraLogo from '../assets/IconAibeecaraOnly.png'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
	return (
		<footer className="bg-zinc-900 text-white py-12 font-baloobhaijaan2">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
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
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-yellow-500 transition duration-300"
						>
							<FaInstagram size={24} />
						</a>
						<a
							href="https://linkedin.com"
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
				</div>
				<div className="mt-8 text-center text-gray-500">
					&copy; {new Date().getFullYear()} Aibeecara Indonesia. All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer
