import classes from "./TshirtItem.module.css";
import TshirtForm from "./TshirtForm";
import TshirtQuantity from "./TshirtQuantity";

const TshirtItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₹{props.price}</div>
      </div>
      <div>
        <TshirtQuantity small={props.small} medium={props.medium} large={props.large}></TshirtQuantity>
      </div>
      <div>
        <TshirtForm></TshirtForm>
      </div>
    </li>
  );
};

export default TshirtItem;
