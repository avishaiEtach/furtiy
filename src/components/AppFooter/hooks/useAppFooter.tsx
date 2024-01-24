import React from "react";
import { NavLink } from "react-router-dom";

interface FooterItemsProps {
  title?: string;
  items?: Routes[] | string[] | [];
  isNavLink?: boolean;
}

export const useAppFooter = () => {
  const accountRoutes = [
    "sign in",
    "view cart",
    "my wishlist",
    "track my order",
    "compar products",
  ];

  const FooterItems = ({
    title = "",
    items = [],
    isNavLink = false,
  }: FooterItemsProps) => {
    return (
      <div className="flex column g10 footer__items">
        <h4>{title}</h4>
        {items.map((item: any, key: number) =>
          isNavLink ? (
            item.showInNavBar ? (
              <NavLink
                className="footer-item with__space fs12"
                key={item.path}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ) : null
          ) : (
            <p key={key} className="footer-item fs12">
              {item}
            </p>
          )
        )}
      </div>
    );
  };
  return { accountRoutes, FooterItems };
};
