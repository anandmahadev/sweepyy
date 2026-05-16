/**
 * Main Application Component
 * Handles global routing and layout structure.
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBar from './components/CookieBar';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import ServiceAreas from './pages/ServiceAreas';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ServiceAreaDetail from './pages/ServiceAreaDetail';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <AccessibilityToolbar />
        <Header />
        <main>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.SOLUTIONS} element={<Solutions />} />
            <Route path={ROUTES.SERVICE_AREAS} element={<ServiceAreas />} />
            <Route path={ROUTES.SERVICE_AREA_DETAIL} element={<ServiceAreaDetail />} />
            <Route path={ROUTES.NEWS} element={<News />} />
            <Route path={ROUTES.CAREERS} element={<Careers />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieBar />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
