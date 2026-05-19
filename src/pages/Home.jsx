import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Road, Construction, Factory, Waves, ParkingCircle, CheckCircle, ArrowRight } from 'lucide-react';
import StatsBanner from '../components/StatsBanner';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 19 });
  const yearsOfOperations = new Date().getFullYear() - 2017;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const reviews = [
    { text: "SCA's street sweeping program has dramatically reduced our stormwater run-off pollutants. Their team is reliable, thorough, and highly professional.", author: "Michael S., Public Works Director", location: "Cleveland, OH" },
    { text: "We contracted SCA for our highway construction project. Their response time was remarkable, and their sweepers kept the roadway completely safe.", author: "Sarah D., Project Manager", location: "Houston, TX" },
    { text: "Excellent customer service and modern, clean sweeping vehicles. They maintain our parking lot weekly and the results are consistently outstanding.", author: "David R., Retail Facility Manager", location: "Atlanta, GA" }
  ];

  const services = [
    { icon: Truck, title: 'Street Sweeping', description: 'Providing clean and safe streets for municipalities and residential communities.' },
    { icon: Road, title: 'Highway Sweeping', description: 'Specialized high-speed sweeping for state DOTs and interstate systems.' },
    { icon: Construction, title: 'Construction Sweeping', description: 'Keeping job sites clean and compliant with environmental regulations.' },
    { icon: Factory, title: 'Industrial Sweeping', description: 'Dust control and debris removal for warehouses and manufacturing plants.' },
    { icon: Waves, title: 'JetVac Services', description: 'Advanced sewer cleaning and stormwater management solutions.' },
    { icon: ParkingCircle, title: 'Parking Lot Sweeping', description: 'Maintaining the curb appeal and safety of commercial properties.' },
  ];

  const states = [
    'AL', 'CA', 'DE', 'FL', 'GA', 'IL', 'IN', 'LA', 'MD', 'MI', 
    'MO', 'MS', 'NC', 'NJ', 'OH', 'PA', 'SC', 'TN', 'TX', 'VA', 'WV'
  ];

  return (
    <div className="home-page">
      {/* Section 1: Hero Slider Placeholder */}
      <section className="hero-slider">
        <div className="hero-slide">
          <div className="container hero-content">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              SCA IS SWEEPING THE NATION!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact us to see how we can help keep your streets, highways and industrial complexes clean and safe.
            </motion.p>
            <motion.div 
              className="hero-dispatch-ticker"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="ticker-label">🚨 {yearsOfOperations} Years of Sweeping Excellence | Next Launch In:</span>
              <div className="countdown-timer">
                <span className="timer-part"><strong>{String(timeLeft.hours).padStart(2, '0')}</strong> hrs</span>
                <span className="timer-part"><strong>{String(timeLeft.minutes).padStart(2, '0')}</strong> mins</span>
                <span className="timer-part"><strong>{String(timeLeft.seconds).padStart(2, '0')}</strong> secs</span>
              </div>
            </motion.div>
            <motion.div 
              className="hero-btns"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/contact" className="btn btn-orange">Get a Free Quote</Link>
              <Link to="/about" className="btn btn-outline-white">Learn More</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Stats Banner */}
      <StatsBanner />

      {/* Section 3: About Intro */}
      <section className="section-padding about-intro">
        <div className="container intro-grid">
          <div className="intro-text">
            <span className="eyebrow">About SCA</span>
            <h2>The Largest Professional Self-Performing Power Sweeping & JetVac Services Company in the U.S.</h2>
            <p>
              SCA is the largest professional self-performing power sweeping and JetVac services company in the United States. 
              We are committed to providing Departments of Transportation, municipalities, and businesses with environmental 
              solutions that reduce stormwater and air pollution.
            </p>
            <Link to="/about" className="btn btn-orange">Learn More About Us</Link>
          </div>
          <div className="intro-image">
            <img src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1000" alt="SCA professional street sweeping vehicle on duty" />
            <div className="image-accent"></div>
          </div>
        </div>
      </section>

      {/* Section 4: Solutions Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <SectionHeader 
            eyebrow="Our Solutions" 
            title="Comprehensive Sweeping & JetVac Solutions" 
          />
          <div className="services-grid">
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

      {/* Section 5: Why Choose SCA */}
      <section className="section-padding why-sca bg-blue">
        <div className="container why-grid">
          <div className="why-image">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" alt="Advanced sweeping technology and machinery overview" />
          </div>
          <div className="why-content">
            <span className="eyebrow">Why Choose SCA</span>
            <h2 className="text-white">Experience. Safety. Technology.</h2>
            <ul className="feature-list">
              <li><CheckCircle size={20} className="text-orange" /> 70+ Strategic Locations Nationwide</li>
              <li><CheckCircle size={20} className="text-orange" /> Over 2,000 Trained Professionals</li>
              <li><CheckCircle size={20} className="text-orange" /> Environmentally Responsible Solutions</li>
              <li><CheckCircle size={20} className="text-orange" /> Reduce Stormwater & Air Pollution</li>
              <li><CheckCircle size={20} className="text-orange" /> Advanced Fleet of 2,350+ Vehicles</li>
            </ul>
            <Link to="/contact" className="btn btn-orange">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* Section 6: Service Area Map Placeholder */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader 
            eyebrow="Where We Work" 
            title="Serving 21 States Across the Nation" 
          />
          <div className="map-placeholder">
            <div className="state-grid">
              {states.map(state => (
                <Link key={state} to={`/service-areas/${state.toLowerCase()}`} className="state-box">
                  {state}
                </Link>
              ))}
            </div>
            <div className="map-cta">
              <Link to="/service-areas" className="btn btn-orange">Find Your Local Office</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6.5: Interactive Testimonials */}
      <section className="section-padding testimonials-section bg-light" style={{ borderTop: '1px solid var(--border-gray)', borderBottom: '1px solid var(--border-gray)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <SectionHeader eyebrow="Client Success" title="What Our Partners Say" centered={true} />
          
          <div className="testimonial-slider" style={{ marginTop: '40px', minHeight: '180px', position: 'relative', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.8', color: 'var(--primary-blue)', margin: '0 0 20px' }}>
                  "{reviews[activeReview].text}"
                </p>
                <strong style={{ fontSize: '15px', display: 'block', color: 'var(--accent-orange)' }}>
                  {reviews[activeReview].author}
                </strong>
                <span style={{ fontSize: '13px', color: 'var(--medium-gray)' }}>
                  {reviews[activeReview].location}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-dots" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
            {reviews.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveReview(i)}
                style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  background: activeReview === i ? 'var(--accent-orange)' : 'var(--border-gray)', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: News Preview */}
      <section className="section-padding bg-light">
        <div className="container">
          <SectionHeader 
            eyebrow="Latest News" 
            title="Stay Up to Date with SCA" 
          />
          <div className="news-grid">
            {[1, 2, 3].map(i => (
              <div key={i} className="news-card">
                <div className="news-thumb">
                   <img src={`https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&sig=${i}`} alt={`SCA industry news update ${i}`} />
                </div>
                <div className="news-body">
                  <span className="news-date">May {10+i}, 2024</span>
                  <h3>SCA Announces Strategic Expansion in {i === 1 ? 'Texas' : i === 2 ? 'Florida' : 'Ohio'}</h3>
                  <p>Sweeping Corporation of America continues its nationwide growth with new locations and enhanced service capabilities...</p>
                  <Link to="/news" className="news-link">Read More <ArrowRight size={16} /></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-50">
            <Link to="/news" className="btn btn-outline-blue">View All News</Link>
          </div>
        </div>
      </section>

      {/* Section 8: Contact CTA Banner */}
      <section className="contact-cta">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p>Contact Sweeping Corporation of America today for a free quote.</p>
          <Link to="/contact" className="btn btn-orange">Contact Us Today</Link>
        </div>
      </section>

      <style jsx>{`
        .hero-slider {
          height: 600px;
          background: linear-gradient(rgba(0, 30, 80, 0.6), rgba(0, 30, 80, 0.6)), 
                      url('https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=1920');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: white;
          margin-top: calc(var(--header-height) + var(--top-bar-height));
        }

        .hero-content h1 {
          font-size: 52px;
          color: white;
          max-width: 700px;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 20px;
          max-width: 600px;
          margin-bottom: 40px;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .intro-text h2 {
          margin-bottom: 25px;
        }

        .intro-text p {
          margin-bottom: 30px;
          color: var(--medium-gray);
        }

        .intro-image {
          position: relative;
        }

        .intro-image img {
          width: 100%;
          border-radius: 4px;
          box-shadow: var(--box-shadow);
        }

        .image-accent {
          position: absolute;
          left: -20px;
          top: 40px;
          bottom: 40px;
          width: 5px;
          background-color: var(--accent-orange);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        .why-image img {
          width: 100%;
          border-radius: 4px;
        }

        .why-content .eyebrow {
          color: var(--accent-orange);
        }

        .why-content h2 {
          margin-bottom: 30px;
        }

        .feature-list {
          margin-bottom: 40px;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 15px;
          color: white;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .state-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 15px;
          margin-bottom: 40px;
        }

        .state-box {
          background: var(--primary-blue);
          color: white;
          padding: 15px;
          text-align: center;
          font-weight: 700;
          border-radius: 4px;
          transition: var(--transition-smooth);
        }

        .state-box:hover {
          background: var(--accent-orange);
          transform: scale(1.05);
        }

        .map-cta {
          text-align: center;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .news-card {
          background: white;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }

        .news-thumb img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .news-body {
          padding: 25px;
        }

        .news-date {
          font-size: 13px;
          color: var(--medium-gray);
          display: block;
          margin-bottom: 10px;
        }

        .news-body h3 {
          font-size: 18px;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .news-body h3:hover {
          color: var(--accent-orange);
        }

        .news-body p {
          font-size: 14px;
          color: var(--medium-gray);
          margin-bottom: 20px;
        }

        .news-link {
          color: var(--accent-orange);
          font-weight: 700;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .mt-50 { margin-top: 50px; }

        .contact-cta {
          background: linear-gradient(rgba(0, 48, 135, 0.9), rgba(0, 48, 135, 0.9)), 
                      url('https://images.unsplash.com/photo-1590486803833-ffc6f9861b3c?auto=format&fit=crop&q=80&w=1920');
          background-size: cover;
          background-position: center;
          padding: 80px 0;
          color: white;
        }

        .contact-cta h2 {
          color: white;
          font-size: 36px;
          margin-bottom: 15px;
        }

        .contact-cta p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .hero-dispatch-ticker {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 30px;
          background: rgba(0, 0, 0, 0.4);
          padding: 15px 20px;
          border-radius: 6px;
          border-left: 4px solid var(--accent-orange);
          max-width: 500px;
          backdrop-filter: blur(5px);
          text-align: left;
        }

        .ticker-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          color: #ddd;
        }

        .countdown-timer {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .timer-part {
          font-size: 14px;
          color: #eee;
        }

        .timer-part strong {
          font-size: 20px;
          color: white;
          font-family: monospace;
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          margin-right: 4px;
        }

        @media (max-width: 992px) {
          .services-grid, .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .intro-grid, .why-grid {
            grid-template-columns: 1fr;
          }
          .state-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 { font-size: 36px; }
          .services-grid, .news-grid { grid-template-columns: 1fr; }
          .state-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </div>
  );
};

export default Home;
