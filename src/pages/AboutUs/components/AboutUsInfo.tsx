import React from "react";
import { Card } from "@mui/material";
import CountUp from "react-countup";
import { useAboutUs } from "../hooks/useAboutUs";

export const AboutUsInfo = () => {
  const { aboutUsInfo } = useAboutUs();
  return (
    <div>
      <Card
        className="about-us-info flex justify-center align-center"
        elevation={5}
      >
        <div className="about-us-info-content flex">
          {aboutUsInfo.map((item, index) => (
            <div
              key={index}
              className="flex column g15 justify-center align-center about-us-info-content-card"
            >
              <span>
                <CountUp
                  className="count-up"
                  end={item.number}
                  suffix={item.suffix}
                  duration={5}
                />
              </span>
              <span>{item.subText}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
