import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sca-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sca-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-bar">
      <div className="container cookie-content">
        <p>
          To continue using this website, you agree that we may store and access cookies on your device.
        </p>
        <div className="cookie-actions">
          <button className="btn btn-orange" onClick={handleAccept}>Accept</button>
          <Link to="/privacy" className="privacy-link">Privacy Policy</Link>
        </div>
      </div>

      <style jsx>{`
        .cookie-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(26, 26, 46, 0.95);
          color: white;
          padding: 15px 0;
          z-index: 2000;
          box-shadow: 0 -4px 12px rgba(0,0,0,0.2);
          backdrop-filter: blur(5px);
        }

        .cookie-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .cookie-content p {
          font-size: 14px;
          margin: 0;
        }

        .cookie-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
        }

        .privacy-link {
          font-size: 13px;
          text-decoration: underline;
          color: #ccc;
        }

        .privacy-link:hover {
          color: white;
        }

        @media (max-width: 768px) {
          .cookie-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieBar;
