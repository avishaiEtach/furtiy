import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { useEffect, useState } from "react";
import { logisticService } from "../../../services/logistic-service.service";
import { configs } from "../../../assets/configs";
import { usersService } from "../../../services/users.service";
import { closeModal, setCart } from "../../../store/store/products.actions";

interface CartItemsProps {
  cartToShow: { prod: Product; quantity: number }[];
  setCartToShow: (value: { prod: Product; quantity: number }[]) => void;
}

export const useCartItems = ({ cartToShow, setCartToShow }: CartItemsProps) => {
  const { user, cart } = useSelector((state: RootState) => state.productsModel);

  const dispatch = useDispatch();

  useEffect(() => {
    getCartToShow(cart);
  }, [cart]);

  const getCartToShow = async (cart: any[]) => {
    const cartToShow = await logisticService.getCartByProdID(cart);
    setCartToShow(cartToShow);
  };

  const subTotal = Number(
    cartToShow
      .reduce((acc, prod) => {
        acc += prod.prod.newPrice * prod.quantity;
        return acc;
      }, 0)
      .toFixed(2)
  );

  const discount = Number(
    cartToShow
      .reduce((acc, prod) => {
        if (prod.prod.oldPrice) {
          const difference = prod.prod.newPrice - prod.prod.oldPrice;
          const discount = Math.abs(difference / prod.prod.oldPrice);
          acc += prod.prod.newPrice * discount * prod.quantity;
        }
        return acc;
      }, 0)
      .toFixed(2)
  );

  const estimatedTax = Number(
    ((subTotal - discount) * configs.ESTIMATED_TAX_VALUE).toFixed(2)
  );

  const total = (subTotal - discount + estimatedTax).toFixed(2);

  const onClick = (
    item: { prod: Product; quantity: number },
    action: "add" | "remove",
    index: number
  ) => {
    let itemIndexCart = cart.findIndex((show) => show.prodId === item.prod._id);
    if (itemIndexCart !== -1) {
      const cartCopy = [...cart];
      const cartToShowCopy = [...cartToShow];
      if (action === "add") {
        if (
          cartToShowCopy[index].quantity <= 49 ||
          cartCopy[itemIndexCart].quantity <= 49
        ) {
          cartToShowCopy[index].quantity += 1;
          cartCopy[itemIndexCart].quantity += 1;
        }
      } else {
        if (
          cartToShowCopy[index].quantity > 1 ||
          cartCopy[itemIndexCart].quantity > 1
        ) {
          cartToShowCopy[index].quantity -= 1;
          cartCopy[itemIndexCart].quantity -= 1;
        }
      }
      setCartToShow([...cartToShowCopy]);
      dispatch(setCart([...cartCopy]));
      logisticService.setCart([...cartCopy]);
      if (user) {
        usersService.saveUser({
          ...user,
          cart: [...cartCopy],
        });
      }
    }
  };

  const removeFromCart = (item: { prod: Product; quantity: number }) => {
    let cartToShowCopy = [...cartToShow];
    let cartCopy = [...cart];
    const cartToShowCopyIndex = cartToShowCopy.findIndex(
      (cartItem) => cartItem.prod._id === item.prod._id
    );
    const cartCopyIndex = cartCopy.findIndex(
      (cartItem) => cartItem.prodId === item.prod._id
    );
    cartToShowCopy.splice(cartToShowCopyIndex, 1);
    cartCopy.splice(cartCopyIndex, 1);
    setCartToShow([...cartToShowCopy]);
    logisticService.setCart([...cartCopy]);
    dispatch(setCart([...cartCopy]));
    if (user) {
      usersService.saveUser({
        ...user,
        cart: [...cartCopy],
      });
    }
    if (!cartToShowCopy.length && !cartCopy.length) {
      dispatch(closeModal());
    }
  };

  const priceLabels = [
    {
      label: "Sub Total",
      value: `$${subTotal.toLocaleString("he-IL")}`,
      bold: false,
      divider: true,
    },
    {
      label: "Discount",
      value: `$${discount.toLocaleString("he-IL")}`,
      bold: false,
      divider: true,
    },
    {
      label: "Estimated Tax",
      value: `$${estimatedTax.toLocaleString("he-IL")}`,
      bold: false,
      divider: true,
    },
    {
      label: "Total",
      value: `$${Number(total).toLocaleString("he-IL")}`,
      bold: true,
      divider: false,
    },
  ];

  return { onClick, cartToShow, priceLabels, removeFromCart };
};
