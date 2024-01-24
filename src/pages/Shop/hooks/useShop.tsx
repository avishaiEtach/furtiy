import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { productsService } from "../../../services/products.service";
import { configs } from "../../../assets/configs";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";

export const useShop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState<Product[]>([]);
  const [searchForm, setSearchForm] = useState<Dictionary>({
    name: "",
    category: "",
  });

  const [isFilter, setIsFilter] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [filterValue, setFilterValue] = useState([20, 50]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState<number>(1);

  const [amountOfPages, setAmountOfPages] = useState(1);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  useEffect(() => {
    if (category && searchForm.name === "") {
      getFilteredProducts({ category: category });
    } else {
      getFilteredProducts(searchForm);
    }
  }, [category, searchForm, page]);

  const getFilteredProducts = async (
    searchForm: Dictionary,
    filterByPrice = false
  ) => {
    const searchCriteria: CriteriaByProd[] = [
      {
        field: "name",
        operator: "equal",
        value: searchForm?.name ?? "",
      },
      {
        field: "category",
        operator: "equal",
        value: searchForm?.category ?? "",
      },
      {
        field: "newPrice",
        operator: "between",
        value: filterByPrice ? filterValue : [],
      },
    ];

    const dataToSearchedFilter = searchCriteria.filter(
      (item) =>
        item.operator && item.value && item.value !== "" && item.value.length
    );
    const { filterProducts, amount } = await productsService.filteredProducts(
      dataToSearchedFilter,
      page,
      configs.SHOP_LIMIT
    );
    setIsFilter(dataToSearchedFilter.length ? true : false);
    setProducts(filterProducts);
    setAmountOfPages(amount);
    setLoading(false);
  };

  const handleChange = (event: any, newValue?: any) => {
    if (newValue) {
      setFilterValue(newValue);
    } else {
      const { name, value } = event.target;
      if (name === "min") {
        setFilterValue((prev) => (prev = [+value, prev[1]]));
      } else {
        setFilterValue((prev) => (prev = [prev[0], +value]));
      }
    }
  };

  const clearAll = () => {
    setLoading(true);
    setSearch("");
    setSearchForm({
      name: "",
      category: "",
      PriceValue: [20, 50],
    });
    setIsFilter(false);
    navigate({
      search: ``,
    });
    setFilterValue([20, 50]);
    setPage(1);
  };

  const params = {
    setSearchForm,
    searchForm,
    category,
    setLoading,
    isFilter,
    clearAll,
    search,
    setSearch,
    setPage,
    filterValue,
    handleChange,
    setIsFilter,
    loading,
    products,
    amountOfPages,
    page,
    getFilteredProducts,
  };

  return params;
};
