import React from "react";
import classes from "./Categories.module.css";
import Categorie from "./categorie/Categorie";
import { Link } from "react-router-dom";

const Categories = (props) => {
  return (
    <>
      <div className={classes.intro}>
        <h1>BUILD A FALL FIT</h1>
        <p>DON’T LEAVE THE HOUSE WITHOUT THE ESSENTIALS</p>
      </div>
      <div className={classes.categories}>
        <Link to="/products">
          <Categorie data={props.onTakeDummyItems} />
        </Link>
        <Link to="/products">
          <Categorie />
        </Link>
        <Link to="/products">
          <Categorie />
        </Link>
      </div>
    </>
  );
};

export default Categories;
