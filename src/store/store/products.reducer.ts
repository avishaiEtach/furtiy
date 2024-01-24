import { AlertColor } from "@mui/material";
import { logisticService } from "../../services/logistic-service.service";

interface initialState {
  user: User | undefined;
  isToken: boolean;
  snackbar: {
    open: boolean;
    massage: string;
    severity: AlertColor;
  };
  modal: {
    open: boolean;
    children: React.ReactElement<
      any,
      string | React.JSXElementConstructor<any>
    > | null;
  };
  wishList: string[];
  cart: { prodId: string; quantity: number }[];
  drawer: {
    open: boolean;
    children: React.ReactElement<
      any,
      string | React.JSXElementConstructor<any>
    > | null;
  };
  reviews: ProductReview[];
}

const initialState: initialState = {
  user: undefined,
  isToken: false,
  snackbar: {
    open: false,
    massage: "",
    severity: "success",
  },
  modal: {
    open: false,
    children: null,
  },
  wishList: logisticService.getWishList(),
  drawer: {
    open: false,
    children: null,
  },
  cart: logisticService.getCart(),
  reviews: [],
};

export function productsReducer(state = initialState, action: any) {
  let newState = { ...initialState };
  switch (action.type) {
    case "SET_USER":
      newState = { ...state, user: action.user };
      break;
    case "SET_TOKEN":
      newState = { ...state, isToken: action.isToken };
      break;
    case "OPEN_SNACKBAR":
      newState = { ...state, snackbar: action.snackbar };
      break;
    case "CLOSE_SNACKBAR":
      newState = { ...state, snackbar: action.snackbar };
      break;
    case "OPEN_MODAL":
      newState = { ...state, modal: action.modal };
      break;
    case "CLOSE_MODAL":
      newState = { ...state, modal: action.modal };
      break;
    case "SET_WISHLIST":
      newState = { ...state, wishList: action.wishList };
      break;
    case "SET_CART":
      newState = { ...state, cart: action.cart };
      break;
    case "OPEN_DRAWER":
      newState = { ...state, drawer: action.drawer };
      break;
    case "CLOSE_DRAWER":
      newState = { ...state, drawer: action.drawer };
      break;
    case "SET_REVIEWS":
      newState = { ...state, reviews: action.reviews };
      break;
    default:
  }
  return newState;
}
