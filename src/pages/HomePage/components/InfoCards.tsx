import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { useHomePage } from "../hooks/useHomePage";
import { routesPath } from "../../../routes";

export const InfoCards = () => {
  const { infoCardsData } = useHomePage();
  return (
    <div className="info-cards-container">
      <div className="cards-list-info-cards ">
        {infoCardsData.map((item, index) => (
          <div
            className="card"
            key={index}
            style={{ backgroundColor: item.backgroundColor }}
          >
            <div className="card-container">
              <div
                className={`card-image ${index === 1 ? "second-image" : ""}`}
              >
                <img src={item.image} alt="Info Card" />
              </div>
              <div className="card-text-container">
                <p>
                  {item.mainText}
                  <span className="card-secondary-text">
                    {item.secondaryText}
                  </span>
                </p>
                <Link to={routesPath.shop}>
                  <Button className="card-button" variant="contained">
                    <div className="flex g20">
                      <span>Shop now</span>
                      <span className="card-button-text">
                        <BsArrowRight />
                      </span>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
