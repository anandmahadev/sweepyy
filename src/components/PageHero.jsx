import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, bgImage }) => {
  const defaultBg = 'https://images.unsplash.com/photo-1590486803833-ffc6f9861b3c?auto=format&fit=crop&q=80&w=1920';
  const backgroundUrl = bgImage || defaultBg;

  return (
    <section className="page-hero bg-blue" style={{ backgroundImage: `linear-gradient(rgba(0, 48, 135, 0.9), rgba(0, 48, 135, 0.9)), url(${backgroundUrl})` }}>
      <div className="container">
        <h1 className="page-title">{title}</h1>
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>{title}</span>
        </div>
      </div>

      <style jsx>{`
        .page-hero {
          padding: 100px 0 60px;
          margin-top: calc(var(--header-height) + var(--top-bar-height));
          background-size: cover;
          background-position: center;
          color: white;
        }

        .page-title {
          font-size: 42px;
          color: white;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .breadcrumbs a:hover {
          color: var(--accent-orange);
        }

        .breadcrumbs span {
          color: var(--white);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .page-hero {
            padding: 60px 0 40px;
          }
          .page-title {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default PageHero;
