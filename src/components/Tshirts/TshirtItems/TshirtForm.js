import classes from './TshirtForm.module.css';
import Input from '../../UI/Input';

const TshirtForm = (props) => {
    return (
        <form className={classes.form}>
          <Input
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
          
        </form>
      );
}

export default TshirtForm;