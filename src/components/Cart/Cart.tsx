import { CartForm } from "./components/CartForm";
import { CartItems } from "./components/CartItems";
import { useCart } from "./hooks/useCart";
import { CartSuccuss } from "./components/CartSuccuss";
import "./Cart.scss";

export const Cart = () => {
  const {
    cartToShow,
    setCartToShow,
    loading,
    setLoading,
    success,
    setSuccess,
  } = useCart();

  return (
    <div className="cart__main__container">
      {success && <CartSuccuss loading={loading} />}
      {!success && (
        <>
          <h1 className="cart__header">Billing Details</h1>
          <div className="flex g20">
            <CartForm setLoading={setLoading} setSuccess={setSuccess} />
            <CartItems cartToShow={cartToShow} setCartToShow={setCartToShow} />
          </div>
        </>
      )}
    </div>
  );
};
