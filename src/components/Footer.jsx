import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

/**
 * Footer Component
 * Renders site-wide footer with navigation links, contact info, and social icons.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Column 1 */}
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-icon">🚛</span>
              <span className="logo-text">SCA</span>
            </div>
            <p className="footer-desc">
              Sweeping Corporation of America is the largest professional power sweeping and JetVac services company in the U.S.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/service-areas">Service Areas</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Solutions</h4>
            <ul className="footer-links">
              <li><Link to="/solutions">Street Sweeping</Link></li>
              <li><Link to="/solutions">Highway Sweeping</Link></li>
              <li><Link to="/solutions">JetVac Services</Link></li>
              <li><Link to="/solutions">Parking Lot Sweeping</Link></li>
              <li><Link to="/solutions">Construction Sweeping</Link></li>
              <li><Link to="/solutions">Industrial Sweeping</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="text-orange" />
                <span>HQ: Cleveland, Ohio</span>
              </li>
              <li>
                <Phone size={18} className="text-orange" />
                <span>(216) 777-2750</span>
              </li>
              <li>
                <Mail size={18} className="text-orange" />
                <span>mlatanza@sweepingcorp.com</span>
              </li>
              <li>
                <Clock size={18} className="text-orange" />
                <span>Mon–Fri, 8AM–5PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© 2024 Sweeping Corporation of America. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--footer-dark);
          color: white;
          padding-top: 60px;
        }

        .footer-top {
          padding-bottom: 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo {
          font-size: 28px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
        }

        .footer-desc {
          font-size: 14px;
          color: #ccc;
          line-height: 1.6;
        }

        .footer-socials {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .social-link:hover {
          background: var(--accent-orange);
          transform: translateY(-3px);
        }

        .footer-heading {
          font-size: 16px;
          color: white;
          text-transform: uppercase;
          position: relative;
          padding-bottom: 10px;
          margin-bottom: 10px;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--accent-orange);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links li a {
          font-size: 14px;
          color: #ccc;
        }

        .footer-links li a:hover {
          color: var(--accent-orange);
          padding-left: 5px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-info li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #ccc;
        }

        .footer-bottom {
          background-color: var(--footer-bottom);
          padding: 15px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #999;
        }

        .footer-bottom-links {
          display: flex;
          gap: 10px;
        }

        .footer-bottom-links a:hover {
          color: white;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
