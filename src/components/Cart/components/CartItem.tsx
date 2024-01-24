import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface CartItemProps {
  item: { prod: Product; quantity: number };
  index: number;
  removeFromCart: (item: { prod: Product; quantity: number }) => void;
  onClick: (
    item: { prod: Product; quantity: number },
    action: "add" | "remove",
    index: number
  ) => void;
}

export const CartItem = ({
  item,
  onClick,
  index,
  removeFromCart,
}: CartItemProps) => {
  return (
    <div className="flex align-center space-between cart__item__container">
      <div className="flex g20 align-center">
        <div className="cart__item__image__container">
          <img src={item.prod.image} alt="Cart Item Product" />
        </div>
        <div>
          <div className="flex g10 align-center">
            <h3 className="cart__item__header">{item.prod.name}</h3>
            <IconButton
              onClick={() => {
                removeFromCart(item);
              }}
            >
              <DeleteForeverIcon className="cart__item__delete__button__icon" />
            </IconButton>
          </div>
          <div className="flex align-center cart__item__quantity__container">
            <span className="fs14">Quantity:</span>
            <div className="flex align-center space-between cart__item__quantity__buttons__container">
              <IconButton
                className="cart__item__button"
                onClick={() => {
                  onClick(item, "add", index);
                }}
              >
                +
              </IconButton>
              <span>{item.quantity}</span>
              <IconButton
                onClick={() => {
                  onClick(item, "remove", index);
                }}
                className="cart__item__button"
              >
                -
              </IconButton>
            </div>
          </div>
          <span className="cart__item__sub__title">
            {`* ${item.prod.subTitle ?? "price per kg"}`}
          </span>
        </div>
      </div>
      <span className="cart__item__new__price">{`$${item.prod.newPrice}`}</span>
    </div>
  );
};
