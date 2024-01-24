import React from "react";
import { Button } from "@mui/material";
import { MediaIcons } from "../../MediaIcons/MediaIcons";
import { TbPhoneCall } from "react-icons/tb";
import { FiMail, FiMapPin } from "react-icons/fi";
import { TfiAlarmClock } from "react-icons/tfi";
import googlePlay from "../../../assets/images/googlePlay.png";
import appleStore from "../../../assets/images/appleStore.png";
import { useAppFooter } from "../hooks/useAppFooter";
import { routes } from "../../../routes";

export const FooterInfo = () => {
  const { accountRoutes, FooterItems } = useAppFooter();
  return (
    <div className="flex footer__info__container">
      <div className="flex column g20">
        <div className="logo">Frutiy</div>
        <MediaIcons />
        <div className="footer-info-icons flex  column g10">
          <div className="flex g5 align-center">
            <span className="fs18">
              <TbPhoneCall />
            </span>
            <span className="fs12">+05789452356</span>
          </div>
          <div className="flex g5 align-center">
            <span className="fs18">
              <FiMail />
            </span>
            <span className="fs12">avishai@gmail.com</span>
          </div>
          <div className="flex g5 align-center">
            <span className="fs18">
              <FiMapPin />
            </span>
            <span className="fs12">Ha-Banai St, Holon, 5885001</span>
          </div>
          <div className="flex g5 align-center">
            <span className="fs18">
              <TfiAlarmClock />
            </span>
            <span className="fs12">10:00 - 18:00 Mon-Sat</span>
          </div>
          <div className="divider"></div>
        </div>
      </div>
      <FooterItems isNavLink={true} title={"Company"} items={routes as any} />
      <FooterItems title={"Account"} items={accountRoutes as any} />
      <div className="flex column g20">
        <h4>{"Download"}</h4>
        <p className="fs12">From App Store or Google Play</p>
        <div className="phone__store__button">
          <Button>
            <img alt="Google Play" src={googlePlay} />
          </Button>
        </div>
        <div className="phone__store__button">
          <Button>
            <img alt="Apple Store" src={appleStore} />
          </Button>
        </div>
      </div>
    </div>
  );
};
