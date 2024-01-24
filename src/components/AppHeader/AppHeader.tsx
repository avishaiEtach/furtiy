import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import { TextFieldMui } from "../TextFieldMui/TextFieldMui";
import { MediaIcons } from "../MediaIcons/MediaIcons";
import { replaceRouteParam, routes, routesPath } from "../../routes";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store/store";
import { useAppHeader } from "./hooks/useAppHeader";
import "./AppHeaderStyle.scss";

export const AppHeader = () => {
  const { user, isToken, wishList, cart } = useSelector(
    (state: RootState) => state.productsModel
  );
  const {
    UserLoader,
    OnClickUserLabel,
    OnClickWishListLabel,
    OnClickCartLabel,
  } = useAppHeader();

  return (
    <header className="app__header">
      <div className="flex align-center g30 app__header__container">
        <div className="logo">Frutiy</div>
        <div className="flex g20">
          <TextFieldMui type="search" />
          <div className="flex justify-center align-center g20 fs18 btn__continuer">
            <div
              onClick={OnClickWishListLabel}
              className={`flex justify-center align-center g15 ${
                wishList.length ? "app__header__wishList__link" : ""
              }`}
            >
              <span>
                <Badge
                  badgeContent={wishList.length}
                  className="app__header__badge"
                >
                  <AiOutlineHeart />
                </Badge>
              </span>
              <span className="app__header__wish__list__title">Wishlist</span>
            </div>
            <div
              onClick={OnClickCartLabel}
              className={`flex justify-center align-center g15 ${
                cart.length ? "app__header__wishList__link" : ""
              }`}
            >
              <span>
                <Badge
                  className="app__header__badge"
                  badgeContent={cart.length}
                >
                  <AiOutlineShoppingCart />
                </Badge>
              </span>
              <span className="app__header__wish__list__title">Cart</span>
            </div>
            {isToken && !user ? (
              <UserLoader />
            ) : (
              <div
                onClick={OnClickUserLabel}
                className={`app__header__user__account ${user ? "user" : ""}`}
              >
                <NavLink
                  className="flex justify-center align-center g5"
                  to={replaceRouteParam(
                    routesPath.account,
                    user ? user._id : ""
                  )}
                >
                  <span>
                    <RiAccountCircleFill />
                  </span>
                  <span>{user ? user.name.first : "Account"}</span>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="divider fullscreen"></div>
      <div className="flex space-between nave__link__container">
        <nav className="flex g20">
          {routes.map((route) => {
            return route.showInNavBar ? (
              <NavLink key={route.path} to={route.path}>
                {route.label}
              </NavLink>
            ) : null;
          })}
        </nav>
        <div className="flex g30">
          <MediaIcons />
          <div className="divider vertical "></div>
          <div className="flex g10">
            <span>
              <TbPhoneCall />
            </span>
            <span>+05789452356</span>
          </div>
        </div>
      </div>
      <div className="divider fullscreen "></div>
    </header>
  );
};
