import React, { useState } from "react";
import classes from "../filter/Lable.module.css";

const Lable = (props) => {
  // const [inputChecked, setInputChecked] = useState();
  // const [inputValue, setInputValue] = useState("");

  // const onCheckLabel = (e) => {
  //   // setInputChecked(e.target.value);
  //   props.checkLable(props.label);
  //   // setInputValue(props.label);
  //   // props.onCheckBox(e.target.checked);
  // };

  return (
    <>
      <label className={classes.container} htmlFor={props.label}>
        <input
          type="radio"
          id={props.label}
          onChange={(e) => {
            props.settInputState(e.target.value);
          }}
          name={props.name}
          value={props.label}
          // checked={props.allFilters.filters[props.label]}
          onClick={props.togglecheckbox}
          // ref={ref}
        ></input>
        <span className={classes.checkmark}></span>
        <span>{props.label}</span>
      </label>
    </>
  );
};

export default Lable;
