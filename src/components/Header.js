import React from "react";
import FenixLogo from "../images/fenix-logo.png";

const Header = () => {
  const HeaderLinks = ["About Us", "Contact Us", "Pricing Packages"];
  return (
    <div className="header-wrapper">
      <div className="d-flex justify-content-between align-items-center header-container">
        <a href="/">
          <img src={FenixLogo} alt="logo" />
        </a>
        <ul className=" header-list">
          {HeaderLinks.map((item) => {
            return <li className="header-list-item">
                          <button type="button" className="btn text-white">{item}</button>
                </li>;
          })}
          <li className="header-btn">
            <button type="button" className="btn bg-green">Get Started Now</button>
          </li>
          <li className="header-btn">
          <button type="button" className="btn text-white">Get Started Now</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;


