import React from "react";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { useHomePage } from "../hooks/useHomePage";

interface PopularProductsProps {
  products: Product[];
}

export const PopularProducts = ({ products }: PopularProductsProps) => {
  const { popularProductsCatagories, handleActive, active } = useHomePage();
  return (
    <div className="popular__products__main__container">
      <div className="popular-products-header-continuer">
        <h2>
          Popular <span className="green__text">Products</span>
        </h2>
        <ul>
          {popularProductsCatagories.map((category, index) => (
            <li
              key={index}
              className={active === category ? "active" : ""}
              onClick={() => {
                handleActive(category);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-grid-popular-products">
        {products
          .filter((item) => item.popularProducts)
          .map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
      </div>
    </div>
  );
};
