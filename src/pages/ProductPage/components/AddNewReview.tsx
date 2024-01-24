import { Button, Rating } from "@mui/material";
import { TextFieldMui } from "../../../components/TextFieldMui/TextFieldMui";
import StarIcon from "@mui/icons-material/Star";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { productsService } from "../../../services/products.service";
import { setReviews } from "../../../store/store/products.actions";
import { useState } from "react";
import { useAddNewReview } from "../hooks/useAddNewReview";

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

export const AddNewReview = ({
  fromValues,
  setFromValues,
  onChange,
  product,
}: AddNewReviewProps) => {
  const { onSubmit, error } = useAddNewReview({
    fromValues,
    setFromValues,
    onChange,
    product,
  });

  return (
    <form className="flex full column" onSubmit={(ev) => onSubmit(ev, product)}>
      <h3 className="products__tab__header">{`Add a review`}</h3>
      <div className="flex full column g30">
        <div className="flex column g30 add__new__review__rating">
          <Rating
            name="rating"
            value={fromValues.rating}
            precision={0.5}
            onChange={(ev, newValue) => {
              if (newValue) {
                setFromValues({ ...fromValues, rating: newValue });
              }
            }}
            emptyIcon={
              <StarIcon
                className="add__new__review__star__icon"
                fontSize="inherit"
              />
            }
          />
          <div className="add__new__review__input__with__error__container">
            <TextFieldMui
              multiline={true}
              rows={15}
              onChange={onChange}
              externalValue={fromValues.comment}
              fullWidth={true}
              name="comment"
              className="add__new__review__input text__area"
              required={true}
              placeholder="comment"
            />
            <div
              className={`add__new__review__input__error__massage ${
                error.comment ? "active" : ""
              }`}
            >
              {error.massage}
            </div>
          </div>
        </div>
        <div className="flex column g20">
          <TextFieldMui
            onChange={onChange}
            name="name"
            externalValue={fromValues.name}
            className="add__new__review__input"
            required={true}
            placeholder="name"
          />
          <div className="add__new__review__input__with__error__container">
            <TextFieldMui
              onChange={onChange}
              name="email"
              className="add__new__review__input"
              required={true}
              externalValue={fromValues.email}
              placeholder="email"
              fullWidth={true}
            />
            <div
              className={`add__new__review__input__error__massage ${
                error.email ? "active" : ""
              }`}
            >
              {error.massage}
            </div>
          </div>
          <Button
            type="submit"
            className="add__new__review__button"
            variant="contained"
          >
            <div className="flex">
              <span>Submit Review</span>
            </div>
          </Button>
        </div>
      </div>
    </form>
  );
};
