import React from "react";
import classes from "./SearchedItem.module.css";

const SearchedItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes["item-image"]}>
        <img src={props.image} alt="" />
      </div>
      <h3>{props.title}</h3>
      <div className={classes.summary}>
        <span className={classes.price}>{props.price}</span>
      </div>
    </li>
  );
};

export default SearchedItem;
