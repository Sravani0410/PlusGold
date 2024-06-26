import React from 'react';
import './HistoricalGoldPrice.css';
import image1 from "../assests/images/Frame 1707481522.png"
import image2 from "../assests/images/Frame 1707481520.png"
import image3 from "../assests/images/Group 1707481547.png"
import image4 from "../assests/images/Group 1707481559.png"
import months from "../assests/images/Group 1707481565.png"
import weeks from "../assests/images/Group 1707481563.png"
const HistoricalGoldPrice = () => {
  return (
    <section className="historical-gold-price">
      <div className='historial-heading'>
      <p className='historial-p'>Historical Gold Price</p>
      <img src={image1} alt='week-performance' className='week-performance'/>
      </div>
      <div className='graph'>
        <img src={image2} alt='price' className='graph-price'/>
        <img src={image3} alt='graph'/>
        <img className="month" alt='month' src={months}/>
        <img src={image4} alt="graph-indicator" className='graph-indicator'/>

      </div>
      <div >
        <img className='graph-weeks' alt='week' src={weeks}/>
      </div>
    </section>
  );
}

export default HistoricalGoldPrice;
