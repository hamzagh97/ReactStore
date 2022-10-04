import React from "react";
import Categorie from "./categorie/Categorie";
import classes from "./CategoriesBar.module.css";
import { NavLink } from "react-router-dom";

const CategoriesBar = () => {
  return (
    <ul className={classes.categories}>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navlink
          }
          to="/home"
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navlink
          }
          to="/shop"
        >
          shop
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navlink
          }
          to="/blog"
        >
          blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navlink
          }
          to="/about"
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navlink
          }
          to="/contact"
        >
          contact
        </NavLink>
      </li>
    </ul>
  );
};

export default CategoriesBar;
