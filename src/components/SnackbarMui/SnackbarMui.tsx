import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store/store";
import { closeSnackbar } from "../../store/store/products.actions";

import "./SnackbarMui.scss";

export const SnackbarMui = () => {
  const { snackbar } = useSelector((state: RootState) => state.productsModel);
  const dispatch = useDispatch();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={snackbar.open}
      autoHideDuration={5000}
      onClose={() => {
        dispatch(closeSnackbar());
      }}
      className="snackbar__main__container"
    >
      <Alert
        variant="filled"
        onClose={() => {
          dispatch(closeSnackbar());
        }}
        severity={snackbar.severity}
        className="snackbar__alert"
      >
        {snackbar.massage}
      </Alert>
    </Snackbar>
  );
};
