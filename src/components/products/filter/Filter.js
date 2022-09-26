import React from "react";
import classes from "../filter/filter.module.css";
import Lable from "./Lable";

const Filter = (props, ref) => {
  const labels = props.labels;

  const passData = (data) => {
    props.onPassData(data);
  };

  // const passCheckBoxStateHandle = (value) => {
  //   props.passCheckBoxState(value);
  // };

  return (
    <div className={classes.filter}>
      <p className={classes.title}>{props.title}</p>

      <div className={classes.filterChoice}>
        {labels.map((label, i) => (
          <Lable
            label={label}
            key={i}
            checkLable={passData}
            settInputState={props.setter}
            name={props.name}
            // ref={ref}
            // onCheckBox={passCheckBoxStateHandle}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
