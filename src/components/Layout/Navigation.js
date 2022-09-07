import React, { Fragment } from "react";

import classes from "./Navigation.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Navigation = (props) => {
  return (
    <ul className={classes.nav}>
      {props.onShownav && (
        <Fragment>
          <li>
            <HeaderCartButton showCart={props.showCart} />
          </li>
        </Fragment>
      )}

      {props.onShownav && (
        <li>
          <a onClick={props.onLogoutNav}>Logout</a>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
