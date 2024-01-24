import { ProductCard } from "../ProductCard/ProductCard";
import { Loader } from "../Loader/Loader";
import { useWishList } from "./hooks/useWishList";
import "./WishList.scss";

export const WishList = () => {
  const { wishListToShow, loading } = useWishList();

  return (
    <>
      <h1 className="wish__list__header green__text">Wish List</h1>
      {loading ? (
        <Loader type="horizontal" fullHight={true} />
      ) : (
        <div className="flex column g30">
          {wishListToShow.map((item, index) => (
            <ProductCard key={index} minimize={true} product={item} />
          ))}
        </div>
      )}
    </>
  );
};
