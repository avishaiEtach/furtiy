import { useEffect, useState } from "react";
import { configs } from "../../../assets/configs";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { productsService } from "../../../services/products.service";
import noIconUser from "../../../assets/images/no_user_icon.png";

interface FromValues {
  comment: string;
  name: string;
  email: string;
  rating: number;
  [key: string]: string | number;
}

interface useReviewsTabProps {
  product: Product;
}

export const useReviewsTab = ({ product }: useReviewsTabProps) => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [fromValues, setFromValues] = useState<FromValues>({
    comment: "",
    name: "",
    email: "",
    rating: 4.5,
  });

  const { reviews } = useSelector((state: RootState) => state.productsModel);

  const [reviewsToShow, setReviewsToShow] = useState<ProductReviewToShow[]>([]);

  useEffect(() => {
    getProductReviewsUsers(reviews);
  }, [page, reviews]);

  const getProductReviewsUsers = async (reviews: any) => {
    setLoading(true);
    const reviewsToShow = getReviewsByPagination(reviews, page);
    let openReviews: ProductReviewToShow[] = [];
    for (let i = 0; i < reviewsToShow.length; i++) {
      const { date, review, reviewRating } = reviewsToShow[i];
      if (reviewsToShow[i].userId) {
        const userDetails = await productsService.getProductReviewsUsers(
          reviewsToShow[i].userId
        );
        if (userDetails) {
          const { name, image } = userDetails;
          openReviews.push({ date, review, reviewRating, name, image });
        }
      } else {
        const name = reviewsToShow[i].newUser?.name ?? "";
        const image = noIconUser;
        openReviews.push({ date, review, reviewRating, name, image });
      }
    }
    setReviewsToShow(openReviews);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const getReviewsByPagination = (reviews: any, page: number) => {
    const startIndex = (page - 1) * configs.PRODUCT_REVIEWS_LIMIT;
    const endIndex = startIndex + configs.PRODUCT_REVIEWS_LIMIT;
    const items = reviews.slice(startIndex, endIndex) ?? [];
    return items.sort((a: any, b: any) => {
      const dateA =
        a.date instanceof Date ? a.date.getTime() : new Date(a.date).getTime();
      const dateB =
        b.date instanceof Date ? b.date.getTime() : new Date(b.date).getTime();
      return dateB - dateA;
    });
  };

  const formatDate = (date: Date): string => {
    const newDate = new Date(date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[newDate.getMonth()];
    const day = newDate.getDate();
    const year = newDate.getFullYear();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const period = hours >= 12 ? "pm" : "am";

    const formattedDate = `${day < 10 ? "0" + day : day} ${month}, ${year} at ${
      hours % 12 || 12 < 10 ? "0" + (hours % 12) || 12 : hours % 12 || 12
    }:${minutes < 10 ? "0" + minutes : minutes} ${period}`;

    return formattedDate;
  };

  const onChange = (ev: any) => {
    let { name, value } = ev.target;
    setFromValues((prev) => (prev = { ...prev, [name]: value }));
  };

  const params = {
    formatDate,
    getReviewsByPagination,
    loading,
    page,
    setLoading,
    setPage,
    onChange,
    setFromValues,
    fromValues,
    reviewsToShow,
  };

  return params;
};
