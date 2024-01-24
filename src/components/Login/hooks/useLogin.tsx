import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { replaceRouteParam, routesPath } from "../../../routes";
import { usersService } from "../../../services/users.service";
import {
  closeModal,
  setToken,
  setUser,
} from "../../../store/store/products.actions";
import { configs } from "../../../assets/configs";

export const useLogin = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
    form: false,
    massage: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (ev: any) => {
    const { name, value } = ev.target;
    setLoginForm((prev) => (prev = { ...prev, [name]: value }));
  };

  useEffect(() => {
    return () => {
      setLoginForm({
        email: "",
        password: "",
      });
    };
  }, []);

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const res = await usersService.login(loginForm);
      if (res) {
        dispatch(setUser());
        dispatch(setToken());
        navigate(replaceRouteParam(routesPath.account, res._id));
        dispatch(closeModal());
        setLoading(false);
      }
    } catch (err: any) {
      handleLoginError(err);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError({
          email: false,
          password: false,
          massage: "",
          form: false,
        });
      }, 5000);
    }
  };

  const handleLoginError = (err: any) => {
    if (
      err === configs.ERROR_DICTIONARY_KEYS.userEmail ||
      err === configs.ERROR_DICTIONARY_KEYS.userValidEmail
    ) {
      setError(
        (prev) =>
          (prev = {
            ...prev,
            email: true,
            massage: configs.ERROR_DICTIONARY[err],
          })
      );
    } else if (err === configs.ERROR_DICTIONARY_KEYS.userPassword) {
      setError(
        (prev) =>
          (prev = {
            ...prev,
            password: true,
            massage: configs.ERROR_DICTIONARY[err],
          })
      );
    } else if (err === configs.ERROR_DICTIONARY_KEYS.userForm) {
      setError(
        (prev) =>
          (prev = {
            ...prev,
            form: true,
            massage: configs.ERROR_DICTIONARY[err],
          })
      );
    }
  };

  return { error, onChange, loginForm, onSubmit, loading };
};
