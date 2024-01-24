import React from "react";
import { Button } from "@mui/material";
import { TextFieldMui } from "../../TextFieldMui/TextFieldMui";
import fastShipping from "../../../assets/images/fast-shipping.png";

export const FastShipping = () => {
  return (
    <div className="fast-shipping g20">
      <div className="fast-shipping-opacity"></div>
      <div className=" flex g30 column fast-shipping-info">
        <div>
          <h2 className="fs30">Stay home & get your daily </h2>
          <h2 className="fs30 fast-shipping-semi-title">needs from our shop</h2>
        </div>
        <p className="fast-shipping-semi-paragraph">
          Start You'r Daily Shopping with
          <span>Frutiy</span>
        </p>
        <div className="flex column g15">
          <TextFieldMui
            variant="outlined"
            placeholder="Enter your email address"
            externalValue={""}
          />
          <TextFieldMui
            variant="outlined"
            placeholder="Enter your phone number"
            externalValue={""}
          />
          <Button variant="contained" className="fast-shipping-button">
            <div className="hero-section-2-btn-text flex">
              <span>Subscribe</span>
            </div>
          </Button>
        </div>
      </div>
      <div>
        <img
          className="fast-shipping-image"
          src={fastShipping}
          alt="Fast Shipping"
        />
      </div>
    </div>
  );
};
