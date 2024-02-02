import classes from "./TshirtQuantity.module.css";

const TshirtQuantity = (props) => {
  const small = `Small (${props.small})`;
  const medium = `Medium (${props.medium})`;
  const large = `Large (${props.large})`;
  return (
    <div className={classes.quantity}>
      <span> {small}</span>
      <span>{medium}</span>
      <span>{large}</span>
    </div>
  );
};

export default TshirtQuantity;
