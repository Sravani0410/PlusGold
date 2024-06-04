import React from "react";
import "./HowItWorks.css";
import image1 from "../assests/images/Rectangle 34624969.png";
import image4 from "../assests/images/Frame 4868202.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="works-container">
        <h2 className="name">How does the app work?</h2>
        <p className="name-heading">
          Watch or short videos to learn more about our app
        </p>
        <div className="steps">
          <div className="step">
            <img src={image1} />
            <h3>What is PlusGOLD?</h3>
            <p>Learn about PlusGold and its features.</p>
          </div>
          <div className="step">
            <img src={image1} />
            <h3>How to Save on Plus?</h3>
            <p>Details on SIPs and one-time payments.</p>
          </div>
          <div className="step">
            <img src={image1} />
            <h3>How to Redeem?</h3>
            <p>Instructions on cash, gold, or jewellery redemption.</p>
          </div>
        </div>
        <div className="benifits">
          <div className="benifits-step">
            <img src={image4} />
            <p>No Lock-in on Plus Gold</p>
          </div>
          <div className="benifits-step">
            <img src={image4} />
            <p>Easy Withdrawal</p>
          </div>
          <div className="benifits-step">
            <img src={image4} />
            <p>Fixed Extra Gold p.a.</p>
          </div>
          <div className="benifits-step">
            <img src={image4} />
            <p>Bonus benefits from Jeweller</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
