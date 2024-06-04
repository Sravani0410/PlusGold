import React from 'react'
import image from "../assests/images/image 173.png"
import image1 from "../assests/images/image 174.png"
import mobileImage from "../assests/images/Frame 1707481184.png"
const Downloadapp = () => {
  return (
<section className="download-section">
      <div className="download-container">
        <div className="download-content">
          <h1>Save smartly in GOLD</h1>
          <p>And get 10% extra gold every year!</p>
          <div className='download-image'>
          <img src={image}/>
          <img src={image1}/>
          </div>
          
        </div>
        <img src={mobileImage} alt="Mobile" className="mobile-image" />
      </div>
    </section>
      )
}

export default Downloadapp