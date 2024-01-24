import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Shop } from "./pages/Shop/Shop";
import { UserPage } from "./pages/UserPage/UserPage";
import { usersService } from "./services/users.service";

export const routesPath = {
  home: "/",
  aboutUs: "/about-us",
  shop: "/shop",
  blog: "/blog",
  contact: "/contact-us",
  productPage: "/shop/product-page/:id",
  account: "/account/:id",
};

export const routes: Routes[] = [
  {
    path: routesPath.home,
    component: HomePage,
    label: "Home",
    showInNavBar: true,
  },
  {
    path: routesPath.aboutUs,
    component: AboutUs,
    label: "About Us",
    showInNavBar: true,
  },
  {
    path: routesPath.shop,
    component: Shop,
    label: "Shop",
    showInNavBar: true,
  },
  {
    path: routesPath.blog,
    component: () => <></>,
    label: "Blog",
    showInNavBar: true,
  },
  {
    path: routesPath.contact,
    component: ContactUs,
    label: "Contact",
    showInNavBar: true,
  },
  {
    path: routesPath.productPage,
    component: ProductPage,
    label: "",
    showInNavBar: false,
  },
  {
    path: routesPath.account,
    component: UserPage,
    label: "",
    showInNavBar: false,
  },
];

export const banRoute = [routesPath.account];

export function replaceRouteParam(
  routePattern: string,
  replacement: string
): string {
  // Use a regular expression to replace the :id placeholder with the provided string
  const replacedRoute = routePattern.replace(/:id/g, replacement);
  return replacedRoute;
}
