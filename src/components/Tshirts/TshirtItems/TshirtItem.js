import classes from "./TshirtItem.module.css";
import TshirtForm from "./TshirtForm";
import TshirtQuantity from "./TshirtQuantity";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const TshirtItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      small: props.small,
      medium: props.medium,
      large: props.large,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₹{props.price}</div>
      </div>
      <div>
        <TshirtQuantity
          small={props.small}
          medium={props.medium}
          large={props.large}
        ></TshirtQuantity>
      </div>
      <div>
        <TshirtForm onAddToCart={addToCartHandler}></TshirtForm>
      </div>
    </li>
  );
};

export default TshirtItem;
