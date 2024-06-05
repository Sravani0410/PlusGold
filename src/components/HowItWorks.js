import React from "react";
import "./HowItWorks.css";
import work5 from "../assests/images/work5.svg";
import work1 from "../assests/images/work1.svg";
import work2 from "../assests/images/work2.svg";
import work3 from "../assests/images/work3.svg";
import work4 from "../assests/images/work4.svg";

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
            <img src={work5} />
            <h3>What is PlusGOLD?</h3>
            <p>Learn about PlusGold and its features.</p>
          </div>
          <div className="step">
            <img src={work5} />
            <h3>How to Save on Plus?</h3>
            <p>Details on SIPs and one-time payments.</p>
          </div>
          <div className="step">
            <img src={work5} />
            <h3>How to Redeem?</h3>
            <p>Instructions on cash, gold, or jewellery redemption.</p>
          </div>
        </div>
        <div className="benifits">
          <div className="benifits-step">
            <img src={work1} />
            <p>No Lock-in on Plus Gold</p>
          </div>
          <div className="benifits-step">
            <img src={work2} />
            <p>Easy Withdrawal</p>
          </div>
          <div className="benifits-step">
            <img src={work3} />
            <p>Fixed Extra Gold p.a.</p>
          </div>
          <div className="benifits-step">
            <img src={work4} />
            <p>Bonus benefits from Jeweller</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
