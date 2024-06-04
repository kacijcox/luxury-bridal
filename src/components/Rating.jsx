import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./Rating.css";

const Rating = () => {
  return (
    <div className="rating-body">
      We're Rated 5 Stars!
      <br />
      <FontAwesomeIcon icon={faStarRegular} className="stars" />
      <FontAwesomeIcon icon={faStarRegular} className="stars" />
      <FontAwesomeIcon icon={faStarRegular} className="stars" />
      <FontAwesomeIcon icon={faStarRegular} className="stars" />
      <FontAwesomeIcon icon={faStarRegular} className="stars" />
      <div className="bottom-rating">
        We are the top choice for on-site hair and makeup services. <br />
        With a 5-star rating, our team ensures you look and feel your best for
        any occasion. <br />
        Experience the convenience of professional styling in the comfort of
        your own space. <br />
        Choose us for a flawless and stress-free beauty experience. <br />
      </div>
    </div>
  );
};

export default Rating;
