import { AlertColor } from "@mui/material";
import { productsService } from "../../services/products.service";
import { usersService } from "../../services/users.service";
import { logisticService } from "../../services/logistic-service.service";

export function setToken(): any {
  return async (dispatch: any) => {
    const token = usersService.getUserToken();
    const isToken = token ? true : false;
    dispatch({ type: "SET_TOKEN", isToken });
  };
}

export function setUser(): any {
  return async (dispatch: any) => {
    const token = usersService.getUserToken();
    let user: User | undefined = undefined;
    if (token) {
      user = await usersService.getUserByToken(token);
    }
    dispatch({ type: "SET_USER", user });
  };
}

export function openSnackbar(snackbar: {
  open: boolean;
  massage: string;
  severity: AlertColor;
}): any {
  return async (dispatch: any) => {
    dispatch({ type: "OPEN_SNACKBAR", snackbar });
  };
}

export function closeSnackbar(): any {
  return async (dispatch: any) => {
    dispatch({
      type: "CLOSE_SNACKBAR",
      snackbar: {
        open: false,
        massage: "",
        severity: "success",
      },
    });
  };
}

export function openModal(modal: {
  open: boolean;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}): any {
  return async (dispatch: any) => {
    dispatch({ type: "OPEN_MODAL", modal });
  };
}

export function closeModal(): any {
  return async (dispatch: any) => {
    dispatch({
      type: "CLOSE_MODAL",
      modal: {
        open: false,
        children: null,
      },
    });
  };
}

export function openDrawer(drawer: {
  open: boolean;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}): any {
  return async (dispatch: any) => {
    dispatch({ type: "OPEN_DRAWER", drawer });
  };
}

export function closeDrawer(): any {
  return async (dispatch: any) => {
    dispatch({
      type: "CLOSE_DRAWER",
      drawer: {
        open: false,
        children: [],
      },
    });
  };
}

export function setWishList(wishList: any): any {
  return async (dispatch: any) => {
    dispatch({
      type: "SET_WISHLIST",
      wishList,
    });
  };
}

export function setCart(cart: any): any {
  return async (dispatch: any) => {
    dispatch({
      type: "SET_CART",
      cart,
    });
  };
}

export function setReviews(reviews: any): any {
  return async (dispatch: any) => {
    dispatch({
      type: "SET_REVIEWS",
      reviews,
    });
  };
}
