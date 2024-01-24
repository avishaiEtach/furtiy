import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useShopSearchByCategories } from "../hooks/useShopSearchByCategories";
import { Skeleton } from "@mui/material";

interface ShopSearchByCategoriesProps {
  setSearchForm: (value: Dictionary) => void;
  setLoading: (value: boolean) => void;
  searchForm: Dictionary;
  category: null | string;
  setPage: (value: number) => void;
}

export const ShopSearchByCategories = ({
  setLoading,
  setSearchForm,
  searchForm,
  category,
  setPage,
}: ShopSearchByCategoriesProps) => {
  const { categories, onChosenCategory, categoriesNumbers } =
    useShopSearchByCategories({
      setLoading,
      setSearchForm,
      category,
      setPage,
    });

  return (
    <div>
      <div>
        <div className="flex space-between align-center">
          <h3 className="shop__search__by__categories__header">Category</h3>
          <ArrowForwardIosIcon className="shop__search__by__categories__header__icon" />
        </div>
        <div className="shop__search__by__categories__header__bottom__line"></div>
      </div>

      <div className="flex column g10">
        {categories.map((categoryItem, index) => (
          <div
            key={index}
            onClick={() => {
              onChosenCategory(categoryItem.title);
            }}
            className={`flex align-center space-between shop__search__by__categories__card ${
              (category ?? searchForm.category) === categoryItem.title
                ? "chosen"
                : ""
            }`}
          >
            <div className="flex align-center g10">
              <categoryItem.icon
                className={`shop__search__by__categories__category__icon ${categoryItem.title}`}
              />
              <span className="shop__search__by__categories__category__title">
                {categoryItem.title}
              </span>
            </div>
            <span className="flex align-center justify-center fs12 shop__search__by__categories__category__number">
              {categoriesNumbers[index] ?? (
                <Skeleton
                  variant="circular"
                  className="shop__search__by__categories__category__skeleton"
                />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
