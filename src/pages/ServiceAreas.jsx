import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';

const ServiceAreas = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const states = [
    'Alabama', 'California', 'Delaware', 'Florida', 'Georgia', 'Illinois', 
    'Indiana', 'Louisiana', 'Maryland', 'Michigan', 'Missouri', 'Mississippi', 
    'North Carolina', 'New Jersey', 'Ohio', 'Pennsylvania', 'South Carolina', 
    'Tennessee', 'Texas', 'Virginia', 'West Virginia'
  ];

  const filteredStates = states.filter(state => 
    state.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const getGroupedStates = () => {
    const groups = {};
    filteredStates.forEach(state => {
      const letter = state.charAt(0).toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(state);
    });
    return Object.keys(groups).sort().map(letter => ({
      letter,
      states: groups[letter]
    }));
  };

  const groupedStates = getGroupedStates();

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
            <div className="directory-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '30px', borderBottom: '2px solid var(--accent-orange)', paddingBottom: '10px' }}>
              <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Find Your Local SCA Office</h3>
              <input 
                type="text" 
                placeholder="Search state..." 
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                style={{
                  padding: '8px 15px',
                  borderRadius: '4px',
                  border: '1px solid var(--border-gray)',
                  fontSize: '14px',
                  width: '250px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
             {filteredStates.length > 0 ? (
               <div className="state-directory-groups" style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                 {groupedStates.map((group) => (
                   <div key={group.letter} className="state-group-block" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                     <h4 style={{ margin: 0, fontSize: '20px', color: 'var(--accent-orange)', borderBottom: '2px solid var(--accent-orange)', paddingBottom: '3px', width: '30px', textAlign: 'center', fontWeight: 'bold' }}>{group.letter}</h4>
                     <div className="state-grid-full">
                       {group.states.map((state) => (
                         <div key={state} className="state-card-container">
                           <Link 
                             to={`/service-areas/${state.toLowerCase().replace(' ', '-')}`} 
                             className="state-link"
                           >
                             <span className="state-name">{state}</span>
                             <span className="view-link">View Details</span>
                           </Link>
                           <Link 
                             to="/contact" 
                             state={{ preselectedState: state }}
                             className="state-quote-btn"
                           >
                             Fast Quote →
                           </Link>
                         </div>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
             ) : (
              <div className="no-states" style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '4px', border: '1px solid var(--border-gray)' }}>
                <p style={{ margin: 0, color: 'var(--medium-gray)', fontSize: '15px' }}>No operations found matching "{filterQuery}". We are expanding rapidly—contact us to discuss service options in your area!</p>
              </div>
            )}
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

        .state-card-container {
          background: white;
          border-radius: 6px;
          border: 1px solid var(--border-gray);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .state-card-container:hover {
          border-color: var(--accent-orange);
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }

        .state-link {
          padding: 20px 20px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          border: none;
          border-radius: 0;
        }

        .state-link:hover {
          transform: none;
          box-shadow: none;
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

        .state-quote-btn {
          margin: 0 20px 20px;
          padding: 8px 12px;
          background: rgba(244, 121, 32, 0.08);
          color: var(--accent-orange);
          font-weight: 700;
          font-size: 13px;
          text-align: center;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .state-quote-btn:hover {
          background: var(--accent-orange);
          color: white;
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
