import { Rating } from "@mui/material";
import { configs } from "../../../assets/configs";
import { PaginationMui } from "../../../components/PaginationMui/PaginationMui";
import StarIcon from "@mui/icons-material/Star";
import { Loader } from "../../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { useRef, useState } from "react";
import { useProductReviews } from "../hooks/useProductReviews";

interface ProductReviews {
  page: number;
  formatDate: (date: Date) => string;
  setPage: (value: number) => void;
  loading: boolean;
  reviewsToShow: ProductReviewToShow[];
}

export const ProductReviews = ({
  page,
  formatDate,
  setPage,
  loading,
  reviewsToShow,
}: ProductReviews) => {
  const { reviews } = useSelector((state: RootState) => state.productsModel);
  const { reviewsToggle, onClick, countSentences } = useProductReviews();

  if (loading) {
    return (
      <>
        <h3 className="products__tab__header">{`Customer Reviews`}</h3>
        <Loader type="progress" fullHight={true} />
      </>
    );
  }

  if (!reviewsToShow.length) {
    return (
      <>
        <h3 className="products__tab__header">{`Customer Reviews`}</h3>
        <div>{"no items found"}</div>
      </>
    );
  }

  return (
    <>
      <h3 className="products__tab__header">{`Customer Reviews`}</h3>
      <div>
        {reviewsToShow.map((item, index) => (
          <div key={index} className={`flex g30 product__review__card`}>
            <div className="flex column align-center justify-center g15">
              <div className="product__review__card__user__image__container">
                <img
                  className="product__review__card__user__image"
                  src={item.image}
                  alt="Review User"
                  loading="lazy"
                />
              </div>
              <p className="fs18 product__review__card__user__name">
                {item.name}
              </p>
            </div>
            <div>
              <p className="product__review__card__date">
                {formatDate(item.date)}
              </p>
              <div
                className={`product__review__card__review__container ${
                  reviewsToggle.includes(index) ? "" : "sort"
                }`}
              >
                <p className="product__review__card__review">{item.review}</p>
              </div>
              {countSentences(item.review) && (
                <div
                  className="product__review__card__review__toggle"
                  onClick={(ev) => {
                    onClick(ev, index);
                  }}
                >
                  {reviewsToggle.includes(index) ? "show lass" : "more..."}
                </div>
              )}
              <div className="flex align-center g10">
                <Rating
                  value={item.reviewRating}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon className="star__icon" fontSize="inherit" />
                  }
                />
                <span className="fs14 product__review__card__rating">{`(${item.reviewRating.toFixed(
                  1
                )})`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="product__review__pagination__container">
        <PaginationMui
          maxPage={reviews.length}
          limit={configs.PRODUCT_REVIEWS_LIMIT}
          page={page}
          onChange={(event: React.ChangeEvent<unknown>, value: number) => {
            setPage(value);
          }}
        />
      </div>
    </>
  );
};
