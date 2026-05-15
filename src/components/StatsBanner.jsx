import React from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="stat-number"
    >
      {number}
    </motion.h3>
    <p className="stat-label">{label}</p>
  </div>
);

/**
 * StatsBanner Component
 * Displays key company statistics in a horizontal banner.
 */
const StatsBanner = () => {
  const stats = [
    { number: '70+', label: 'Locations' },
    { number: '21', label: 'States' },
    { number: '2,000+', label: 'Employees' },
    { number: '2,350', label: 'Vehicle Fleet' }
  ];

  return (
    <section className="stats-banner bg-blue">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <StatItem number={stat.number} label={stat.label} />
            {index < stats.length - 1 && <div className="stat-divider" />}
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        .stats-banner {
          padding: 40px 0;
        }

        .stats-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
        }

        .stat-item {
          flex: 1;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 800;
          color: white;
          margin: 0;
          line-height: 1;
        }

        .stat-label {
          color: var(--accent-orange);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 5px;
        }

        .stat-divider {
          width: 1px;
          height: 60px;
          background-color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .stats-grid {
            flex-direction: column;
            gap: 30px;
          }
          
          .stat-divider {
            display: none;
          }
          
          .stat-number {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsBanner;
