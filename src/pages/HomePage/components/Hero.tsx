import React from "react";
import { Button } from "@mui/material";
import { TextFieldMui } from "../../../components/TextFieldMui/TextFieldMui";
import { Link } from "react-router-dom";
import milk from "../../../assets/images/milk.png";
import apricots from "../../../assets/images/apricots.png";
import { BsArrowRight } from "react-icons/bs";

export const Hero = () => {
  return (
    <div>
      <div className="hero-cover"></div>
      <div className="hero-continuer g30">
        <div className="hero-section-1">
          <div>
            <h1>Rice drink with</h1>
            <h1>vitamin D3</h1>
            <p>Up to 30% off your first order </p>
            <div className="flex align-center">
              <TextFieldMui
                variant="outlined"
                placeholder="Enter your email address"
                externalValue={""}
                className="hero-input"
              />
              <Button variant="contained" className="hero-section-1-button">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="hero-section-1-img">
            <img src={milk} alt="Milk" />
          </div>
        </div>
        <div className="hero-section-2">
          <div>
            <h1>By with</h1>
            <h1 className="hero-section-2-text">Free</h1>
            <h1 className="hero-section-2-text">Shipping</h1>
            <Link to={"/shop"}>
              <Button variant="contained" className="hero-section-2-button">
                <div className="hero-section-2-btn-text flex">
                  <span>Shop now</span>
                  <span>
                    <BsArrowRight />
                  </span>
                </div>
              </Button>
            </Link>
          </div>
          <div className="hero-section-2-img">
            <img src={apricots} alt="Apricots" />
          </div>
        </div>
      </div>
    </div>
  );
};
