import React, { useState } from "react";
import "./Categorie.module.css";
import classes from "./Categorie.module.css";
import categorieImage from "../../../assets/images/3.webp";

const Categorie = (props) => {
  return (
    <div className={classes.categorie} onClick={props.onClickCategorie}>
      <img src={categorieImage} alt="categorie" />
    </div>
  );
};

export default Categorie;
