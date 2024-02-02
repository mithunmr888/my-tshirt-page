import classes from "./TshirtForm.module.css";
import Input from "../../UI/Input";
import { useState, useRef } from "react";

const TshirtForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [quantities, setQuantities] = useState({
    small: 0,
    medium: 0,
    large: 0,
  });

  const sizes = (
    <div className={classes.quantity}>
      {["small", "medium", "large"].map((size) => (
        <div className={classes.span} key={size}>
          <span>{`${size.charAt(0).toUpperCase()}${size.slice(1)} (${
            props[size]
          })`}</span>
          <div className={classes.buttonn}>
            <button onClick={() => updateQuantity(size, -1)}>-</button>
            <span>{quantities[size]}</span>
            <button onClick={() => updateQuantity(size, 1)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );

  const updateQuantity = (size, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: Math.max(prevQuantities[size] + amount, 0),
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const totalQuantity = Object.values(quantities).reduce(
      (total, quantity) => total + quantity,
      0
    );

    if (totalQuantity < 0 || totalQuantity > 8) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(totalQuantity);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {sizes}

      <button>+ Add Product</button>
      {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
    </form>
  );
};

export default TshirtForm;
