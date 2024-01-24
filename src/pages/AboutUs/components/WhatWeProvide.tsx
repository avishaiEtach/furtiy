import React from "react";
import { useAboutUs } from "../hooks/useAboutUs";

export const WhatWeProvide = () => {
  const { whatWeProvideCards } = useAboutUs();
  return (
    <div className="flex column">
      <h2 className="about-us-provide-header">
        What We <span className="bold-text">Provide</span> ?
      </h2>
      <div className="about-us-cards-grid">
        {whatWeProvideCards.map((item, index) => (
          <div key={index} className="about-us-provide-card">
            <div className="about-us-provide-card-icon">
              <img
                src={item.image}
                className="about-us-provide-card-image"
                alt={`What We Provide Card ${index + 1}`}
              />
            </div>
            <h4>{item.mainText}</h4>
            <p>{item.subText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
