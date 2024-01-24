import React, { useEffect } from "react";
import { Loader } from "../../../components/Loader/Loader";
import { ProductCard } from "../../../components/ProductCard/ProductCard";

interface ShopCardsProps {
  loading: boolean;
  products: Product[];
}

export const ShopCards = ({ loading, products }: ShopCardsProps) => {
  if (loading) {
    return <Loader type="progress" fullHight={true} />;
  }

  if (!products.length) {
    return <div>{"no items fond"}</div>;
  }

  return (
    <div className="card-grid-popular-products">
      {products.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
};
