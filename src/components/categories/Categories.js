import React from "react";
import classes from "./Categories.module.css";
import Categorie from "./categorie/Categorie";

const Categories = (props) => {
  return (
    <>
      <div className={classes.intro}>
        <h1>BUILD A FALL FIT</h1>
        <p>DON’T LEAVE THE HOUSE WITHOUT THE ESSENTIALS</p>
      </div>
      <div className={classes.categories}>
        <Categorie onClickCategorie={props.onCategorieClick} />
        <Categorie onClickCategorie={props.onCategorieClick} />
        <Categorie onClickCategorie={props.onCategorieClick} />
      </div>
    </>
  );
};

export default Categories;
