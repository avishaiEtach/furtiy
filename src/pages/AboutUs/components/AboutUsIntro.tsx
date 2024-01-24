import React from "react";
import { useAboutUs } from "../hooks/useAboutUs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const AboutUsIntro = () => {
  const { carouselImages, carouselResponsiveProps } = useAboutUs();
  return (
    <div className="about-us-intro">
      <div className="about-us-intro-carousel-container">
        <Carousel
          containerClass="about-us-intro-carousel"
          arrows={false}
          slidesToSlide={1}
          autoPlay
          infinite
          showDots
          autoPlaySpeed={5000}
          responsive={carouselResponsiveProps}
        >
          {carouselImages.map((item, index) => (
            <div key={index} className="about-us-intro-carousel-card-container">
              <img
                className="about-us-intro-carousel-card-image"
                src={item.imgPath}
                alt={`Intro Carousel ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="about-us-intro-paragraph-container">
        <h2 className="about-us-intro-paragraph-header">
          Welcome to <span className="bold-text">Frutiy</span>
        </h2>
        <p className="about-us-intro-paragraph-item">
          Explore
          <span className="bold-text">Frutiy</span> and savor cruelty-free vegan
          creations. Indulge in flavors that align with your values and palate,
          from savory to sweet.
        </p>
        <p className="about-us-intro-paragraph-item">
          Unveil a world of plant-based wonders at
          <span className="bold-text">Frutiy</span>. Find a variety of ethical
          and delectable options that celebrate the beauty of natural
          ingredients.
        </p>
        <p className="about-us-intro-paragraph-item">
          Join us on a journey of taste and ethics at
          <span className="bold-text">Frutiy</span>. Discover innovative vegan
          products that redefine delightful cuisine, whether you're a committed
          vegan or an adventurous eater.
        </p>
      </div>
    </div>
  );
};
