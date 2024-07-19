import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import Footer from './pages/Footer'
import ComingSoon from './pages/ComingSoon'
import Contact from './pages/Contact'
import './App.css'
import QRCodeGenerator from './pages/QRCode'

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<ComingSoon />} />
				{/* <Route path="/contact" element={<QRCodeGenerator />} /> */}
			</Routes>
			<Footer />

			<style>
				{`
        /* Style untuk scrollbar */
        ::-webkit-scrollbar {
          width: 8px; /* Lebar scrollbar */
        }

        /* Track scrollbar */
        ::-webkit-scrollbar-track {
          border-radius: 10px; /* Border radius untuk track */
        }

        /* Handle scrollbar */
        ::-webkit-scrollbar-thumb {
          background-color: #888; /* Warna handle */
          border-radius: 10px; /* Border radius untuk handle */
        }

        /* Ketika hover pada handle */
        ::-webkit-scrollbar-thumb:hover {
          background-color: #555; /* Warna handle saat hover */
        }
        `}
			</style>
		</Router>
	)
}

export default App
