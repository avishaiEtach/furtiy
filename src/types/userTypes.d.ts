import { MyCustomGlobal } from "./classes";

declare global {
  interface User {
    gender: "female" | "male";
    name: {
      first: string;
      last: string;
    };
    location: {
      street?: {
        number?: number;
        name?: string;
      };
      city?: string;
      state?: string;
      country?: string;
      postcode: number;
    };
    email: string;
    login: {
      password: string;
    };
    dob: {
      date: string;
      age: number;
    };
    phone: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    _id: string;
    wishList: string[];
    cart: { prodId: string; quantity: number }[];
  }
}
