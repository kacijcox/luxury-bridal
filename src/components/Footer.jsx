import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-1 mb-1">
      <div className="container">
        <div className="row"></div>
        <div className="row mt-1">
          <div className="col-12 text-center">
            <p className="footer-text">
              &copy; 2024 The Luxury Bridal. All Rights Reserved.
            </p>
            <a className="logo" href="https://kacicox.com" target="_blank" rel="noopener noreferrer">d&d by kaci</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
