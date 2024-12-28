import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import modiImage from '../images/modi.jpg';
import image1 from "../images/hero.jpg";
import image2 from "../images/banner-3.jpg";
import image3 from "../images/banner-4.jpg";

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    customPaging: (i) => (
      <div
        className="w-3 h-3 bg-gray-400 rounded-full hover:bg-yellow-500"
        style={{
          display: "inline-block",
          margin: "0 8px",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ display: "flex", padding: 0 }}>{dots}</ul>
      </div>
    ),
    prevArrow: null,  // Removing previous arrow
    nextArrow: null,  // Removing next arrow
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-full object-cover"
            src={modiImage}
            alt="Background"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={image1}
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={image2}
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={image3}
            alt="Slide 3"
          />
        </div>
      </Slider>

      {/* Inline CSS for hiding the arrows */}
      <style jsx>{`
        .slick-prev, .slick-next {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
