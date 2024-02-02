import classes from "./TshirtForm.module.css";
import Input from "../../UI/Input";
import { useState, useRef } from "react";

const TshirtForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      ></Input>
      <button>+ Add Product</button>
      {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
    </form>
  );
};

export default TshirtForm;
