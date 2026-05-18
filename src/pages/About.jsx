import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Internal Components
import PageHero from '../components/PageHero';
import StatsBanner from '../components/StatsBanner';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const [activeLeader, setActiveLeader] = useState(null);

  const leadership = [
    { name: 'Michael Latanza', title: 'Chief Development Officer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300', bio: "Michael has over 20 years of experience in municipal growth and corporate development, leading SCA's nationwide strategy." },
    { name: 'Sarah Miller', title: 'VP of Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300', bio: "Sarah directs all self-performing sweeping operations, optimizing scheduling efficiency and operator training nationwide." },
    { name: 'David Chen', title: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300', bio: "David spearheads SCA's smart dispatch and routing tech systems, pioneering low-emission route mapping." },
    { name: 'James Wilson', title: 'Director of Safety', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300', bio: "James holds our highest standard for public safety, managing our OSHA compliance and driver training academies." },
  ];

  return (
    <div className="about-page">
      <PageHero title="About Us" />
      
      <section className="section-padding">
        <div className="container mission-grid">
          <div className="mission-content">
            <SectionHeader eyebrow="Who We Are" title="Setting the Standard in Professional Sweeping" centered={false} />
            <p>
              Sweeping Corporation of America (SCA) is the largest professional self-performing power sweeping and JetVac services company in the United States. 
              Founded on the principles of excellence, safety, and technological innovation, we serve Departments of Transportation, municipalities, and businesses 
              across 21 states.
            </p>
            <p>
              Our mission is to provide environmentally responsible solutions that keep our nation's streets, highways, and industrial complexes clean and safe. 
              By reducing stormwater and air pollution, we contribute to the sustainability of the communities we serve.
            </p>
          </div>
          <div className="mission-image">
             <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Mission" />
          </div>
        </div>
      </section>

      <StatsBanner />

      <section className="section-padding bg-light">
        <div className="container">
          <SectionHeader title="Our Leadership Team" />
          <div className="leadership-grid">
            {leadership.map((member, index) => (
              <motion.div 
                key={index}
                className={`leader-card ${activeLeader === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveLeader(activeLeader === index ? null : index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="leader-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="leader-info">
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                  {activeLeader === index && (
                    <motion.div 
                      className="leader-bio"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      style={{ marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '15px', color: '#555', fontSize: '13px', textAlign: 'left', lineHeight: '1.5' }}
                    >
                      {member.bio}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding history-section">
        <div className="container">
          <SectionHeader title="Our History" />
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="year">2017</span>
                <h3>Foundation</h3>
                <p>SCA was formed with a vision to consolidate and professionalize the fragmented power sweeping industry.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <span className="year">2019</span>
                <h3>Rapid Expansion</h3>
                <p>Reached the milestone of serving 10 states with a fleet of over 1,000 vehicles.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="year">2021</span>
                <h3>Industry Leader</h3>
                <p>Became the largest self-performing sweeping company in the U.S., expanding into JetVac and industrial services.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <span className="year">2024</span>
                <h3>Innovation & Future</h3>
                <p>Currently serving 21 states with 70+ locations and a workforce of over 2,000 dedicated professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .mission-content p {
          margin-bottom: 20px;
          color: var(--medium-gray);
        }

        .mission-image img {
          width: 100%;
          border-radius: 4px;
          box-shadow: var(--box-shadow);
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .leader-card {
          background: white;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--box-shadow);
          text-align: center;
        }

        .leader-image img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .leader-info {
          padding: 20px;
        }

        .leader-info h3 {
          font-size: 18px;
          margin-bottom: 5px;
        }

        .leader-info p {
          font-size: 14px;
          color: var(--accent-orange);
          font-weight: 600;
          text-transform: uppercase;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          background: var(--primary-blue);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          right: -8px;
          background-color: var(--accent-orange);
          border: 2px solid white;
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-item.right {
          left: 50%;
        }

        .timeline-item.right::after {
          left: -8px;
        }

        .timeline-content {
          padding: 20px;
          background-color: white;
          border-radius: 4px;
          box-shadow: var(--box-shadow);
        }

        .year {
          color: var(--accent-orange);
          font-weight: 800;
          font-size: 20px;
          display: block;
          margin-bottom: 5px;
        }

        @media (max-width: 992px) {
          .leadership-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .mission-grid {
            grid-template-columns: 1fr;
          }
          .leadership-grid {
            grid-template-columns: 1fr;
          }
          .timeline::after {
            left: 31px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          .timeline-item::after {
            left: 23px;
          }
          .timeline-item.right {
            left: 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
