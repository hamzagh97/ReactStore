import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./ItemForm.module.css";

const ItemForm = (props) => {
  const amount = useRef();

  const formHnadle = (e) => {
    e.preventDefault();
    const enteredAmount = amount.current.value;
    props.takeAmount(+enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={formHnadle}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={amount}
      />
      <button>+ Add</button>
    </form>
  );
};

export default ItemForm;
