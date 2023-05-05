import React from "react";
import FenixLogo from "../images/fenix-logo.png";

const Header = () => {
  const HeaderLinks = ["About Us", "Contact Us", "Pricing Packages"];
  return (
    <div classNameName="header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src={FenixLogo} alt="Logo" />
          </a>
          <button
            type="button"
            className="navbar-toggler bg-white"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav fs-5 ms-auto">
              {HeaderLinks.map((item) => {
                return (
                  <li className="nav-item nav-link text-white" key={item}>
                    {item}
                  </li>
                );
              })}
            </div>
            <div className="navbar-nav">
              <a href="/" className="nav-item nav-link bg-green">
                Get Started Now
              </a>
              <a href="/" className="nav-item nav-link text-white fw-bold">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
