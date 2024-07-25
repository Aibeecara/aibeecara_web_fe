// src/components/DropdownMenu.js
import React from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = ({ isOpen }) => {
	return (
		<div
			className={`absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 transition-all duration-300 ${
				isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}
		>
			<ul className="flex flex-col">
				<li>
					<Link
						to="/privacy-policy"
						className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-300"
					>
						Privacy Policy
					</Link>
				</li>
				<li>
					<Link
						to="/account-deletion"
						className="block px-4 py-2 text-black hover:bg-gray-200 transition duration-300"
					>
						Account Deletion
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default DropdownMenu
