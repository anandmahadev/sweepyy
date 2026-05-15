import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { Truck, Road, Construction, Factory, Waves, ParkingCircle } from 'lucide-react';

const Solutions = () => {
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
