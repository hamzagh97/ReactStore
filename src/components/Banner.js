import { useState } from "react";
import classes from "./Banner.module.css";
import banner from "../assets/images/banner.webp";

const Banner = () => {
  return (
    <section className={classes.banner}>
      <img src={banner} alt="banner" />
      <div className={classes.lead}>
        <h2>CROWD-PLEASING KICKS</h2>
        <p>SHOP SHOES OF ALL KIND</p>
        <button>shop women</button>
        <button>shop men</button>
        <button>shop kids</button>
      </div>
    </section>
  );
};

export default Banner;
