import React from "react";
import { FastShipping } from "./components/FastShipping";
import { FooterInfo } from "./components/FooterInfo";
import { Copyright } from "./components/Copyright";
import "./AppFooterStyle.scss";

export const AppFooter = () => {
  return (
    <footer className="app-footer">
      <FastShipping />
      <FooterInfo />
      <div className="divider with__space"></div>
      <Copyright />
    </footer>
  );
};
