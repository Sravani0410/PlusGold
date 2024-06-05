import React from 'react';
import './Features.css';
import featureImage from '../assests/images/imagewithmom.png';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
      <img src={featureImage} alt="Feature" className="feature-image" />
        <div className="feature-content">
          <h2>Save like your mom</h2>
          <h3>Buy 10gm <span>Gold</span> & Get 1gm <span>Gold</span> Extra</h3>
          <p>Buy Gold through daily, weekly or monthly SIPs, or through One-Time payments – & get 10% extra Gold from Plus's partner jewellers.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
