import React from 'react';

const PagePlaceholder = ({ title }) => (
  <div className="section-padding">
    <div className="container">
      <h1>{title}</h1>
      <p>Content for {title} coming soon.</p>
    </div>
  </div>
);

export default PagePlaceholder;
