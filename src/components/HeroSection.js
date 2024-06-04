import React from 'react';
import './HeroSection.css';
import heroImage from '../assests/images/Retouch.png';  
import poweredby from "../assests/images/Frame 1707481029.png"
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="herosection-container">
        <div className="hero-content">
          <h1>Save smartly in GOLD</h1>
          <p>And get 10% extra gold every year!</p>
          <button className="cta-btn">Start Saving Now</button>
          <p className="trusted">Trusted by 2 Lakh+ Indians</p>
          <img src={poweredby}/>
        </div>
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
