import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ShopSearchAndFilterBarProps {
  setSearchForm: (value: any) => void;
  setLoading: (value: boolean) => void;
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
}

export const useShopSearch = ({
  setSearchForm,
  setLoading,
  setSearch,
  setPage,
}: ShopSearchAndFilterBarProps) => {
  const getSearch = (ev: any) => {
    setSearch(ev.target.value);
    delayedSearch(ev.target.value);
    setPage(1);
  };

  const handleDelayedSearch = (value: any) => {
    setLoading(true);
    setSearchForm((prev: any) => (prev = { ...prev, name: value }));
  };

  const delayedSearch = useCallback(
    debounce((value) => handleDelayedSearch(value), 1000),
    []
  );

  return { getSearch };
};
