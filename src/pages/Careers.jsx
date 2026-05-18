import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { CheckCircle, Users, Briefcase, GraduationCap, Heart, Shield, Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
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

      <section className="section-padding bg-blue text-white">
        <div className="container">
          <SectionHeader title="Our Core Values" light={true} />
          <p className="values-intro text-center" style={{ maxWidth: '800px', margin: '0 auto 40px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', lineHeight: '1.6' }}>
            These fundamental principles guide our daily sweeping operations and define how we support our partners nationwide.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Shield size={28} /></div>
              <h4>Safety First</h4>
              <p>We hold safety above all else, ensuring our operators and the public are fully protected at every turn.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Leaf size={28} /></div>
              <h4>Eco Stewardship</h4>
              <p>We sweep to protect our waterways and reduce atmospheric particulates, caring for our communities.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Users size={28} /></div>
              <h4>Team Integrity</h4>
              <p>Honest work, respectful actions, and transparent communication form the foundation of our crew.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Award size={28} /></div>
              <h4>Service Excellence</h4>
              <p>We perform self-sweeping operations with elite standards, delivering absolute quality on every mile.</p>
            </div>
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
          </div>

          <div className="quick-apply-form" style={{ maxWidth: '600px', margin: '40px auto 0', padding: '30px', background: 'white', borderRadius: '8px', boxShadow: 'var(--box-shadow, 0 4px 12px rgba(0,0,0,0.05))', border: '1px solid var(--border-gray)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--primary-blue)', fontSize: '20px' }}>Quick Resume Submission</h3>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px', background: '#d4edda', color: '#155724', borderRadius: '4px', fontWeight: 'bold', fontSize: '14px', border: '1px solid #c3e6cb' }}>
                Thank you! Your resume has been uploaded successfully.
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <input type="text" placeholder="Full Name *" required style={{ flex: 1, minWidth: '200px', padding: '10px', border: '1px solid var(--border-gray)', borderRadius: '4px', fontSize: '14px' }} />
                  <input type="email" placeholder="Email Address *" required style={{ flex: 1, minWidth: '200px', padding: '10px', border: '1px solid var(--border-gray)', borderRadius: '4px', fontSize: '14px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '6px', color: 'var(--primary-blue)' }}>Upload Resume (PDF, DOCX) *</label>
                  <input 
                    type="file" 
                    accept=".pdf,.docx,.doc" 
                    onChange={handleFileChange}
                    required 
                    style={{ fontSize: '14px', display: 'block', width: '100%', padding: '10px', border: '1px dashed var(--border-gray)', borderRadius: '4px', cursor: 'pointer' }} 
                  />
                  {fileName && (
                    <div style={{ fontSize: '13px', color: '#28a745', marginTop: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      ✓ Selected: {fileName}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-orange" style={{ width: '100%', padding: '12px', fontSize: '14px', fontWeight: 'bold' }}>Submit Application</button>
              </form>
            )}
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
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          text-align: center;
        }

        .value-card {
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--accent-orange);
          box-shadow: 0 10px 25px rgba(244, 121, 32, 0.1);
        }

        .value-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 20px;
          background: rgba(244, 121, 32, 0.1);
          color: var(--accent-orange);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(244, 121, 32, 0.2);
          transition: all 0.3s ease;
        }

        .value-card:hover .value-icon {
          background: var(--accent-orange);
          color: white;
          transform: scale(1.1);
        }

        .value-card h4 {
          color: white;
          font-size: 18px;
          margin: 0 0 10px;
          font-weight: 700;
        }

        .value-card p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
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
