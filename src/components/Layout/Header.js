import { Fragment } from "react";

import classes from "./Header.module.css";
import Navigation from "./Navigation";
import CategoriesBar from "../categories/CategoriesBar";

const Header = (props) => {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.logo}>
          <h2>StoreName</h2>
        </div>
        {props.isLoggedIn && (
          <>
            <CategoriesBar />
            <Navigation
              showCart={props.onShowCart}
              onShownav={props.isLoggedIn}
              onLogoutNav={props.onLogout}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
