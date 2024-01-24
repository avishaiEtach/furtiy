import { LoadingButton } from "@mui/lab";
import { useSignUP } from "./hooks/useSignUP";
import { useSignUpUI } from "./hooks/useSignUpUI";
import "./SignUP.scss";

export const SignUP = () => {
  const {
    onSubmit,
    signUpForm,
    setSignUpForm,
    error,
    setError,
    loading,
    focusDate,
    setFocusDate,
  } = useSignUP();

  const { getFields } = useSignUpUI({
    setSignUpForm,
    signUpForm,
    error,
    setFocusDate,
    setError,
    focusDate,
  });

  return (
    <div className="flex column sign__up__main__container">
      <h1 className="sign__up__header">Sign Up</h1>
      <form className="flex column g20" onSubmit={onSubmit}>
        {getFields()}
        <LoadingButton
          className="sign__up__button"
          loading={loading}
          type="submit"
          variant="outlined"
        >
          <span className="sign__up__button__text">Sign Up</span>
        </LoadingButton>
      </form>
    </div>
  );
};
