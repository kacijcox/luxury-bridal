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
            <p className="mb-0">
              &copy; 2024 The Luxury Bridal. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
