import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';

const ServiceAreas = () => {
  const states = [
    'Alabama', 'California', 'Delaware', 'Florida', 'Georgia', 'Illinois', 
    'Indiana', 'Louisiana', 'Maryland', 'Michigan', 'Missouri', 'Mississippi', 
    'North Carolina', 'New Jersey', 'Ohio', 'Pennsylvania', 'South Carolina', 
    'Tennessee', 'Texas', 'Virginia', 'West Virginia'
  ];

  return (
    <div className="service-areas-page">
      <PageHero title="Service Areas" />
      
      <section className="section-padding">
        <div className="container">
          <SectionHeader 
            eyebrow="Where We Operate" 
            title="Strategic Locations Across 21 States" 
          />
          
          <div className="map-hero">
            <div className="map-overlay">
              <h2>Providing Nationwide Coverage with Local Expertise</h2>
              <p>With over 70 locations, we are never far from our customers.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" alt="USA Map Coverage" />
          </div>

          <div className="state-directory">
            <h3>Find Your Local SCA Office</h3>
            <div className="state-grid-full">
              {states.map((state) => (
                <Link 
                  key={state} 
                  to={`/service-areas/${state.toLowerCase().replace(' ', '-')}`} 
                  className="state-link"
                >
                  <span className="state-name">{state}</span>
                  <span className="view-link">View Locations →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2>Don't See Your State?</h2>
          <p>We are constantly expanding our service area. Contact us to discuss your project needs.</p>
          <Link to="/contact" className="btn btn-orange">Contact Us Today</Link>
        </div>
      </section>

      <style jsx>{`
        .map-hero {
          position: relative;
          height: 400px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 60px;
          box-shadow: var(--box-shadow);
        }

        .map-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 48, 135, 0.7);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 40px;
        }

        .map-overlay h2 {
          color: white;
          font-size: 32px;
          margin-bottom: 15px;
        }

        .state-directory h3 {
          font-size: 24px;
          margin-bottom: 30px;
          border-bottom: 2px solid var(--accent-orange);
          display: inline-block;
          padding-bottom: 5px;
        }

        .state-grid-full {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .state-link {
          background: white;
          padding: 20px;
          border-radius: 4px;
          border: 1px solid var(--border-gray);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: var(--transition-smooth);
        }

        .state-link:hover {
          border-color: var(--accent-orange);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transform: translateY(-2px);
        }

        .state-name {
          font-weight: 700;
          color: var(--primary-blue);
          font-size: 18px;
        }

        .view-link {
          font-size: 13px;
          color: var(--accent-orange);
          font-weight: 600;
          text-transform: uppercase;
        }

        @media (max-width: 992px) {
          .state-grid-full {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .state-grid-full {
            grid-template-columns: 1fr;
          }
          .map-hero {
            height: 300px;
          }
          .map-overlay h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceAreas;
