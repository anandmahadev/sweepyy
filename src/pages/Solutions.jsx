import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { Truck, Road, Construction, Factory, Waves, ParkingCircle } from 'lucide-react';

const Solutions = () => {
  const [areaSize, setAreaSize] = useState(10);
  const [frequency, setFrequency] = useState('weekly');
  const [sweeperType, setSweeperType] = useState('air');

  const calculateImpact = () => {
    let multiplier = 1;
    if (frequency === 'weekly') multiplier = 52;
    else if (frequency === 'bi-weekly') multiplier = 26;
    else multiplier = 12;

    let efficiency = 75;
    if (sweeperType === 'air') efficiency = 92;
    else if (sweeperType === 'vacuum') efficiency = 88;
    else efficiency = 65;

    const debrisRemoved = Math.round(areaSize * 15 * multiplier);
    const runoffPrevented = efficiency;
    const costEstimate = Math.round(areaSize * 25 * multiplier);

    return { debrisRemoved, runoffPrevented, costEstimate };
  };

  const { debrisRemoved, runoffPrevented, costEstimate } = calculateImpact();
  const services = [
    { 
      icon: Truck, 
      title: 'Street Sweeping', 
      description: 'Our street sweeping services help municipalities and residential communities maintain a clean environment. We remove debris, sand, and litter to prevent stormwater contamination and improve air quality.' 
    },
    { 
      icon: Road, 
      title: 'Highway Sweeping', 
      description: 'SCA provides specialized high-speed sweeping for state DOTs and interstate systems. Our advanced fleet handles heavy debris and maintains safety standards on major thoroughfares.' 
    },
    { 
      icon: Construction, 
      title: 'Construction Sweeping', 
      description: 'We keep job sites clean and compliant with environmental regulations. From track-out control to final clean-up, our team ensures your project stays on schedule and meets all local codes.' 
    },
    { 
      icon: Factory, 
      title: 'Industrial Sweeping', 
      description: 'Our industrial services focus on dust control and debris removal for warehouses, manufacturing plants, and intermodal facilities, improving safety and operational efficiency.' 
    },
    { 
      icon: Waves, 
      title: 'JetVac Services', 
      description: 'We offer advanced sewer cleaning and stormwater management solutions using high-performance JetVac trucks. Our services prevent flooding and ensure efficient water flow in municipal systems.' 
    },
    { 
      icon: ParkingCircle, 
      title: 'Parking Lot Sweeping', 
      description: 'Maintain the curb appeal and safety of your commercial property with our professional parking lot sweeping. We service retail centers, office parks, and multi-family complexes nationwide.' 
    },
  ];

  return (
    <div className="solutions-page">
      <PageHero title="Our Solutions" />
      
      <section className="section-padding">
        <div className="container">
          <SectionHeader 
            eyebrow="What We Do" 
            title="Comprehensive Environmental Solutions for Every Need" 
          />
          <div className="solutions-intro text-center">
            <p>
              SCA provides a full suite of power sweeping and JetVac services designed to meet the unique needs of our clients. 
              Whether you are a municipality, a state agency, or a private business, we have the technology and expertise 
              to deliver superior results.
            </p>
          </div>
          
          <div className="solutions-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue">
        <div className="container industries-content">
          <SectionHeader title="Industries We Serve" light={true} />
          <div className="industry-grid">
            {[
              'Municipalities', 'State DOTs', 'Construction Companies', 
              'Retail Centers', 'Manufacturing Plants', 'Airports', 
              'Property Managers', 'Residential Communities'
            ].map((industry, i) => (
              <div key={i} className="industry-item">
                <span className="dot"></span>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light" style={{ borderTop: '1px solid var(--border-gray)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <SectionHeader eyebrow="Calculator" title="Estimate Your Environmental & Debris Impact" centered={true} />
          
          <div className="calculator-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', background: 'white', padding: '40px', borderRadius: '8px', boxShadow: 'var(--box-shadow, 0 4px 12px rgba(0,0,0,0.05))', marginTop: '40px' }}>
            <div className="calc-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '14px', color: 'var(--primary-blue)' }}>Area to Sweep (Thousand Sq. Yards)</label>
                <input 
                  type="number" 
                  value={areaSize}
                  onChange={(e) => setAreaSize(Math.max(1, parseInt(e.target.value) || 0))}
                  style={{ width: '100%', padding: '10px', border: '1px solid var(--border-gray)', borderRadius: '4px' }} 
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '14px', color: 'var(--primary-blue)' }}>Sweeping Frequency</label>
                <select 
                  value={frequency} 
                  onChange={(e) => setFrequency(e.target.value)}
                  style={{ width: '100%', padding: '10px', border: '1px solid var(--border-gray)', borderRadius: '4px' }}
                >
                  <option value="weekly">Weekly (52x / year)</option>
                  <option value="bi-weekly">Bi-Weekly (26x / year)</option>
                  <option value="monthly">Monthly (12x / year)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', fontSize: '14px', color: 'var(--primary-blue)' }}>Sweeper Technology Type</label>
                <select 
                  value={sweeperType} 
                  onChange={(e) => setSweeperType(e.target.value)}
                  style={{ width: '100%', padding: '10px', border: '1px solid var(--border-gray)', borderRadius: '4px' }}
                >
                  <option value="air">Regenerative Air (PM10 Certified)</option>
                  <option value="vacuum">Vacuum Filter Sweeper</option>
                  <option value="broom">Mechanical Broom Sweeper</option>
                </select>
              </div>
            </div>

            <div className="calc-results" style={{ background: 'var(--primary-blue)', color: 'white', padding: '30px', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '25px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '13px', textTransform: 'uppercase', opacity: 0.8, fontWeight: 'bold' }}>Debris Removed Annually</span>
                <strong style={{ fontSize: '32px', color: 'var(--accent-orange)' }}>{debrisRemoved.toLocaleString()} lbs</strong>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '13px', textTransform: 'uppercase', opacity: 0.8, fontWeight: 'bold' }}>Stormwater Pollutant Reduction Efficiency</span>
                <strong style={{ fontSize: '32px', color: 'var(--accent-orange)' }}>{runoffPrevented}% Efficiency</strong>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                <span style={{ display: 'block', fontSize: '12px', opacity: 0.7, fontStyle: 'italic' }}>* Estimates are based on average municipal loading rates and EPA pollutant recovery efficiency factors.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .solutions-intro {
          max-width: 800px;
          margin: 0 auto 60px;
          color: var(--medium-gray);
          font-size: 18px;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .industry-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .industry-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          font-weight: 600;
          font-size: 16px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent-orange);
          border-radius: 50%;
        }

        @media (max-width: 992px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .industry-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .solutions-grid {
            grid-template-columns: 1fr;
          }
          .industry-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Solutions;
