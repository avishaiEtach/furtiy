import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { GiGlassHeart } from "react-icons/gi";

export const Copyright = () => {
  return (
    <div className="fs14 flex space-between">
      <p>
        Copyright &#169; {new Date().getFullYear()}{" "}
        <span className="copyright__text">avishai</span>. All Right Reserved
      </p>
      <div className="flex g20">
        <p className="flex g10 align-center">
          <span className="copyright__text fs18">
            <TbPhoneCall />
          </span>
          <span>+086124435</span>
        </p>
        <p className="flex g10 align-center">
          <span className="copyright__text fs18">
            <TbPhoneCall />
          </span>
          <span>+05789452356</span>
        </p>
      </div>
      <p className="flex g10 align-center">
        <span>
          Made with{" "}
          <span className="copyright__text with__space fs20">
            <GiGlassHeart />
          </span>{" "}
          By avishai
        </span>
      </p>
    </div>
  );
};
