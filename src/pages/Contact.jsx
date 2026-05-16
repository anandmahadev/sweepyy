import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { SITE_CONFIG } from '../constants/config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <PageHero title="Contact Us" />
      
      <section className="section-padding">
        <div className="container contact-grid">
          <div className="contact-form-container">
            <SectionHeader eyebrow="Get in Touch" title="How Can We Help You?" centered={false} />
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Service of Interest</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="street">Street Sweeping</option>
                  <option value="highway">Highway Sweeping</option>
                  <option value="construction">Construction Sweeping</option>
                  <option value="industrial">Industrial Sweeping</option>
                  <option value="jetvac">JetVac Services</option>
                  <option value="parking">Parking Lot Sweeping</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-orange" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={16} style={{marginLeft: '8px'}} />
              </button>

              {status === 'success' && (
                <div className="status-msg success">
                  Your message has been sent and we will contact you shortly!
                </div>
              )}
            </form>
          </div>

          <div className="contact-info-panel">
            <div className="info-card">
              <h3>Contact Information</h3>
              <ul className="info-list">
                <li>
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div className="info-text">
                    <strong>Headquarters</strong>
                    <p>{SITE_CONFIG.address}</p>
                  </div>
                </li>
                <li>
                  <div className="info-icon"><Phone size={24} /></div>
                  <div className="info-text">
                    <strong>Phone</strong>
                    <p>{SITE_CONFIG.phone}</p>
                  </div>
                </li>
                <li>
                  <div className="info-icon"><Mail size={24} /></div>
                  <div className="info-text">
                    <strong>Email</strong>
                    <p>{SITE_CONFIG.email}</p>
                  </div>
                </li>
                <li>
                  <div className="info-icon"><Clock size={24} /></div>
                  <div className="info-text">
                    <strong>Business Hours</strong>
                    <p>{SITE_CONFIG.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="map-embed">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189441.5173111005!2d-81.751126!3d41.49932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee34337a3%3A0xa1934c9c1b7d5f0!2sCleveland%2C%20OH!5e0!3m2!1sen!2sus!4v1715712000000!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{border:0, borderRadius: '4px'}} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 80px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 700;
          color: var(--primary-blue);
        }

        .form-group input, .form-group select, .form-group textarea {
          padding: 12px;
          border: 1px solid var(--border-gray);
          border-radius: 4px;
          font-family: inherit;
          font-size: 15px;
          transition: var(--transition-smooth);
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-orange);
          box-shadow: 0 0 0 3px rgba(244, 121, 32, 0.1);
        }

        .status-msg {
          padding: 15px;
          border-radius: 4px;
          margin-top: 20px;
          font-weight: 600;
        }

        .status-msg.success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .info-card {
          background: var(--primary-blue);
          color: white;
          padding: 40px;
          border-radius: 4px;
          margin-bottom: 30px;
        }

        .info-card h3 {
          color: white;
          font-size: 24px;
          margin-bottom: 30px;
          border-bottom: 2px solid var(--accent-orange);
          display: inline-block;
          padding-bottom: 5px;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .info-list li {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .info-icon {
          color: var(--accent-orange);
          flex-shrink: 0;
        }

        .info-text strong {
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
        }

        .info-text p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-info-panel {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
