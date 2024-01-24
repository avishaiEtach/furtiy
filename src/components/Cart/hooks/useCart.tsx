import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartToShow, setCartToShow] = useState<
    { prod: Product; quantity: number }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    return () => {
      setLoading(false);
      setSuccess(false);
    };
  }, []);

  return {
    cartToShow,
    setCartToShow,
    loading,
    setLoading,
    success,
    setSuccess,
  };
};
