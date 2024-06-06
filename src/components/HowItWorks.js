import React from "react";
import "./HowItWorks.css";
import work5 from "../assests/images/Rectangle 34624969.png";
import work1 from "../assests/images/Frame 4868202.png";
import work2 from "../assests/images/Frame 4868202-1.png";
import work3 from "../assests/images/Frame 4868202-2.png";
import work4 from "../assests/images/Frame 4868202-3.png";

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
            <img src={work5} alt="work1"/>
            <h3>What is PlusGOLD?</h3>
            <p>Learn about PlusGold and its features.</p>
          </div>
          <div className="step">
            <img src={work5} alt="work2" />
            <h3>How to Save on Plus?</h3>
            <p>Details on SIPs and one-time payments.</p>
          </div>
          <div className="step">
            <img src={work5} alt="work3"/>
            <h3>How to Redeem?</h3>
            <p>Instructions on cash, gold, or jewellery redemption.</p>
          </div>
        </div>
        <div className="benifits">
          <div className="benifits-step">
            <img src={work1} alt="work4"/>
            <p>No Lock-in on Plus Gold</p>
          </div>
          <div className="benifits-step">
            <img src={work2} alt="work5"/>
            <p>Easy Withdrawal</p>
          </div>
          <div className="benifits-step">
            <img src={work3} alt="work6"/>
            <p>Fixed Extra Gold p.a.</p>
          </div>
          <div className="benifits-step">
            <img src={work4} alt="work7"/>
            <p>Bonus benefits from Jeweller</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
