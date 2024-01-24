import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ShopSearchAndFilterBar } from "./components/ShopSearchAndFilterBar";
import { ShopCards } from "./components/ShopCards";
import { ShopSearchByCategories } from "./components/ShopSearchByCategories";
import { ShopPriceFilter } from "./components/ShopPriceFilter";
import { ShopMoreInfoCards } from "./components/ShopMoreInfoCards";
import { PaginationMui } from "../../components/PaginationMui/PaginationMui";
import { useShop } from "./hooks/useShop";
import { configs } from "../../assets/configs";
import "./Shop.scss";

export function Shop() {
  const params = useShop();

  return (
    <div className="flex column">
      <PageHeader title={"Shop"} />
      <ShopSearchAndFilterBar
        setSearchForm={params.setSearchForm}
        setLoading={params.setLoading}
        isFilter={params.isFilter}
        clearAll={params.clearAll}
        search={params.search}
        setSearch={params.setSearch}
        setPage={params.setPage}
      />
      <div className="flex space-between g30">
        <div className=" flex column g30 shop__filter__main__container">
          <ShopSearchByCategories
            setLoading={params.setLoading}
            setSearchForm={params.setSearchForm}
            searchForm={params.searchForm}
            category={params.category}
            setPage={params.setPage}
          />
          <ShopPriceFilter
            value={params.filterValue}
            handleChange={params.handleChange}
            setIsFilter={params.setIsFilter}
            setLoading={params.setLoading}
            setPage={params.setPage}
            getFilteredProducts={params.getFilteredProducts}
            searchForm={params.searchForm}
          />
          <ShopMoreInfoCards />
        </div>
        <div className="shop__products__cards__main__container">
          <ShopCards loading={params.loading} products={params.products} />
          {params.products.length > 0 && (
            <div className="flex shop__products__pagination__main__container">
              <PaginationMui
                maxPage={params.amountOfPages}
                limit={configs.SHOP_LIMIT}
                page={params.page}
                onChange={(
                  event: React.ChangeEvent<unknown>,
                  value: number
                ) => {
                  params.setLoading(true);
                  params.setPage(value);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
