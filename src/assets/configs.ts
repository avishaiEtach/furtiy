const SHOP_LIMIT = 9;
const PRODUCT_REVIEWS_LIMIT = 3;
const ENCRYPT_KEY = "i like react";
const WISH_LIST_KEY = "wishList";
const CART_KEY = "cart";
const ESTIMATED_TAX_VALUE = 0.17;

const ERROR_DICTIONARY: Dictionary = {
  "USER.FORM": "Please fill in all required fields.",
  "USER.PASSWORD": "Wrong password address please try again",
  "USER.EMAIL": "Wrong email address please try again",
  "USER.EMAIL.VALID": "Please enter a valid email address like ..@example.com.",
  "USER.EDIT.FAIL": "Please check again if all the fides have values in them.",
  "USER.EDIT.SUCCESS": "The user was save successfully",
  "USER.DELETE.SUCCESS": "Your user was deleted successfully",
  "USER.LOGOUT.SUCCESS": "You have been successfully logged out",
  "USER.CRATE.SUCCESS": "Your user was crate successfully",
  "USER.WITH.SAME.EMAIL.FAILED": "Your email is already sign up",
  "USER.STREET.NUMBER.FAILED":
    "Please check again if the street number is number",
  "USER.POSTCODE.NUMBER.FAILED": "Please check again if the postcode is number",
};

const ERROR_DICTIONARY_KEYS = {
  userForm: "USER.FORM",
  userPassword: "USER.PASSWORD",
  userEmail: "USER.EMAIL",
  userValidEmail: "USER.EMAIL.VALID",
  userEditFail: "USER.EDIT.FAIL",
  userEditSuccess: "USER.EDIT.SUCCESS",
  userDeleteSuccess: "USER.DELETE.SUCCESS",
  userLogoutSuccess: "USER.LOGOUT.SUCCESS",
  userCrateSuccess: "USER.CRATE.SUCCESS",
  userWithSameEmailFail: "USER.WITH.SAME.EMAIL.FAILED",
  userStreetNumberFailed: "USER.STREET.NUMBER.FAILED",
  userPostcodeNumberFailed: "USER.POSTCODE.NUMBER.FAILED",
};

export const configs = {
  SHOP_LIMIT,
  PRODUCT_REVIEWS_LIMIT,
  ENCRYPT_KEY,
  ERROR_DICTIONARY,
  ERROR_DICTIONARY_KEYS,
  WISH_LIST_KEY,
  CART_KEY,
  ESTIMATED_TAX_VALUE,
};
