import React from "react";
import { Hero } from "./components/Hero";
import "./HomePage.scss";
import { Categories } from "./components/Categories";
import { InfoCards } from "./components/InfoCards";
import { PopularProducts } from "./components/PopularProducts";
import { DailyBestSells } from "./components/DailyBestSells";
import { Loader } from "../../components/Loader/Loader";
import { useHomePage } from "./hooks/useHomePage";
import { HomePageInfo } from "./components/HomePageInfo";

export function HomePage() {
  const { products } = useHomePage();
  return (
    <div className="home__page__container">
      <Hero />
      <div className="home-page-divider"></div>
      <Categories />
      <InfoCards />
      {products.length ? (
        <>
          <PopularProducts products={products} />
          <DailyBestSells products={products} />
        </>
      ) : (
        <Loader type="cards" />
      )}
      <HomePageInfo />
    </div>
  );
}
