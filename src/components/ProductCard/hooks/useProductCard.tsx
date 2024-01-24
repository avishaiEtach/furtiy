import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { logisticService } from "../../../services/logistic-service.service";
import { setCart, setWishList } from "../../../store/store/products.actions";

interface useProductCardProps {
  product: Product;
}

export const useProductCard = ({ product }: useProductCardProps) => {
  const { user, wishList } = useSelector(
    (state: RootState) => state.productsModel
  );

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setChecked(
      wishList.length && wishList.includes(product._id) ? true : false
    );
  }, [wishList]);

  function ProductCardFlag(type: Product["type"]) {
    return (
      <div
        className={`product__card__flag ${type} flex justify-center align-center`}
      >
        {type}
      </div>
    );
  }

  const onChange = (ev: any) => {
    setChecked(ev.target.checked);
    if (ev.target.checked) {
      const resWishList = logisticService.addToWishList(product._id, user);
      dispatch(setWishList(resWishList));
    } else {
      const resWishList = logisticService.removeFromWishList(product._id, user);
      dispatch(setWishList(resWishList));
    }
  };

  const onClick = (ev: any) => {
    ev.stopPropagation();
    const resCart = logisticService.addToCart(product._id, 1, user);
    dispatch(setCart(resCart));
  };

  return { ProductCardFlag, onChange, checked, onClick };
};
