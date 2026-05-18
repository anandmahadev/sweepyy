import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CountUpNumber = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState('0');
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    
    // Parse target number (extract digits only)
    const end = parseInt(target.replace(/[^0-9]/g, ''), 10);
    const hasPlus = target.includes('+');
    const hasComma = target.includes(',');
    
    if (isNaN(end)) {
      setCount(target);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * end);
      
      let formatted = current;
      if (hasComma) {
        formatted = current.toLocaleString();
      }
      if (hasPlus) {
        formatted = `${formatted}+`;
      }
      setCount(formatted);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="stat-number"
    >
      <CountUpNumber target={number} />
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
          padding: 60px 0;
          background: linear-gradient(135deg, var(--primary-blue) 0%, #002366 100%);
          position: relative;
          overflow: hidden;
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
