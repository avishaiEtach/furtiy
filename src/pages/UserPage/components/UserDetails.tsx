import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import { useUserDetailsFunction } from "../hooks/useUserDetailsFunction";
import { useUserDetailsUI } from "../hooks/useUserDetailsUI";

export const UserDetails = () => {
  const params = useUserDetailsFunction();
  const { userDetailsToShow } = useUserDetailsUI(params);
  const { disabled, loading, submit } = params;

  return (
    <div className="user__details__main__container">
      <div className="flex user__details__sub__container">
        <div>
          <div className="flex column g20">{userDetailsToShow()}</div>
          <div className="flex g20">
            <LoadingButton
              className="login__button user__details__delete__button"
              loading={params.loading.Delete}
              variant="outlined"
              onClick={(ev) => {
                params.submit(ev, "Delete");
              }}
            >
              <span className="login__button__text"> Delete User</span>
            </LoadingButton>

            <LoadingButton
              disabled={!disabled}
              className={`login__button ${!disabled ? "button-disabled" : ""}`}
              loading={loading.save}
              variant="outlined"
              onClick={(ev) => {
                submit(ev, "save");
              }}
            >
              <span className="login__button__text">Save User</span>
            </LoadingButton>
            <Button className={`login__button`}>
              <span className="login__button__text">Change password</span>
            </Button>
            <Button
              className={`login__button`}
              variant="outlined"
              onClick={(ev) => {
                submit(ev, "logout");
              }}
            >
              <span className="login__button__text">Log out</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
