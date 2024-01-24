import { storageService } from "../services/async-storage.service";
import { products } from "../assets/data/products";
import { useEffect } from "react";
import { users } from "../assets/data/users";
export const Open = () => {
  useEffect(() => {
    const func = async () => {
      const isItems = await storageService.get("products");
      const isUsers = await storageService.get("users");
      const userToken = localStorage.getItem("userToken");
      if (!isItems.length) {
        await storageService.postMany("products", products);
      }
      if (!isUsers.length) {
        await storageService.postMany("users", users);
      }
    };
    func();
  }, []);
  return <></>;
};
