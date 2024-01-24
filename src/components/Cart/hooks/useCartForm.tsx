import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store/store";
import { setCart } from "../../../store/store/products.actions";
import { logisticService } from "../../../services/logistic-service.service";
import { usersService } from "../../../services/users.service";
interface cartForm {
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
  [key: string]: string;
}

interface CartFormProps {
  setSuccess: (value: boolean) => void;
  setLoading: (value: boolean) => void;
}

export const useCartForm = ({ setSuccess, setLoading }: CartFormProps) => {
  const { user } = useSelector((state: RootState) => state.productsModel);

  const [cartForm, setCartForm] = useState<cartForm>({
    firstName: user?.name.first ?? "",
    lastName: user?.name.last ?? "",
    phoneNumber: user?.phone ?? "",
    postcode: user?.location?.postcode.toString() ?? "",
    streetName: user?.location?.street?.name ?? "",
    streetNumber: user?.location?.street?.number?.toString() ?? "",
    city: user?.location?.city ?? "",
    state: user?.location?.state ?? "",
    country: user?.location?.country ?? "",
    email: user?.email ?? "",
  });

  const [error, setError] = useState({
    postcode: false,
    email: false,
    streetNumber: false,
    massage: "",
  });

  const dispatch = useDispatch();

  const onSubmit = async (ev: any) => {
    ev.preventDefault();
    if (!cartForm.email.includes("@")) {
      setError({ ...error, email: true, massage: "not a valid email" });
      setTimeout(() => {
        setError({
          postcode: false,
          email: false,
          streetNumber: false,
          massage: "",
        });
      }, 5000);
      return;
    }
    if (!/^[0-9]+$/.test(cartForm.postcode)) {
      setError({
        ...error,
        postcode: true,
        massage: "postcode need to be only numbers",
      });
      setTimeout(() => {
        setError({
          postcode: false,
          email: false,
          streetNumber: false,
          massage: "",
        });
      }, 5000);
      return;
    }
    if (
      cartForm.streetNumber !== "" &&
      !/^[0-9]+$/.test(cartForm.streetNumber)
    ) {
      setError({
        ...error,
        streetNumber: true,
        massage: "street number need to be only numbers",
      });
      setTimeout(() => {
        setError({
          postcode: false,
          email: false,
          streetNumber: false,
          massage: "",
        });
      }, 5000);
      return;
    }
    setSuccess(true);
    setLoading(true);
    dispatch(setCart([]));
    logisticService.setCart([]);
    if (user) {
      await usersService.saveUser({ ...user, cart: [] });
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  };

  const onChange = (ev: any) => {
    const { name, value } = ev.target;
    setCartForm({ ...cartForm, [name]: value });
  };

  return { onSubmit, cartForm, onChange, error };
};
