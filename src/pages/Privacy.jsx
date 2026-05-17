import React from 'react';
import PageHero from '../components/PageHero';
import { SITE_CONFIG } from '../constants/config';

const Privacy = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="privacy-page">
      <PageHero title="Privacy Policy" />
      
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid var(--accent-orange)', paddingBottom: '15px' }}>
            <span style={{ fontSize: '14px', color: 'var(--medium-gray)', fontWeight: 'bold' }}>Last Updated: May 17, 2026</span>
            <button 
              onClick={handlePrint}
              style={{
                background: 'var(--primary-blue)',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '13px',
                transition: 'all 0.3s ease'
              }}
              className="print-btn"
            >
              Print Policy
            </button>
          </div>

          <div className="privacy-content" style={{ color: 'var(--dark-gray)', lineHeight: '1.8', fontSize: '15px' }}>
            <h3 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>1. Information We Collect</h3>
            <p>
              We collect information to provide better services to all our customers. This includes information you provide to us (such as your name, email address, phone number, and company name when submitting a contact or career application form) and information we collect automatically (such as device-specific information, log files, and cookies).
            </p>

            <h3 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>2. How We Use Information</h3>
            <p>
              We use the collected information to deliver, maintain, protect, and improve our sweeping services, to communicate with you regarding quotes and service scheduling, and to process career application inquiries.
            </p>

            <h3 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>3. Information Sharing</h3>
            <p>
              We do not share personal information with companies, organizations, or individuals outside of Sweeping Corporation of America unless one of the following circumstances applies: with your consent, for external processing by trusted service partners, or for legal reasons.
            </p>

            <h3 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>4. Security</h3>
            <p>
              We work hard to protect Sweeping Corporation of America and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.
            </p>

            <h3 style={{ color: 'var(--primary-blue)', marginTop: '30px' }}>5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <strong>{SITE_CONFIG.name} headquarters</strong><br />
              Email: info@sweepingcorp.com<br />
              Phone: {SITE_CONFIG.phone}
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .print-btn:hover {
          background-color: var(--accent-orange) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Privacy;
