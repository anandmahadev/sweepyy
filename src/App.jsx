import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBar from './components/CookieBar';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import ServiceAreas from './pages/ServiceAreas';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ServiceAreaDetail from './pages/ServiceAreaDetail';


function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <AccessibilityToolbar />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/:area" element={<ServiceAreaDetail />} />

            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieBar />
      </div>
    </Router>
  );
}

export default App;
