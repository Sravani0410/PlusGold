import React from 'react';
import './TrustedJewellers.css';
import image from "../assests/images/trustedjewerlly.png"

const TrustedJewellers = () => {
  // const jewellers = [/* Array of jeweller logos */];
  
  return (
    <section className="trusted-jewellers">
      <h2>Trusted by the best Jewellers</h2>
      <p>Redeem your savings at more than 1000 stores across 520+ cities</p>
      <img src={image}/>
      {/* <div className="jeweller-logos">
        {jewellers.map((logo, index) => (
          <img key={index} src={logo} alt={`Jeweller ${index + 1}`} />
        ))}
      </div> */}
    </section>
  );
}

export default TrustedJewellers;
