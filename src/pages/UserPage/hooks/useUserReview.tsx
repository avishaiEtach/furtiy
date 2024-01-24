import { useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { useEffect, useState } from "react";
import { usersService } from "../../../services/users.service";

export const useUserReview = () => {
  const { user } = useSelector((state: RootState) => state.productsModel);
  const [reviews, setReviews] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (user) {
      setLoading(true);
      getUserReviews(user._id);
    }
  }, [user]);

  const getUserReviews = async (userId: string) => {
    const reviews: any[] = await usersService.getUserReviews(userId);
    setReviews(reviews);
    setLoading(false);
  };

  let rows = reviews.map((review) => {
    const prodName = review.prodName;
    const reviewText = review.review;
    const reviewRating = review.reviewRating;
    const prodId = review.prodId;
    const date = review.date;
    return { prodName, reviewText, reviewRating, prodId, date };
  });

  rows = [
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
    ...rows,
  ];

  const columns = [
    "Product Name",
    "Review",
    "Review Rating",
    "Date Post",
    "",
    ,
  ];

  return {
    columns,
    reviews,
    page,
    rowsPerPage,
    rows,
    handleChangePage,
    handleChangeRowsPerPage,
    loading,
  };
};
