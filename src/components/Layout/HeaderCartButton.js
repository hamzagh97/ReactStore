import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../UI/store/Cart-Context";

const HeaderCartButton = (props) => {
  const context = useContext(CartContext);
  const totalAmount = context.AddedCartItem.reduce((currItem, nextItem) => {
    return currItem + nextItem.amount;
  }, 0);

  const [ishighlighted, setIshighlighted] = useState(false);

  const btnClasses = `${classes.button} ${ishighlighted ? classes.bump : ""} `;

  useEffect(() => {
    if (totalAmount === 0) {
      return;
    }
    setIshighlighted(true);

    const timer = setTimeout(() => {
      setIshighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalAmount]);

  return (
    <button className={btnClasses} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes["your-cart"]}>Your Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
