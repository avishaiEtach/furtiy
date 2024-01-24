import React from "react";
import { Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import fruitsBag from "../../../assets/images/fruits_bag.png";

export const ShopMoreInfoCards = () => {
  return (
    <>
      <div className="flex column g10 shop__more__info__cards__discount__card__container">
        <span className="fs20">Get a</span>
        <span className="fs24">Discount 30%</span>
        <Button
          className="shop__more__info__cards__discount__card__button"
          variant="contained"
        >
          <div className="flex g20">
            <span>Subscribe</span>
            <span>
              <BsArrowRight />
            </span>
          </div>
        </Button>
        <div className="shop__more__info__cards__discount__card__image__container"></div>
        <img
          className="shop__more__info__cards__discount__card__image"
          src={fruitsBag}
        />
      </div>
      <div className="flex column g10 shop__more__info__cards__blog__card__container">
        <span className="fs20">show our blog for</span>
        <span className="fs24">More information</span>
        <Button
          className="shop__more__info__cards__blog__card__button"
          variant="contained"
        >
          <div className="flex g20">
            <span>Go now</span>
            <span>
              <BsArrowRight />
            </span>
          </div>
        </Button>
      </div>
    </>
  );
};
