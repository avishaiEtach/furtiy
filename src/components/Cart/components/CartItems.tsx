import { Loader } from "../../Loader/Loader";
import { Divider, IconButton } from "@mui/material";
import { useCartItems } from "../hooks/useCartItems";
import { CartItem } from "./CartItem";

interface CartItemsProps {
  cartToShow: { prod: Product; quantity: number }[];
  setCartToShow: (value: { prod: Product; quantity: number }[]) => void;
}

export const CartItems = ({ cartToShow, setCartToShow }: CartItemsProps) => {
  const { onClick, priceLabels, removeFromCart } = useCartItems({
    cartToShow,
    setCartToShow,
  });

  return (
    <div className="cart__items__main__container">
      <div className="flex column g20 cart__items__suc__container">
        <div className="flex column g20 cart__items__items__container">
          {!cartToShow.length ? (
            <Loader type="progress" fullHight={true} />
          ) : (
            cartToShow.map((item, index) => (
              <CartItem
                key={index}
                index={index}
                item={item}
                onClick={onClick}
                removeFromCart={removeFromCart}
              />
            ))
          )}
        </div>
        {priceLabels.map((item, index) => (
          <div key={index}>
            <div
              className={`flex space-between cart__items__price__labels__container ${
                item.bold ? "bold" : ""
              }`}
            >
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            {item.divider ? <Divider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};
