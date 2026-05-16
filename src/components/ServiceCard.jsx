import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title = 'Service Title', description = 'Service description goes here.', delay = 0 }) => {
  if (!Icon) return null;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="service-card"
    >
      <div className="card-icon">
        <Icon size={32} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/solutions" className="card-link">
        Learn More <ArrowRight size={16} />
      </Link>

      <style jsx>{`
        .service-card {
          background: white;
          padding: 40px 30px;
          border-radius: 4px;
          box-shadow: var(--box-shadow);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border-bottom: 4px solid var(--accent-orange);
        }

        .service-card:hover .card-icon {
          transform: scale(1.1);
        }

        .card-icon {
          width: 70px;
          height: 70px;
          background-color: var(--accent-orange);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }

        h3 {
          font-size: 20px;
          margin-bottom: 15px;
          color: var(--primary-blue);
        }

        p {
          font-size: 15px;
          color: var(--medium-gray);
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .card-link {
          color: var(--accent-orange);
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
        }

        .card-link:hover {
          gap: 12px;
        }
      `}</style>
    </motion.div>
  );
};

export default ServiceCard;
