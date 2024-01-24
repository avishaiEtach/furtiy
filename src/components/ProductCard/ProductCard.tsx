import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Button, Checkbox } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useProductCard } from "./hooks/useProductCard";
import { useNavigate } from "react-router-dom";
import "./ProductCardStyle.scss";
import { replaceRouteParam, routesPath } from "../../routes";
import { logisticService } from "../../services/logistic-service.service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store/store";
import { setWishList } from "../../store/store/products.actions";

export function ProductCard({ product, minimize = false }: ProductCardProps) {
  const navigate = useNavigate();
  const { ProductCardFlag, onChange, checked, onClick } = useProductCard({
    product,
  });
  return (
    <div
      onClick={() => {
        navigate(replaceRouteParam(routesPath.productPage, product._id));
      }}
      className={`product__card flex align-center ${
        minimize ? "minimize" : ""
      }`}
    >
      <div
        className="product__card__like"
        onClick={async (ev) => {
          ev.stopPropagation();
        }}
      >
        <Checkbox
          className="product__card__favorite"
          icon={<FavoriteBorder className="favorite__border" />}
          checkedIcon={<Favorite className="favorite" />}
          onChange={onChange}
          checked={checked}
        />
      </div>
      {ProductCardFlag(product.type)}
      <div
        className={`product__card__image__continuer ${
          minimize ? "minimize" : ""
        }`}
      >
        <img src={product.image} alt="" />
      </div>
      <div
        className={`product__card__info flex g10 ${minimize ? "minimize" : ""}`}
      >
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <div className="flex justify-center align-center g10">
          <Rating
            name="text-feedback"
            value={product.rating}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon className="star__icon" fontSize="inherit" />}
          />
          <span className="fs14">{`(${product.rating.toFixed(1)})`}</span>
        </div>
        <p>{product.subTitle ? product.subTitle : "price per kg"}</p>
      </div>
      <div
        className={`product__card__price__continuer flex justify-center align-center space-between ${
          minimize ? "minimize" : ""
        }`}
      >
        <div
          className="flex g10 justify-center align-center"
          style={{ alignSelf: "flex-end" }}
        >
          <span className="new__price">${product.newPrice.toFixed(2)}</span>
          {(product.type === "sale" || product.type === "hot") && (
            <span className="fs14 old__price">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <Button
          onClick={onClick}
          variant="contained"
          className="add__to__shopping__cart__button"
        >
          <div className="flex justify-center align-center g10">
            <span className="fs22 flex justify-center align-center">
              <AiOutlineShoppingCart />
            </span>
            <span>Add</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
