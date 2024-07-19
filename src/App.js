import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './pages/Footer';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
