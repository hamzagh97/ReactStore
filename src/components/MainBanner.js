import React from "react";
import classes from "./MainBanner.module.css";
import homeImage from "../assets/main.webp";
import banner5 from "../assets/images/5.webp";
import banner6 from "../assets/images/6.webp";
import banner7 from "../assets/images/7.webp";
import { useState } from "react";

const MainBanner = () => {
  const backgrounds = [homeImage, banner5, banner6, banner7];
  const [index, setIndex] = useState(0);

  setTimeout(() => {
    setIndex(index + 1);
    if (index === backgrounds.length - 1) {
      setIndex(0);
    }
  }, 1000);

  return (
    <div className={classes["main-banner"]}>
      <div className={classes.overlay}>
        <div className={classes.lead}>
          <h1>WORK UP A SWEAT</h1>
          <p>GEAR FOR GETTING OUTSIDE</p>
        </div>
      </div>
      <img src={backgrounds[index]} alt="" />
    </div>
  );
};

export default MainBanner;
