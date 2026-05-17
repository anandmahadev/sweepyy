import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('sca-cookie-consent-level');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('sca-cookie-consent-level', JSON.stringify({ essential: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('sca-cookie-consent-level', JSON.stringify(preferences));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="cookie-bar"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="container cookie-content">
            <p>
              To continue using this website, you agree that we may store and access cookies on your device.
            </p>
            {showPreferences && (
              <div className="preferences-panel">
                <label>
                  <input type="checkbox" checked={preferences.essential} disabled readOnly /> Essential (Required)
                </label>
                <label>
                  <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })} /> Analytics
                </label>
                <label>
                  <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })} /> Marketing
                </label>
              </div>
            )}
            <div className="cookie-actions">
              {showPreferences ? (
                <button className="btn btn-orange" onClick={handleSavePreferences}>Save Settings</button>
              ) : (
                <>
                  <button className="btn btn-orange" onClick={handleAcceptAll}>Accept All</button>
                  <button className="btn btn-outline" onClick={() => setShowPreferences(true)}>Preferences</button>
                </>
              )}
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

        .preferences-panel {
          display: flex;
          gap: 20px;
          margin: 10px 0;
          font-size: 13px;
        }

        .preferences-panel label {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .preferences-panel input {
          cursor: pointer;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid white;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 13px;
          cursor: pointer;
          font-weight: 700;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: white;
          color: var(--primary-blue);
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBar;
