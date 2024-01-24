import React from "react";
import { CircularProgress, Skeleton } from "@mui/material";
import "./Loader.scss";

interface LoaderProps {
  type: "progress" | "cards" | "horizontal";
  amountOfCards?: number;
  fullHight?: boolean;
}

export const Loader = ({
  type,
  amountOfCards = 4,
  fullHight = false,
}: LoaderProps) => {
  const skeletonCards = Array.from({ length: amountOfCards }, (_, index) => (
    <Skeleton key={index} className="loader__card" variant="rectangular" />
  ));

  if (type === "horizontal") {
    return (
      <div className="flex column horizontal__cards g20">{skeletonCards}</div>
    );
  }

  return (
    <div
      className={`flex justify-center align-center loader__container ${type} ${
        fullHight ? "full__hight" : ""
      }`}
    >
      {type === "progress" ? (
        <CircularProgress className="circular__progress" />
      ) : (
        <div className="flex g30 cards__container">{skeletonCards}</div>
      )}
    </div>
  );
};
