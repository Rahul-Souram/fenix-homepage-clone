import React from "react";

const Footer = () => {
  const footerLinks = [
    "Ⓒ Fenix Insight Ltd.",
    "Privacy Policy",
    "Cancellation Policy",
    "T's and C's",
    "Contact Us",
  ];
  
  return (
    <div className="footer p-2 mt-5 mb-2 text-white">
      <ul className="d-flex ">
        {footerLinks.map((item) => {
          return <li key={item} className="me-2 d-flex">{item} <span className="ms-1">|</span></li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
