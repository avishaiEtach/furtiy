import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { replaceRouteParam, routesPath } from "../../../routes";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  openDrawer,
  openModal,
  setWishList,
} from "../../../store/store/products.actions";
import { Login } from "../../Login/Login";
import { productsService } from "../../../services/products.service";
import { ProductCard } from "../../ProductCard/ProductCard";
import { logisticService } from "../../../services/logistic-service.service";
import { WishList } from "../../WishList/WishList";
import { Cart } from "../../Cart/Cart";

export const useAppHeader = () => {
  const { user, wishList, cart } = useSelector(
    (state: RootState) => state.productsModel
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const UserLoader = () => {
    return (
      <div className="flex g10 align-center">
        <Skeleton
          variant="circular"
          className="user__label__circular__skeleton"
        />
        <Skeleton variant="text" className="user__label__text__skeleton" />
      </div>
    );
  };
  const OnClickUserLabel = () => {
    if (user) {
      navigate(replaceRouteParam(routesPath.account, user._id));
    } else {
      dispatch(
        openModal({
          open: true,
          children: <Login />,
        })
      );
    }
  };

  const OnClickWishListLabel = () => {
    if (wishList.length) {
      dispatch(openDrawer({ open: true, children: <WishList /> }));
    }
  };

  const OnClickCartLabel = () => {
    if (cart.length) {
      dispatch(openModal({ open: true, children: <Cart /> }));
    }
  };

  return {
    UserLoader,
    OnClickUserLabel,
    OnClickWishListLabel,
    OnClickCartLabel,
  };
};
