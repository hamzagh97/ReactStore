import React from "react";
import Categorie from "./categorie/Categorie";
import classes from "./CategoriesBar.module.css";
import Search from "../search/Search";

const CategoriesBar = () => {
  return (
    <ul className={classes.categories}>
      <li>
        <Search />
      </li>
      <li>Shop</li>
      <li>Men</li>
      <li>Women</li>
      <li>Kids</li>
    </ul>
  );
};

export default CategoriesBar;
