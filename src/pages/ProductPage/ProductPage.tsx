import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsService } from "../../services/products.service";
import { Loader } from "../../components/Loader/Loader";
import { ProductInfo } from "./components/ProductInfo";
import { ProductTabs } from "./components/ProductTabs";
import { RelatedProducts } from "./components/RelatedProducts";
import { useProductPage } from "./hooks/useProductPage";
import "./ProductPage.scss";

export function ProductPage() {
  const { product, relatedProducts, quantity, setQuantity, loading } =
    useProductPage();

  if (!product || !relatedProducts || loading) {
    return (
      <div className="flex align-center full product__page__loader__container">
        <Loader type="progress" />
      </div>
    );
  }

  return (
    <>
      <ProductInfo
        product={product}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <div className="product__tabs__main__container">
        <ProductTabs product={product} />
      </div>
      <div className="related__products__main__container">
        <RelatedProducts relatedProducts={relatedProducts} />
      </div>
    </>
  );
}
