import { Button, InputAdornment, InputLabel, Typography } from "@mui/material";
import { TextFieldMui } from "../../TextFieldMui/TextFieldMui";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { useCartForm } from "../hooks/useCartForm";

interface CartFormProps {
  setSuccess: (value: boolean) => void;
  setLoading: (value: boolean) => void;
}

export const CartForm = ({ setSuccess, setLoading }: CartFormProps) => {
  const { onSubmit, cartForm, onChange, error } = useCartForm({
    setSuccess,
    setLoading,
  });

  return (
    <form
      className="flex column g20 cart__form__main__container"
      onSubmit={onSubmit}
    >
      <div className="flex g20">
        <TextFieldMui
          externalValue={cartForm.firstName}
          name="firstName"
          onChange={onChange}
          required={true}
          placeholder="first name"
        />

        <TextFieldMui
          externalValue={cartForm.lastName}
          name="lastName"
          onChange={onChange}
          required={true}
          placeholder="last name"
        />
      </div>
      <div className="cart__form__input__with__error__container">
        <TextFieldMui
          externalValue={cartForm.email}
          fullWidth={true}
          name="email"
          onChange={onChange}
          required={true}
          placeholder="email"
        />
        <div
          className={`cart__form__error__massage ${
            error.email ? "active" : ""
          }`}
        >
          {error.massage}
        </div>
      </div>
      <div className="flex g20">
        <TextFieldMui
          externalValue={cartForm.phoneNumber}
          name="phoneNumber"
          onChange={onChange}
          required={true}
          placeholder="phone number"
        />
        <div className="cart__form__input__with__error__container number">
          <TextFieldMui
            externalValue={cartForm.postcode}
            name="postcode"
            onChange={onChange}
            required={true}
            placeholder="postcode"
          />
          <div
            className={`cart__form__error__massage ${
              error.postcode ? "active" : ""
            }`}
          >
            {error.massage}
          </div>
        </div>
      </div>
      <div className="flex g20">
        <TextFieldMui
          externalValue={cartForm.streetName}
          name="streetName"
          onChange={onChange}
          placeholder="street name"
        />
        <div className="cart__form__input__with__error__container number">
          <TextFieldMui
            externalValue={cartForm.streetNumber}
            name="streetNumber"
            onChange={onChange}
            placeholder="street number"
          />
          <div
            className={`cart__form__error__massage ${
              error.streetNumber ? "active" : ""
            }`}
          >
            {error.massage}
          </div>
        </div>
      </div>
      <TextFieldMui
        externalValue={cartForm.city}
        name="city"
        onChange={onChange}
        placeholder="city"
      />
      <TextFieldMui
        externalValue={cartForm.state}
        name="state"
        onChange={onChange}
        placeholder="state"
      />
      <TextFieldMui
        externalValue={cartForm.country}
        name="country"
        onChange={onChange}
        placeholder="country"
      />
      <Button
        className="cart__form__send__order__button"
        type="submit"
        variant="contained"
      >
        Complete Order
      </Button>
    </form>
  );
};
