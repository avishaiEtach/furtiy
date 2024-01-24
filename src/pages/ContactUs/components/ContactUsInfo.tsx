import React from "react";
import { useContactUs } from "../hooks/useContactUs";

export const ContactUsInfo = () => {
  const { ContactUsInfoCards } = useContactUs();
  return (
    <>
      <div className="flex column justify-center align-center contact-us-info-container">
        <span className="contact-us-info-first-text-header">Let us know</span>
        <span className="contact-us-info-second-text-header">
          how we can help you
        </span>
      </div>
      <div className="contact-us-info-cards">
        {ContactUsInfoCards.map((item, index) => (
          <div key={index} className="flex column g15">
            <span
              className="contact-us-info-card-number"
              style={{
                color: item.numberColor,
              }}
            >
              0{index + 1}.
            </span>
            <h3 className="contact-us-info-card-header">{item.header}</h3>
            <p className="contact-us-info-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
