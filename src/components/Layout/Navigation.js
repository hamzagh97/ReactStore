import React, { Fragment } from "react";
import classes from "./Navigation.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";

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
          <Link to="/login" onClick={props.onLogoutNav}>
            Logout
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
