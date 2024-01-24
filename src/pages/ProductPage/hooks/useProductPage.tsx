import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsService } from "../../../services/products.service";
import { useDispatch } from "react-redux";
import { setReviews } from "../../../store/store/products.actions";

export const useProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[] | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState<number>(1);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  useEffect(() => {
    if (product) {
      dispatch(setReviews(product.reviews));
    }
  }, [product]);

  const getProductById = async (id: string | undefined) => {
    setLoading(true);
    if (id) {
      const product = await productsService.getProductById(id);
      const relatedProducts = await productsService.getRelatedProductsByProdId(
        id
      );
      setRelatedProducts(relatedProducts);
      setProduct(product);
      setLoading(false);
    }
  };

  return {
    product,
    relatedProducts,
    quantity,
    setQuantity,
    loading,
    getProductById,
  };
};
