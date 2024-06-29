import React from "react";
import "./Footer.css";
import Github from "../Images/github.png";
import Instagram from "../Images/instagram.png";
import LinkedIn from "../Images/linkedin.png";
import Logo from "../Images/logo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} />
        </div>
      </div>
      <div className="blur blur-footer1"></div>
      <div className="blur blur-footer2"></div>
    </div>
  );
}
