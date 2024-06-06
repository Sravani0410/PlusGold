import React from 'react'
import "./Downloadapp.css"
import image from "../assests/images/image 173.png"
import image1 from "../assests/images/image 174.png"
import mobileImage from "../assests/images/Frame 1707481184.png"
const Downloadapp = () => {
  return (
<section className="download-section">
      <div className="download-container">
        <div className="download-content">
       <h1>Download the App</h1>
       <p>
       Plus, a revolutionary app that helps Indian
homemakers to pre-plan their jewellery
purchase by saving monthly & gaining 10% IRR
       </p>
          <div className='download-image'>
          <img src={image} alt='img1'/>
          <img src={image1} alt='img2'/>
          </div>
        </div>
        <div>
        <img src={mobileImage} alt="Mobile" className="mobile-image" />
        </div>

      </div>
    </section>
      )
}

export default Downloadapp