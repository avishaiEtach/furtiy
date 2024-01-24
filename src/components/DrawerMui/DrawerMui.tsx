import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store/store";
import { closeDrawer } from "../../store/store/products.actions";
import "./DrawerMui.scss";

export const DrawerMui = () => {
  const { drawer } = useSelector((state: RootState) => state.productsModel);
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor={"left"}
      open={drawer.open}
      onClose={() => {
        dispatch(closeDrawer());
      }}
    >
      <Box className="drawer__box">{drawer.children}</Box>
    </Drawer>
  );
};
