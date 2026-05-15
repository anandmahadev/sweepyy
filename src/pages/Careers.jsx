import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { CheckCircle, Users, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const benefits = [
    'Medical, Dental, & Vision Insurance',
    '401(k) Retirement Plan',
    'Paid Vacation & Holidays',
    'Weekly Pay with Direct Deposit',
    'Safety Bonuses & Recognition',
    'Career Growth Opportunities'
  ];

  const positions = [
    { title: 'Street Sweeper Operator', type: 'Full-Time', locations: 'Multiple Locations' },
    { title: 'Diesel Mechanic', type: 'Full-Time', locations: 'Cleveland, OH / Houston, TX' },
    { title: 'Driver Helper', type: 'Full-Time / Seasonal', locations: 'Charlotte, NC' },
    { title: 'Shop Helper', type: 'Full-Time', locations: 'Atlanta, GA' },
    { title: 'Operations Manager', type: 'Full-Time', locations: 'Dallas, TX' },
  ];

  return (
    <div className="careers-page">
      <PageHero title="Careers" />
      
      <section className="section-padding">
        <div className="container join-grid">
          <div className="join-content">
            <SectionHeader eyebrow="Join the SCA Family" title="Build Your Career with the Nation's Leader" centered={false} />
            <p>
              At Sweeping Corporation of America, we don't just sweep streets – we build careers. 
              As we continue to sweep the nation, we are looking for dedicated individuals to join our team 
              of over 2,000 professionals.
            </p>
            <p>
              Whether you are an experienced operator, a skilled mechanic, or just starting your career 
              in environmental services, SCA offers a supportive environment where your contributions are valued.
            </p>
            <div className="benefits-list">
              {benefits.map((benefit, i) => (
                <div key={i} className="benefit-item">
                  <CheckCircle size={18} className="text-orange" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="join-image">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" alt="SCA Team" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <SectionHeader title="Open Positions" />
          
          <div className="jobs-list">
            {positions.map((job, i) => (
              <div key={i} className="job-card">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span><Briefcase size={14} /> {job.type}</span>
                    <span><Users size={14} /> {job.locations}</span>
                  </div>
                </div>
                <button className="btn btn-orange">Apply Now</button>
              </div>
            ))}
          </div>

          <div className="text-center mt-40">
            <p>Don't see a position that fits? Send us your resume for future consideration.</p>
            <Link to="/contact" className="btn btn-outline-blue">General Inquiry</Link>
          </div>
        </div>
      </section>

      <section className="section-padding values-section bg-blue">
        <div className="container">
          <SectionHeader title="Our Core Values" light={true} />
          <div className="values-grid">
            <div className="value-card">
              <Heart size={40} className="text-orange" />
              <h4>Safety First</h4>
              <p>We prioritize the safety of our employees and the communities we serve above all else.</p>
            </div>
            <div className="value-card">
              <GraduationCap size={40} className="text-orange" />
              <h4>Continuous Learning</h4>
              <p>We provide ongoing training and development to help our team reach their full potential.</p>
            </div>
            <div className="value-card">
              <Users size={40} className="text-orange" />
              <h4>Teamwork</h4>
              <p>We believe in the power of collaboration and supporting each other to achieve excellence.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .join-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .join-content p {
          margin-bottom: 20px;
          color: var(--medium-gray);
        }

        .benefits-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 30px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 14px;
        }

        .join-image img {
          width: 100%;
          border-radius: 4px;
          box-shadow: var(--box-shadow);
        }

        .jobs-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .job-card {
          background: white;
          padding: 30px;
          border-radius: 4px;
          box-shadow: var(--box-shadow);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: var(--transition-smooth);
        }

        .job-card:hover {
          transform: translateX(10px);
          border-left: 5px solid var(--accent-orange);
        }

        .job-info h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .job-meta {
          display: flex;
          gap: 20px;
          font-size: 13px;
          color: var(--medium-gray);
        }

        .job-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .mt-40 { margin-top: 40px; }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          text-align: center;
        }

        .value-card {
          padding: 40px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        .value-card h4 {
          color: white;
          font-size: 20px;
          margin: 20px 0 15px;
        }

        .value-card p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 15px;
        }

        @media (max-width: 992px) {
          .join-grid {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .benefits-list {
            grid-template-columns: 1fr;
          }
          .job-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Careers;
