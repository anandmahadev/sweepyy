import React from 'react';

/**
 * SectionHeader Component
 * Displays a section title with an optional eyebrow text.
 * Supports centered and light modes.
 */
const SectionHeader = ({ eyebrow, title, centered = true, light = false, showUnderline = false, titleClassName = '' }) => {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`${light ? 'text-white' : ''} ${titleClassName}`}>{title}</h2>
      {showUnderline && <div className={`header-underline ${centered ? 'mx-auto' : ''}`}></div>}
      
      <style jsx>{`
        .section-header {
          margin-bottom: 50px;
        }
        
        .text-center {
          text-align: center;
        }

        .header-underline {
          width: 50px;
          height: 3px;
          background-color: var(--accent-orange);
          margin-top: 15px;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .eyebrow {
          display: block;
          color: var(--accent-orange);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        h2 {
          font-size: 32px;
          margin: 0;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 30px;
          }
          h2 {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionHeader;
