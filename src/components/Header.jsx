import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Linkedin, Twitter, Facebook, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
             {/* Accessibility icon could go here or floating */}
          </div>
          <div className="top-bar-right">
            <span className="phone">
              <Phone size={14} /> (216) 777-2750
            </span>
            <div className="social-icons">
              <Linkedin size={16} />
              <Twitter size={16} />
              <Facebook size={16} />
            </div>
            <Link to="/contact" className="quote-link">Request a Quote</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="main-nav">
        <div className="container nav-content">
          <Link to="/" className="logo">
            <div className="logo-placeholder">
              <span className="logo-icon">🚛</span>
              <span className="logo-text">SCA</span>
            </div>
            <div className="logo-full-text">
              <span className="brand-name">Sweeping Corporation of America</span>
            </div>
          </Link>

          <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-orange nav-cta">Get a Quote</Link>
          </div>

          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <style jsx>{`
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition-smooth);
        }

        .top-bar {
          background-color: var(--primary-blue);
          color: white;
          height: var(--top-bar-height);
          font-size: 13px;
          display: flex;
          align-items: center;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .phone {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .social-icons {
          display: flex;
          gap: 10px;
        }

        .quote-link {
          color: var(--accent-orange);
          font-weight: 600;
        }

        .main-nav {
          background-color: white;
          height: var(--header-height);
          display: flex;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: var(--transition-smooth);
        }

        .header-container.scrolled .main-nav {
          height: 65px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--primary-blue);
        }

        .logo-placeholder {
          font-size: 24px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .logo-full-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-name {
          font-size: 14px;
          font-weight: 700;
          max-width: 150px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .nav-item {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--primary-blue);
          position: relative;
          padding: 5px 0;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--accent-orange);
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent-orange);
        }

        .nav-cta {
          margin-left: 10px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          color: var(--primary-blue);
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          
          .nav-links.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            gap: 15px;
            align-items: flex-start;
          }

          .mobile-toggle {
            display: block;
          }
          
          .logo-full-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
