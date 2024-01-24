import { AppFooter } from "./components/AppFooter/AppFooter";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Route, Routes } from "react-router-dom";
import { banRoute, routes, routesPath } from "./routes";
import { Open } from "./components/Open";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSnackbar,
  setCart,
  setToken,
  setUser,
  setWishList,
  // setWishList,
} from "./store/store/products.actions";
import { RootState } from "./store/store/store";
import { Alert, Snackbar } from "@mui/material";
import { ModalMui } from "./components/ModalMui/ModalMui";
import { SnackbarMui } from "./components/SnackbarMui/SnackbarMui";
import { logisticService } from "./services/logistic-service.service";
import _ from "lodash";
import { usersService } from "./services/users.service";
import { DrawerMui } from "./components/DrawerMui/DrawerMui";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

export function App() {
  const { isToken, user, wishList, cart } = useSelector(
    (state: RootState) => state.productsModel
  );
  const dispatch = useDispatch();

  const filterRoutes = routes.filter((route) => !banRoute.includes(route.path));

  const [routesToDisplay, setRoutesToDisplay] =
    useState<Routes[]>(filterRoutes);

  useEffect(() => {
    dispatch(setToken());
    dispatch(setUser());
  }, []);

  useEffect(() => {
    if (!isToken) {
      const filterRoutes = routesToDisplay.filter(
        (route) => !banRoute.includes(route.path)
      );
      setRoutesToDisplay([...filterRoutes]);
    } else {
      setRoutesToDisplay([...routes]);
    }
  }, [isToken]);

  useEffect(() => {
    const unionWithList = _.union(wishList, user?.wishList ?? []);
    const unionCart = _.unionBy(cart, user?.cart ?? [], "prodId");
    if (user) {
      if (!wishList.length) {
        logisticService.setWishList(unionWithList);
      }
      dispatch(setWishList(unionWithList));
      if (!cart.length) {
        logisticService.setCart(unionCart);
      }
      dispatch(setCart(unionCart));
      usersService.saveUser({
        ...user,
        wishList: [...unionWithList],
        cart: [...unionCart],
      });
    }
  }, [user]);

  return (
    <>
      <Open />
      <ScrollToTop />
      {/* <AppHeader /> */}
      <main>
        <Routes>
          {routesToDisplay.map((route) => (
            <Route
              key={route.path}
              Component={route.component}
              path={route.path}
            />
          ))}
          <Route path="*" Component={() => <div>404</div>} />
        </Routes>
      </main>
      {/* <AppFooter /> */}
      <SnackbarMui />
      <ModalMui />
      <DrawerMui />
    </>
  );
}
