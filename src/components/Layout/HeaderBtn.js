import classes from "./HeaderBtn.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderBtn = (props) => {
  return (
    <button className={classes.button} >
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderBtn;
