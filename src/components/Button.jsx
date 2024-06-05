import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <div className="button-container">
      <Link to="/contact" className="book-now-btn">
        Book Now
      </Link>
    </div>
  );
};

export default Button;
