import { useRef } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import Carousal from "@itseasy21/react-elastic-carousel";

interface RelatedProducts {
  relatedProducts: Product[];
}

export const RelatedProducts = ({ relatedProducts }: RelatedProducts) => {
  const carouselRef = useRef<any>();
  return (
    <>
      <div className="related__products__header__continuer flex align-center">
        <h2>
          Related <span className="green__text">Products</span>
        </h2>
        <div className="related__products__carousel__arrows">
          <button onClick={() => carouselRef.current.slidePrev()}>
            <HiOutlineArrowNarrowLeft />
          </button>
          <button onClick={() => carouselRef.current.slideNext()}>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
      <div className="related__products__sells__carousel">
        <Carousal
          showArrows={false}
          ref={carouselRef}
          itemsToScroll={4}
          itemsToShow={4}
          isRTL={false}
        >
          {relatedProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </Carousal>
      </div>
    </>
  );
};
