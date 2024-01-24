import { useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { useEffect, useState } from "react";
import { logisticService } from "../../../services/logistic-service.service";

export const useWishList = () => {
  const { wishList } = useSelector((state: RootState) => state.productsModel);
  const [wishListToShow, setWishListToShow] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const getWishListToShow = async (wishList: any) => {
    setLoading(true);
    const wishListToShow = await logisticService.getWishListByProdID(wishList);
    setWishListToShow(wishListToShow);
    setLoading(false);
  };

  useEffect(() => {
    getWishListToShow(wishList);
  }, [wishList]);

  return { wishListToShow, loading };
};
