import React from "react";
import { Link } from "react-router-dom";
import { useHomePage } from "../hooks/useHomePage";

export const Categories = () => {
  const { categories } = useHomePage();
  return (
    <div className="categories__container">
      <h2>
        Shop <span className="green__text">by Categories</span>
      </h2>
      <div className="cards__list__categories">
        {categories.map((item, key: number) => (
          <Link key={key} to={`/shop?category=${item.title}`}>
            <div
              className={`card flex column justify-center align-center ${item.title}`}
            >
              <div className="flex justify-center align-center">
                <item.icon />
              </div>
              <div>{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
