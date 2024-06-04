import React from 'react';
import './Footer.css';
import image from "../assests/images/Frame 1707480922.png"
const Footer = () => {
  return (
    <footer className="footer">
      <img src={image}/>
      {/* <div className="footer-content">
        <p>&copy; 2023 PlusGold. All rights reserved.</p>
      </div>
      <div></div> */}
    </footer>
  );
};

export default Footer;
