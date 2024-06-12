import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Gallery.css";
import pic1 from "../pictures/pic1.jpg";
import pic2 from "../pictures/pic2.jpeg";
import pic3 from "../pictures/pic3.jpeg";
import pic5 from "../pictures/pic5.jpeg"; 

function Gallery() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4" 
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pic1} className="d-block w-100" alt="best make up hair styling services in chicago" />
        </div>
        <div className="carousel-item">
          <img src={pic2} className="d-block w-100" alt="best bridal make up services in chicago" />
        </div>
        <div className="carousel-item">
          <img src={pic3} className="d-block w-100" alt="affordable rated number one bridal make up hair styling services in chicago" />
        </div>
        <div className="carousel-item">
          <img src={pic5} className="d-block w-100" alt="rated number on make up hair styling services in chicago" /> 
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Gallery;
