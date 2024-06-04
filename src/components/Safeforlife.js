import React from 'react'
import './Safeforlife.css';
import image1 from "../assests/images/Frame 1707481182.png"

const Safeforlife = () => {
  return (
    <section className="safe-for-life-section">
      <div className="safe-container">
        <h2 className="safe-name">Save for life goals</h2>
        <p className="safe-heading">
        Save in Plus Gold for life events that matters
        </p>
        <div className="schemes">
          <div className="schemes-step">
            <img src={image1} />
            <p>Start as low as</p>
          </div>
          <div className="schemes-step">
            <img src={image1} />
            <p>Start as low as</p>
          </div>
          <div className="schemes-step">
            <img src={image1} />
            <p>Start as low as</p>
          </div>
          
        </div>
         <button className='start-saving-btn'>Start Saving Now</button>
      </div>
    </section>
  )
}

export default Safeforlife