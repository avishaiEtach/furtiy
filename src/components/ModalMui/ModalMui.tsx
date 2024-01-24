import { Backdrop, Box, Fade, Modal, ModalProps } from "@mui/material";
import "./ModalMui.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store/store";
import { closeModal } from "../../store/store/products.actions";

export const ModalMui = () => {
  const { modal } = useSelector((state: RootState) => state.productsModel);
  const dispatch = useDispatch();
  return (
    <Modal
      open={modal.open}
      onClose={() => {
        dispatch(closeModal());
      }}
      disableAutoFocus
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={modal.open}>
        {modal.children ? (
          <Box className={"modal__main__container"}>{modal.children}</Box>
        ) : (
          <div></div>
        )}
      </Fade>
    </Modal>
  );
};
