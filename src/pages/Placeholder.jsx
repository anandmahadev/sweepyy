import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const PagePlaceholder = ({ title }) => (
  <div className="placeholder-page">
    <PageHero title={title} />
    <section className="section-padding">
      <div className="container text-center">
        <h2>{title} Content Coming Soon</h2>
        <p style={{ maxWidth: '600px', margin: '20px auto', color: 'var(--medium-gray)' }}>
          We are currently updating our {title.toLowerCase()} information to provide you with the most accurate and up-to-date details. 
          Please check back soon or contact us directly for immediate assistance.
        </p>
        <Link to="/" className="btn btn-orange">Return to Home</Link>
      </div>
    </section>
  </div>
);

export default PagePlaceholder;
