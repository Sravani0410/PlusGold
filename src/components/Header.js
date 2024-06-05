import React from "react";
import "./Header.css";
import logo from "../assests/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="PlusGold Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#start-saving">Start Saving</a>
            </li>
            <li>
              <a href="#gold-rush">Gold Rush Festival</a>
            </li>
            <li>
              <a href="#partners">Partner with us</a>
            </li>
          </ul>
        </nav>
        <button className="download-btn">Download App</button>
      </div>
    </header>
  );
};

export default Header;
