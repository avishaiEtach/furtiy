import _ from "lodash";
import { storageService } from "./async-storage.service";
import { usersService } from "./users.service";
import { configs } from "../assets/configs";
import { productsService } from "./products.service";

export const logisticService = {
  addToWishList,
  removeFromWishList,
  getWishList,
  setWishList,
  getWishListByProdID,
  getCart,
  setCart,
  addToCart,
  // removeFromCart,
  getCartByProdID,
};

function addToWishList(prodId: string, user: User | undefined) {
  let wishList = getWishList();
  wishList = _.union(wishList, [prodId]);
  if (user) {
    wishList = _.union(wishList, user.wishList);
    usersService.saveUser({ ...user, wishList: [...wishList] });
  }
  localStorage.setItem(configs.WISH_LIST_KEY, JSON.stringify(wishList));
  return wishList;
}

function removeFromWishList(prodId: string, user: User | undefined) {
  let wishList = getWishList();
  wishList = _.without(wishList, prodId);
  if (user) {
    wishList = _.without(wishList, user.wishList);
    usersService.saveUser({ ...user, wishList: [...wishList] });
  }
  localStorage.setItem(configs.WISH_LIST_KEY, JSON.stringify(wishList));
  return wishList;
}

async function getWishListByProdID(wishList: string[]): Promise<Product[]> {
  const products = await productsService.getProducts();
  let wishListToShow: Product[] = [];
  for (let i = 0; i < wishList.length; i++) {
    const prod = products.find((prod) => prod._id === wishList[i]);
    if (prod) {
      wishListToShow.unshift(prod);
    }
  }
  return wishListToShow;
}

function getWishList() {
  return JSON.parse(localStorage.getItem(configs.WISH_LIST_KEY) ?? "[]");
}

function setWishList(wishList: any) {
  localStorage.setItem(configs.WISH_LIST_KEY, JSON.stringify(wishList));
}

function getCart() {
  return JSON.parse(localStorage.getItem(configs.CART_KEY) ?? "[]");
}

function setCart(cart: any) {
  localStorage.setItem(configs.CART_KEY, JSON.stringify(cart));
}

function addToCart(prodId: string, quantity: number, user: User | undefined) {
  let cart = getCart();
  const index = cart.findIndex((item: any) => item.prodId === prodId);
  if (index !== -1) {
    if (cart[index].quantity !== quantity) {
      cart[index].quantity = quantity;
    }
  } else {
    cart = _.unionBy(cart, [{ prodId, quantity }], "prodId");
  }
  if (user) {
    cart = _.unionBy(cart, user.cart, "prodId");
    usersService.saveUser({ ...user, cart: [...cart] });
  }
  localStorage.setItem(configs.CART_KEY, JSON.stringify(cart));
  return cart;
}

function removeFromCart(prodId: string, user: User | undefined) {
  let cart = getCart();
  cart = _.without(cart, { prodId });
  if (user) {
    cart = _.without(cart, user.cart);
    usersService.saveUser({ ...user, cart: [...cart] });
  }
  localStorage.setItem(configs.CART_KEY, JSON.stringify(cart));
  return cart;
}

async function getCartByProdID(
  cart: any[]
): Promise<{ prod: Product; quantity: number }[]> {
  const products = await productsService.getProducts();
  let cartToShow: { prod: Product; quantity: number }[] = [];
  for (let i = 0; i < cart.length; i++) {
    const prod = products.find((prod) => prod._id === cart[i].prodId);
    if (prod) {
      cartToShow.unshift({ prod: prod, quantity: cart[i].quantity });
    }
  }
  return cartToShow;
}
