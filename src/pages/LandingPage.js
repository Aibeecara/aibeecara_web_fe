import React, { useRef } from 'react'
import Home from './Home'
import Features from './Features'
import Contact from './Contact'

const LandingPage = () => {
	const scrollToRef = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth' })
	}

	const homeRef = useRef(null)
	const featuresRef = useRef(null)
	const contactRef = useRef(null)

	return (
		<div>
			<div ref={homeRef}>
				<Home />
			</div>

			<div ref={featuresRef}>
				<Features />
			</div>

			<div ref={contactRef}>
				<Contact />
			</div>
		</div>
	)
}

export default LandingPage
