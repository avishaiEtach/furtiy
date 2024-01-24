import { ProductReviews } from "./ProdectReviews";
import { AddNewReview } from "./AddNewReview";
import { useReviewsTab } from "../hooks/useReviewsTab";

interface ReviewsTabProps {
  product: Product;
}

export const ReviewsTab = ({ product }: ReviewsTabProps) => {
  const params = useReviewsTab({ product });
  return (
    <div className="flex g30 reviews__tab__main__container">
      <div
        className={`${
          params.reviewsToShow.length
            ? "reviews__tab__product__reviews__container"
            : ""
        }`}
      >
        <ProductReviews
          formatDate={params.formatDate}
          loading={params.loading}
          page={params.page}
          setPage={params.setPage}
          reviewsToShow={params.reviewsToShow}
        />
      </div>
      <div className="flex column g30">
        <AddNewReview
          fromValues={params.fromValues}
          onChange={params.onChange}
          setFromValues={params.setFromValues}
          product={product}
        />
      </div>
    </div>
  );
};
