import React, { useState, useEffect } from 'react';
import { Accessibility, Type, Contrast, CircleDashed, Link2, Languages } from 'lucide-react';

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-accessibility-toolbar', handleToggle);
    return () => window.removeEventListener('toggle-accessibility-toolbar', handleToggle);
  }, []);

  const toggleGrayscale = () => {
    setGrayscale(!grayscale);
    document.body.classList.toggle('accessibility-grayscale');
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('accessibility-high-contrast');
  };

  const toggleUnderline = () => {
    setUnderlineLinks(!underlineLinks);
    document.body.classList.toggle('accessibility-underline');
  };

  const toggleDyslexicFont = () => {
    setDyslexicFont(!dyslexicFont);
    document.body.classList.toggle('accessibility-dyslexic-font');
  };

  const changeFontSize = (delta) => {
    const newSize = Math.min(Math.max(fontSize + delta, 80), 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  return (
    <div className={`accessibility-widget ${isOpen ? 'open' : ''}`}>
      <button 
        className="accessibility-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility Options"
      >
        <Accessibility size={24} />
      </button>

      <div className="accessibility-menu">
        <h5 className="menu-title">Accessibility Tools</h5>
        
        <div className="tool-group">
          <button className="tool-btn" onClick={() => changeFontSize(10)}>
            <Type size={18} /> Increase Text
          </button>
          <button className="tool-btn" onClick={() => changeFontSize(-10)}>
            <Type size={18} /> Decrease Text
          </button>
        </div>

        <button className={`tool-btn ${grayscale ? 'active' : ''}`} onClick={toggleGrayscale} aria-pressed={grayscale}>
          <CircleDashed size={18} /> Grayscale
        </button>

        <button className={`tool-btn ${highContrast ? 'active' : ''}`} onClick={toggleHighContrast} aria-pressed={highContrast}>
          <Contrast size={18} /> High Contrast
        </button>

        <button className={`tool-btn ${underlineLinks ? 'active' : ''}`} onClick={toggleUnderline} aria-pressed={underlineLinks}>
          <Link2 size={18} /> Underline Links
        </button>

        <button className={`tool-btn ${dyslexicFont ? 'active' : ''}`} onClick={toggleDyslexicFont} aria-pressed={dyslexicFont}>
          <Languages size={18} /> Dyslexic Font
        </button>

        <button className="tool-btn reset-btn" onClick={() => window.location.reload()}>
          Reset Settings
        </button>
      </div>

      <style jsx>{`
        .accessibility-widget {
          position: fixed;
          top: 100px;
          left: 0;
          z-index: 3000;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-240px);
        }

        .accessibility-widget.open {
          transform: translateX(0);
        }

        .accessibility-toggle {
          position: absolute;
          right: -50px;
          top: 0;
          width: 50px;
          height: 50px;
          background: var(--primary-blue);
          color: white;
          border-radius: 0 5px 5px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 0 8px rgba(0,0,0,0.2);
        }

        .accessibility-menu {
          width: 240px;
          background: white;
          padding: 20px;
          box-shadow: 4px 0 12px rgba(0,0,0,0.15);
          border-radius: 0 0 5px 0;
        }

        .menu-title {
          margin-bottom: 20px;
          font-size: 16px;
          border-bottom: 2px solid var(--accent-orange);
          display: inline-block;
          padding-bottom: 5px;
        }

        .tool-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 10px;
        }

        .tool-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: #f8f9fa;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--dark-gray);
          transition: var(--transition-smooth);
        }

        .tool-btn:hover {
          background: var(--primary-blue);
          color: white;
          border-color: var(--primary-blue);
        }

        .tool-btn.active {
          background: var(--primary-blue);
          color: white;
          border-color: var(--primary-blue);
          box-shadow: 0 0 0 2px var(--accent-orange);
        }

        .reset-btn {
          margin-top: 10px;
          background: var(--accent-orange);
          color: white;
          border: none;
        }

        .reset-btn:hover {
          background: var(--accent-orange-dark);
        }
      `}</style>
    </div>
  );
};

export default AccessibilityToolbar;
