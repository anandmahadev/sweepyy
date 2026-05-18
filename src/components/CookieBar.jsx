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
            <div className="cookie-top">
              <p>
                To continue using this website, you agree that we may store and access cookies on your device.
              </p>
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
            {showPreferences && (
              <div className="preferences-panel">
                <label className="pref-card disabled">
                  <input type="checkbox" checked={preferences.essential} disabled readOnly /> 
                  <span className="pref-name">Essential</span>
                  <span className="pref-desc">Required for core functions</span>
                </label>
                <label className={`pref-card ${preferences.analytics ? 'active' : ''}`}>
                  <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })} /> 
                  <span className="pref-name">Analytics</span>
                  <span className="pref-desc">Help us optimize performance</span>
                </label>
                <label className={`pref-card ${preferences.marketing ? 'active' : ''}`}>
                  <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })} /> 
                  <span className="pref-name">Marketing</span>
                  <span className="pref-desc">Enable tailored insights</span>
                </label>
              </div>
            )}
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
          flex-direction: column;
          gap: 15px;
        }

        .cookie-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 20px;
        }

        .preferences-panel {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin: 5px 0 10px;
          font-size: 13px;
          width: 100%;
        }

        .pref-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 15px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: none;
          position: relative;
          text-align: left;
        }

        .pref-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .pref-card.active {
          border-color: var(--accent-orange);
          background: rgba(244, 121, 32, 0.1);
        }

        .pref-card.disabled {
          opacity: 0.6;
          cursor: default;
        }

        .pref-card input {
          position: absolute;
          top: 12px;
          right: 12px;
          accent-color: var(--accent-orange);
        }

        .pref-name {
          font-weight: 700;
          color: white;
          font-size: 14px;
        }

        .pref-desc {
          color: #aaa;
          font-size: 11px;
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
          .cookie-top {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          .preferences-panel {
            grid-template-columns: 1fr;
          }
          .cookie-actions {
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }
          .cookie-actions button {
            width: 100%;
          }
        }
      `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBar;
