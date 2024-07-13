import React from 'react'
import IconAibeecaraOnly from '../assets/IconAibeecaraOnly.png'
import TextAibeecaraOnly from '../assets/TextAibeecaraOnly.png'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
            <div className="container mx-auto px-4 py-2">
                <div className="flex justify-center gap-2">
                    <img src={IconAibeecaraOnly} alt="Logo" className="h-10"/>
                    <img src={TextAibeecaraOnly} alt="Logo" className="h-10"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
