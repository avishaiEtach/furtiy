import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { useState } from "react";
import { productsService } from "../../../services/products.service";
import { setReviews } from "../../../store/store/products.actions";

interface FromValues {
  comment: string;
  name: string;
  email: string;
  rating: number;
  [key: string]: string | number;
}

interface AddNewReviewProps {
  fromValues: FromValues;
  setFromValues: (value: FromValues) => void;
  onChange: (ev: any) => void;
  product: Product;
}

export const useAddNewReview = ({
  fromValues,
  setFromValues,
}: AddNewReviewProps) => {
  const { user } = useSelector((state: RootState) => state.productsModel);

  const [error, setError] = useState({
    email: false,
    comment: false,
    massage: "",
  });

  const dispatch = useDispatch();

  const onSubmit = async (ev: any, product: Product) => {
    ev.preventDefault();
    if (!fromValues.email.includes("@")) {
      setError({ ...error, email: true, massage: "not a valid email" });
      setTimeout(() => {
        setError({
          email: false,
          comment: false,
          massage: "",
        });
      }, 5000);
      return;
    }
    const words = fromValues.comment.split(/\s+/);
    if (words.length >= 55) {
      setError({
        ...error,
        comment: true,
        massage: "review can be no more then 55 words",
      });
      setTimeout(() => {
        setError({
          email: false,
          comment: false,
          massage: "",
        });
      }, 5000);
      return;
    }
    let newReview: ProductReview = {
      date: new Date(new Date().setMilliseconds(0)),
      review: fromValues.comment,
      reviewRating: fromValues.rating,
      userId: user?._id,
      newUser: { name: fromValues.name, email: fromValues.email },
    };
    if (newReview.userId !== undefined) {
      delete newReview.newUser;
    }
    if (!user) {
      delete newReview.userId;
    }
    product.reviews.unshift(newReview);
    const newProduct = await productsService.saveProduct(product);
    dispatch(setReviews([...newProduct.reviews]));
    setFromValues({ comment: "", email: "", name: "", rating: 4.5 });
  };

  return { onSubmit, error };
};
