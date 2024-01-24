import React from "react";
import { Button } from "@mui/material";
import { TextFieldMui } from "../../../components/TextFieldMui/TextFieldMui";
import { useShopSearch } from "../hooks/useShopSearch";

interface ShopSearchAndFilterBarProps {
  setSearchForm: (value: any) => void;
  setLoading: (value: boolean) => void;
  isFilter: boolean;
  clearAll: () => void;
  search: string;
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
}

export const ShopSearchAndFilterBar = ({
  setSearchForm,
  setLoading,
  isFilter,
  clearAll,
  search,
  setSearch,
  setPage,
}: ShopSearchAndFilterBarProps) => {
  const { getSearch } = useShopSearch({
    setSearchForm,
    setLoading,
    setSearch,
    setPage,
  });

  return (
    <div className="search__bar__container">
      <div className="flex align-center">
        <TextFieldMui
          type="search"
          onChange={getSearch}
          externalValue={search}
        />
        <Button
          disabled={!isFilter}
          onClick={clearAll}
          className={`shop__clear__all__button ${
            !isFilter ? "button-disabled" : ""
          }`}
          variant="contained"
        >
          <div className="flex">
            <span>clear all</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
