import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Gallery.css";
import pic1 from "/workspaces/luxury-bridal/src/pictures/pic1.jpg";
import pic2 from "/workspaces/luxury-bridal/src/pictures/pic2.jpeg";
import pic3 from "/workspaces/luxury-bridal/src/pictures/pic3.jpeg";

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
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pic1} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption-top d-none d-md-block">
            <div className="carousel-caption-top-content">
              <h5>Lead Stylist</h5>
              <p>
                Our lead stylist is a visionary trendsetter,
                <br /> boasting years of experience in crafting breathtaking
                hair and makeup looks for special events.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={pic2} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption-top d-none d-md-block">
            <div className="carousel-caption-top-content">
              <h5>Makeup Artist</h5>
              <p>
                Our makeup artist is a dedicated and skilled professional,
                <br /> specializing in flawless, long-lasting makeup for any
                occasion.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={pic3} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption-top d-none d-md-block">
            <div className="carousel-caption-top-content">
              <h5>Our Values</h5>
              <p>
                At our core, we are committed to professionalism and creativity,
                <br /> ensuring an exceptional and stress-free experience for
                our clients.
              </p>
            </div>
          </div>
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
