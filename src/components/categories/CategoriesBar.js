import React from "react";
import Categorie from "./categorie/Categorie";
import classes from "./CategoriesBar.module.css";
import { NavLink } from "react-router-dom";

const CategoriesBar = () => {
  return (
    <ul className={classes.categories}>
      <li>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.active}
          to="/home"
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.active}
          to="/shop"
        >
          shop
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.active}
          to="/blog"
        >
          blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.active}
          to="/about"
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes.navlink}
          activeClassName={classes.active}
          to="/contact"
        >
          contact
        </NavLink>
      </li>
    </ul>
  );
};

export default CategoriesBar;
