import { Phone, Menu, X, Accessibility } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';
import { NAV_LINKS } from '../constants/navigation';

const Linkedin = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Twitter = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

const Facebook = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);


/**
 * Header Component
 * 
 * The main navigational header of the application. Includes:
 * - Top bar with contact info and social links
 * - Main navigation menu with active state tracking
 * - Mobile responsive menu toggle
 * - Sticky behavior on scroll
 * 
 * @returns {React.ReactElement} The rendered header component
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleAccessibility = () => {
    window.dispatchEvent(new Event('toggle-accessibility-toolbar'));
  };

  /**
   * Effect hook to handle scroll events and update the sticky header state.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <Phone size={14} /> {SITE_CONFIG.phone}
            </span>
            <div className="social-icons">
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={16} /></a>
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={16} /></a>
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleToggleAccessibility} 
              className="accessibility-nav-btn"
              title="Toggle Accessibility Options"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--primary-blue)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '5px'
              }}
            >
              <Accessibility size={20} />
            </button>
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

          .nav-links.mobile-open .nav-item {
            width: 100%;
            padding: 8px 12px;
            border-radius: 4px;
            transition: all 0.3s ease;
          }

          .nav-links.mobile-open .nav-item.active {
            background: rgba(244, 121, 32, 0.08);
            border-left: 4px solid var(--accent-orange);
            color: var(--accent-orange);
          }

          .nav-links.mobile-open .nav-item.active::after {
            display: none;
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
