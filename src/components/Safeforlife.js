import React from 'react'
import './Safeforlife.css';
import image1 from "../assests/images/lifegold3.png"
import image2 from "../assests/images/lifegold2.png"
import image3 from "../assests/images/lifegold1.png"
import Ellipse from "../assests/images/Ellipse.png"

const Safeforlife = () => {
  return (
    <section className="safe-for-life-section">
      <div className="safe-container">
        <h2 className="safe-name">Save for life goals</h2>
        <p className="safe-heading">
        Save in Plus Gold for life events that matters
        </p>
        <div className="schemes">
          <div>
            <img src={image3} className="schemes-dhanteras" alt='wedding'/>

          </div>
          <div className="schemes-step">
            <img src={image2} alt='aniversory'className="schemes-step" />
          </div>
          <div>
            <img src={image1} className="schemes-dhanteras" alt='dhanteras'/>

          </div>

        </div>
        <p className='wedding'>Start as low as</p>
        <p className='dhanteras'>Start as low as</p>
         <button className='start-saving-btn'>Start Saving Now</button>
      </div>
      <img src={Ellipse} className="ellips" alt='Ellipse'/>
    </section>
  )
}

export default Safeforlife