import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Slider } from "@mui/material";
import { TextFieldMui } from "../../../components/TextFieldMui/TextFieldMui";

interface ShopPriceFilterProps {
  setIsFilter: (value: boolean) => void;
  value: number[];
  handleChange: (event: any, newValue?: any) => void;
  setLoading: (value: boolean) => void;
  setPage: (value: number) => void;
  getFilteredProducts: (
    searchForm: Dictionary,
    filterByPrice?: boolean
  ) => void;
  searchForm: Dictionary;
}

export const ShopPriceFilter = ({
  setIsFilter,
  value,
  handleChange,
  setLoading,
  setPage,
  getFilteredProducts,
  searchForm,
}: ShopPriceFilterProps) => {
  return (
    <div>
      <div className="flex space-between align-center">
        <h3 className="shop__price__filter__header">Fill By Price</h3>
        <ArrowForwardIosIcon className="shop__price__filter__header__icon" />
      </div>
      <div className="shop__price__filter__container"></div>
      <div className="shop__price__filter__slider__container">
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          disableSwap
          className="price__slider"
        />
        <div className="flex g10 shop__price__filter__inputs__container">
          <TextFieldMui
            label="Min."
            name={"min"}
            variant="outlined"
            onChange={handleChange}
            externalValue={value[0]}
            withBorder={true}
          />
          <TextFieldMui
            label="Max."
            name={"max"}
            variant="outlined"
            onChange={handleChange}
            externalValue={value[1]}
            withBorder={true}
          />
        </div>
        <Button
          fullWidth
          variant="contained"
          className="shop__price__filter__button"
          onClick={(ev) => {
            setLoading(true);
            getFilteredProducts(searchForm, true);
            setIsFilter(true);
            setPage(1);
          }}
        >
          Filter By Price
        </Button>
      </div>
    </div>
  );
};
