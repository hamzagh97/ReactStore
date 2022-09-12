import React from "react";
import classes from "../filter/filter.module.css";
import Lable from "./Lable";

const Filter = (props) => {
  const labels = props.labels;

  return (
    <div className={classes.filter}>
      <p className={classes.title}>{props.title}</p>

      <div className={classes.filterChoice}>
        {labels.map((label) => (
          <Lable label={label} key={props.key} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
