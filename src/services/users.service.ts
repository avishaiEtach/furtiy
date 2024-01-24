import { configs } from "../assets/configs";
import { hasNonEmptyValues } from "../assets/util";
import { storageService } from "./async-storage.service";
import { AES, enc } from "crypto-js";
import _ from "lodash";
import { productsService } from "./products.service";
import dayjs from "dayjs";

export const usersService = {
  getUserToken,
  login,
  getUserByToken,
  saveUser,
  DeleteUser,
  logout,
  getUserReviews,
  crateUser,
};

function getUserToken(): string | null {
  const userToken = localStorage.getItem("userToken");
  return userToken;
}

async function getUserByToken(token: string): Promise<User | undefined> {
  let bytes;
  try {
    bytes = AES.decrypt(token, configs.ENCRYPT_KEY);
    const decryptedId = bytes.toString(enc.Utf8);
    const users: User[] = await storageService.get("users");
    return users.find((user) => user._id === decryptedId);
  } catch (err) {
    console.log("UNABLE TO DECIPHER", err);
    return undefined;
  }
}

async function saveUserToken(userId: string) {
  const encryptToken = AES.encrypt(userId, configs.ENCRYPT_KEY).toString();
  localStorage.setItem("userToken", encryptToken);
  return encryptToken;
}

async function _removeUserToken() {
  localStorage.removeItem("userToken");
}

async function login(loginForm: {
  email: string;
  password: string;
}): Promise<User | undefined> {
  if (loginForm.email === "" && loginForm.password === "") {
    throw "USER.FORM";
  }
  if (!loginForm.email.includes("@")) {
    throw "USER.EMAIL.VALID";
  }
  const users: User[] = await storageService.get("users");
  const user = users.find((user) => user.email === loginForm.email);
  if (user) {
    if (user?.login?.password === loginForm.password) {
      await saveUserToken(user._id);
    } else {
      throw "USER.PASSWORD";
    }
  } else {
    throw "USER.EMAIL";
  }
  return user;
}

async function logout(): Promise<{ text: string } | undefined> {
  await _removeUserToken();
  return { text: "USER.LOGOUT.SUCCESS" };
}

async function saveUser(
  user: User
): Promise<{ newUser: User; text: string } | undefined> {
  if (
    !hasNonEmptyValues(user, [
      "city",
      "country",
      "state",
      "number",
      "name",
      "large",
      "medium",
      "thumbnail",
    ])
  ) {
    throw "USER.EDIT.FAIL";
  }
  const newUser = await storageService.put("users", user);
  return { newUser, text: "USER.EDIT.SUCCESS" };
}

async function crateUser(
  user: User
): Promise<{ newUser: User; text: string } | undefined> {
  if (isNaN(user.location.postcode)) {
    throw { text: "USER.POSTCODE.NUMBER.FAILED", input: "postcode" };
  }
  if (
    user.location.street?.number !== undefined &&
    isNaN(user.location.street?.number)
  ) {
    throw { text: "USER.STREET.NUMBER.FAILED", input: "streetNumber" };
  }
  if (!user.email.includes("@")) {
    throw { text: "USER.EMAIL.VALID", input: "email" };
  }
  const users: User[] = await storageService.get("users");
  const userWithSameEmail = users.find(
    (userToCheck) => userToCheck.email === user.email
  );
  if (userWithSameEmail) {
    throw { text: "USER.WITH.SAME.EMAIL.FAILED", input: "email" };
  }
  const newUser = await storageService.post("users", user);
  return { newUser, text: "USER.CRATE.SUCCESS" };
}

async function DeleteUser(
  userId: string
): Promise<{ text: string } | undefined> {
  await storageService.remove("users", userId);
  await _removeUserToken();
  return { text: "USER.DELETE.SUCCESS" };
}

async function getUserReviews(userId: string): Promise<any[]> {
  const prods = await productsService.getProducts();
  return prods.reduce((acc: any[], prod: Product) => {
    prod.reviews.forEach((review) => {
      if (review.userId && review.userId === userId) {
        acc.push({ ...review, prodName: prod.name, prodId: prod._id });
      }
    });
    return acc;
  }, []);
}
