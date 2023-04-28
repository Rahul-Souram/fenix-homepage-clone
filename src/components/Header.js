import React from "react";
import FenixLogo from "../images/fenix-logo.png";

const Header = () => {
  const HeaderLinks = ["About Us", "Contact Us", "Pricing Packages"];
  return (
    <div className="header-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">
            <img src={FenixLogo} alt="Logo" />
          </a>
          <button
            type="button"
            class="navbar-toggler bg-white"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav fs-5">
              {HeaderLinks.map((item) => {
                return (
                  <li class="nav-item nav-link text-white" key={item}>
                    {item}
                  </li>
                );
              })}
            </div>
            <div class="navbar-nav ms-auto">
              <a href="/" class="nav-item nav-link bg-green">
                Get Started Now
              </a>
              <a href="/" class="nav-item nav-link text-white">
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
