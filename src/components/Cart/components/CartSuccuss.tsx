import { Button, Fab } from "@mui/material";
import { Hourglass } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/store/products.actions";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";

export const CartSuccuss = ({ loading }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="flex full column justify-center align-center cart__succuss__main__container">
      <Fab
        className={`cart__succuss__fab ${
          loading ? "blue__background__color" : "green__background__color"
        }`}
        aria-label="save"
        color={"primary"}
      >
        {loading ? (
          <Hourglass
            visible={true}
            height="40%"
            width="40%"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass="hourglass"
            colors={["white", "#72a1ed"]}
          />
        ) : (
          <CheckIcon className="cart__succuss__fab__icon" />
        )}
      </Fab>
      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex column justify-center align-center"
        >
          <p className="cart__succuss__header">
            Thank You for Your <span className="green__text"> Fruity </span>
            Purchase!
          </p>
          <p className="cart__succuss__paragraph">
            Thank you for choosing our website! Your recent purchase is greatly
            appreciated. Your products will be on their way and should arrive
            within 1-3 business days. We look forward to serving you again!
          </p>
          <Button
            onClick={async () => {
              dispatch(closeModal());
            }}
            variant="contained"
            className="cart__succuss__button"
          >
            Close
          </Button>
        </motion.div>
      )}
    </div>
  );
};
