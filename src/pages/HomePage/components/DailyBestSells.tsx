import React from "react";
import Carousal from "@itseasy21/react-elastic-carousel";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { useHomePage } from "../hooks/useHomePage";

interface DailyBestSellsProps {
  products: Product[];
}

export const DailyBestSells = ({ products }: DailyBestSellsProps) => {
  const { getTopSellingProducts, carouselRef } = useHomePage();
  return (
    <div className="daily-best-container">
      <div className="daily-best-header-continuer flex align-center">
        <h2>
          Daily <span className="green__text">Best Sells</span>
        </h2>
        <div className="daily-best-sells-carousel-arrows">
          <button onClick={() => carouselRef.current.slidePrev()}>
            <HiOutlineArrowNarrowLeft />
          </button>
          <button onClick={() => carouselRef.current.slideNext()}>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
      <div className="daily-best-sells-carousel">
        <Carousal
          showArrows={false}
          ref={carouselRef}
          itemsToScroll={4}
          itemsToShow={4}
          isRTL={false}
        >
          {getTopSellingProducts(products).map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </Carousal>
      </div>
    </div>
  );
};
