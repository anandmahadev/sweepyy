import React from 'react';

const SectionHeader = ({ eyebrow, title, centered = true, light = false }) => {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={light ? 'text-white' : ''}>{title}</h2>
      
      <style jsx>{`
        .section-header {
          margin-bottom: 50px;
        }
        
        .text-center {
          text-align: center;
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
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionHeader;
