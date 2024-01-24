import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { useState } from "react";
import { logisticService } from "../../../services/logistic-service.service";
import { setCart, setWishList } from "../../../store/store/products.actions";

interface useProductInfoProps {
  quantity: number;
  setQuantity: (value: any) => void;
  product: Product;
}

export const useProductInfo = ({
  quantity,
  setQuantity,
  product,
}: useProductInfoProps) => {
  const { user, wishList } = useSelector(
    (state: RootState) => state.productsModel
  );

  const [checked, setChecked] = useState(
    wishList.length && wishList.includes(product._id) ? true : false
  );

  const dispatch = useDispatch();

  const pricePercentageDifference = (
    newPrice: number,
    oldPrice: number
  ): string => {
    const difference = newPrice - oldPrice;
    return Math.abs((difference / oldPrice) * 100).toFixed(0);
  };

  const handleQuantityChange = (operation: "increment" | "decrement") => {
    if (operation === "increment" && quantity < 50) {
      setQuantity((prev: number) => prev + 1);
    } else if (operation === "decrement" && quantity > 1) {
      setQuantity((prev: number) => prev - 1);
    }
  };

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
  const onClickAddToCart = (ev: any) => {
    ev.stopPropagation();
    const resCart = logisticService.addToCart(product._id, quantity, user);
    dispatch(setCart(resCart));
  };

  return {
    pricePercentageDifference,
    handleQuantityChange,
    onChange,
    checked,
    onClickAddToCart,
  };
};
