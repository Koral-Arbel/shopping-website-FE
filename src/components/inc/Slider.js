import React from "react";
import logoImg from "../images/logo-img.jpg";
import sliderImg2 from "../images/slider-img2.jpg";

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logoImg} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={logoImg} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={sliderImg2} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
