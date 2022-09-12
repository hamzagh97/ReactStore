import React from "react";
import classes from "../filter/Lable.module.css";

const Lable = (props) => {
  return (
    <>
      <label className={classes.container} htmlFor={props.label}>
        <input type="checkbox" id={props.label}></input>
        <span className={classes.checkmark}></span>
        <span>{props.label}</span>
      </label>
    </>
  );
};

export default Lable;
