import { TextFieldMui } from "../TextFieldMui/TextFieldMui";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import LoadingButton from "@mui/lab/LoadingButton";
import { useLogin } from "./hooks/useLogin";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../store/store/products.actions";
import { SignUP } from "../SignUP/SignUP";

export const Login = () => {
  const { error, onChange, loginForm, onSubmit, loading } = useLogin();
  const dispatch = useDispatch();

  return (
    <form className="flex column login__main__container" onSubmit={onSubmit}>
      <h1 className="login__header">Login</h1>
      {error.form && (
        <div className={`form__error ${error.form ? "active" : ""}`}>
          {error.massage}
        </div>
      )}
      <div className="login__input__container">
        <p>email</p>
        <TextFieldMui
          onChange={onChange}
          name={"email"}
          externalValue={loginForm.email}
          placeholder="Type your Email address"
          fullWidth={true}
          withIcons={true}
          icons={[<PersonIcon />]}
        />
        <div className={`input__error ${error.email ? "active" : ""}`}>
          {error.massage}
        </div>
      </div>
      <div className="login__input__container">
        <p>password</p>
        <TextFieldMui
          type="password"
          name={"password"}
          onChange={onChange}
          externalValue={loginForm.password}
          placeholder="Type your password"
          fullWidth={true}
          withIcons={true}
          icons={[<LockIcon />]}
        />
        <div className={`input__error ${error.password ? "active" : ""}`}>
          {error.massage}
        </div>
      </div>
      <LoadingButton
        className="login__button"
        type="submit"
        loading={loading}
        variant="outlined"
      >
        <span className="login__button__text">Login</span>
      </LoadingButton>
      <div className="flex align-center justify-center login__sign__up__link">
        <p>Or</p>
        <p
          onClick={() => {
            dispatch(closeModal());
            dispatch(openModal({ children: <SignUP />, open: true }));
          }}
        >
          Sign Up
        </p>
      </div>
    </form>
  );
};
