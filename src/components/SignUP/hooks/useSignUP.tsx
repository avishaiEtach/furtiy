import dayjs from "dayjs";
import { useState } from "react";
import { usersService } from "../../../services/users.service";
import { configs } from "../../../assets/configs";
import { useDispatch } from "react-redux";
import {
  closeModal,
  setToken,
  setUser,
} from "../../../store/store/products.actions";
import noIconUser from "../../../assets/images/no_user_icon.png";

interface SignUpForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  postcode: string;
  streetName: string;
  streetNumber: string;
  city: string;
  state: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: "male" | "female" | "";
  date: string | null;
  [key: string]: string | null;
}
interface error {
  postcode: boolean;
  streetNumber: boolean;
  email: boolean;
  confirmPassword: boolean;
  date: boolean;
  dateCheck: boolean;
  massage: string;
  [key: string]: string | boolean;
}

export const useSignUP = () => {
  const [signUpForm, setSignUpForm] = useState<SignUpForm>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    postcode: "",
    streetName: "",
    streetNumber: "",
    city: "",
    state: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    date: null,
  });
  const [error, setError] = useState<error>({
    postcode: false,
    streetNumber: false,
    email: false,
    confirmPassword: false,
    date: false,
    dateCheck: false,
    massage: "",
  });
  const [loading, setLoading] = useState(false);
  const [focusDate, setFocusDate] = useState(false);

  const dispatch = useDispatch();

  const removeEmptyValues = (obj: any, fieldsToIgnore: string[]) => {
    for (const prop in obj) {
      if (!fieldsToIgnore.includes(prop)) {
        if (typeof obj[prop] === "object" && obj[prop] !== null) {
          removeEmptyValues(obj[prop], fieldsToIgnore);
          if (
            (typeof obj[prop] === "object" &&
              Object.keys(obj[prop]).length === 0) ||
            obj[prop] === "" ||
            obj[prop] === 0
          ) {
            delete obj[prop];
          }
        } else if (
          obj[prop] === undefined ||
          obj[prop] === null ||
          obj[prop] === "" ||
          obj[prop] === 0
        ) {
          delete obj[prop];
        }
      }
    }
  };

  function calculateAge(dobString: string) {
    const dob = new Date(dobString);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob.getFullYear();
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() &&
        currentDate.getDate() < dob.getDate())
    ) {
      return age - 1;
    } else {
      return age;
    }
  }

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);

    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError({
        ...error,
        confirmPassword: true,
        massage: "passwords dont mach",
      });
      setLoading(false);
      setTimeout(
        () =>
          setError({
            postcode: false,
            streetNumber: false,
            email: false,
            confirmPassword: false,
            date: false,
            dateCheck: false,
            massage: "",
          }),
        3000
      );
      return;
    }
    if (error.dateCheck) {
      setError({ ...error, date: true, massage: "date is no valid" });
      setLoading(false);
      setTimeout(
        () =>
          setError({
            postcode: false,
            streetNumber: false,
            email: false,
            confirmPassword: false,
            date: false,
            dateCheck: false,
            massage: "",
          }),
        3000
      );
      return;
    }
    let newUser: User = {
      gender: "male",
      _id: "",
      cart: [],
      wishList: [],
      dob: {
        age: calculateAge(
          signUpForm.date
            ? dayjs(new Date(signUpForm.date)).toISOString()
            : dayjs(new Date()).toISOString()
        ),
        date: signUpForm.date
          ? dayjs(signUpForm.date).toISOString()
          : dayjs(new Date()).toISOString(),
      },
      email: signUpForm.email,
      name: {
        first: signUpForm.firstName,
        last: signUpForm.lastName,
      },
      phone: signUpForm.phoneNumber,
      login: {
        password: signUpForm.password,
      },
      picture: {
        large: noIconUser,
        medium: noIconUser,
        thumbnail: noIconUser,
      },
      location: {
        postcode: Number(signUpForm.postcode),
        city: signUpForm.city,
        country: signUpForm.country,
        state: signUpForm.state,
        street: {
          name: signUpForm.streetName,
          number: Number(signUpForm.streetNumber),
        },
      },
    };
    removeEmptyValues(newUser, ["picture", "dob", "login"]);
    try {
      const res = await usersService.crateUser(newUser);
      const user = res?.newUser;
      if (user) {
        await usersService.login({
          email: user.email,
          password: user.login.password,
        });
        dispatch(setUser());
        dispatch(setToken());
      }
    } catch (err: any) {
      if (err) {
        const inputName = err["input"];
        const errorText = err["text"];
        setError({
          ...error,
          [inputName]: true,
          massage: configs.ERROR_DICTIONARY[errorText],
        });
      }
    } finally {
      setLoading(false);
      setTimeout(
        () =>
          setError({
            postcode: false,
            streetNumber: false,
            email: false,
            confirmPassword: false,
            date: false,
            dateCheck: false,
            massage: "",
          }),
        3000
      );
      dispatch(closeModal());
    }
  };

  return {
    onSubmit,
    signUpForm,
    setSignUpForm,
    error,
    setError,
    loading,
    focusDate,
    setFocusDate,
  };
};
