import React from "react";
import { Button, Checkbox, IconButton, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useProductInfo } from "../hooks/useProductInfo";

interface ProductInfoProps {
  product: Product;
  quantity: number;
  setQuantity: (value: any) => void;
}

export const ProductInfo = ({
  product,
  quantity,
  setQuantity,
}: ProductInfoProps) => {
  const {
    pricePercentageDifference,
    handleQuantityChange,
    onChange,
    checked,
    onClickAddToCart,
  } = useProductInfo({
    quantity,
    setQuantity,
    product,
  });

  return (
    <div className="product__info__main__container">
      <div className="flex g30">
        <div className="product__info__image__container">
          <img src={product.image} alt="Product" />
          <div
            className={`product__info__flag ${product.type} flex justify-center align-center`}
          >
            {product.type}
          </div>
        </div>
        <div className="product__info__main__info__container">
          <h3 className="product__info__category fs14 green__text">
            {product.category}
          </h3>
          <h1 className="product__info__name">{product.name}</h1>
          <div className="flex align-center g10 product__info__rating__container">
            <Rating
              value={product.rating}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon className="star__icon" fontSize="inherit" />}
            />
            <span className="fs14 product__info__rating">{`(${product.rating.toFixed(
              1
            )})`}</span>
          </div>
          <h3 className="product__info__subTitle">
            {product.subTitle ? product.subTitle : "price per 1 kg"}
          </h3>
          <div className="flex g10 product__info__prices__container">
            <span
              className={`product__info__new__price ${
                product.oldPrice ? "percent" : ""
              }`}
            >
              ${product.newPrice.toFixed(2)}
            </span>
            {product.oldPrice ? (
              <div className="flex column">
                <span className="product__info__percent fs12">{`${pricePercentageDifference(
                  product.newPrice,
                  product.oldPrice
                )} % OFF`}</span>

                <span className="product__info__oldPrice">
                  ${product.oldPrice.toFixed(2)}
                </span>
              </div>
            ) : null}
          </div>
          <p className="product__info__sort__description">
            {product.sortDescription}
          </p>
          <ul className="with-dots flex column g10 product__info__highlights">
            {product.sortDescriptionHighlights.map((item, index) => (
              <li key={index} className="fs14">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex g30 product__info__quantity__main__container">
            <div className="flex align-center product__info__quantity__container">
              <span className="green__text product__info__quantity__title">
                Quantity:
              </span>
              <span className="product__info__quantity__number">
                {quantity}
              </span>
              <div className="flex column product__info__quantity__buttons__container">
                <IconButton
                  className="product__info__quantity__button"
                  onClick={() => {
                    handleQuantityChange("increment");
                  }}
                >
                  <ExpandLessIcon className="product__info__quantity__button__icon" />
                </IconButton>
                <IconButton
                  className="product__info__quantity__button"
                  onClick={() => {
                    handleQuantityChange("decrement");
                  }}
                >
                  <ExpandMoreIcon className="product__info__quantity__button__icon" />
                </IconButton>
              </div>
            </div>
            <div className="flex align-center product__info__wish__container">
              <Checkbox
                className="product__info__wish__favorite"
                icon={<FavoriteBorder className="favorite__border" />}
                checkedIcon={<Favorite className="favorite" />}
                onChange={onChange}
                checked={checked}
              />
            </div>
          </div>
          <div className="flex g20 align-center">
            <Button className="product__info__buy__button" variant="contained">
              Buy Now
            </Button>
            <Button
              variant="contained"
              className="product__info__add__to__shopping__cart__button"
              onClick={onClickAddToCart}
            >
              <div className="flex justify-center align-center g10">
                <span className="fs22 flex justify-center align-center">
                  <AiOutlineShoppingCart />
                </span>
                <span>Add To Cart</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
