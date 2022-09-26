import React, { useEffect } from "react";
import classes from "./SideBar.module.css";
import Filter from "./filter/Filter";
import { useState, useRef, useCallback } from "react";

const SideBar = (props) => {
  // const [checkBoxState, setCheckBoxState] = useState();
  // const genderRef = useRef("");
  // const priceRef = useRef("");
  // const brandRef = useRef("");
  // const stockRef = useRef("");

  // console.log(genderRef.current.id);
  // console.log(priceRef.current.id);
  // console.log(brandRef.current.id);
  // console.log(stockRef.current.id);

  const onCheckBox = (data) => {};
  // const onCheckBoxState = (value) => {
  //   setCheckBoxState(value);
  // };

  // const filter = {
  //   gender: genderValue,
  //   price: priceValue,
  //   brand: brandValue,
  //   stock: stockValue,
  // };

  return (
    <div
      className={classes.sideBar}
      style={{
        transform: props.showSideBar ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <Filter
        labels={["all", "men", "women", "kids"]}
        onPassData={onCheckBox}
        setter={props.setGenderValue}
        name="gender"
        // ref={genderRef}
        // passCheckBoxState={onCheckBoxState}
      />
      <Filter
        labels={["$25 - $50", "$50 - $100", "$100 - $150"]}
        onPassData={onCheckBox}
        setter={props.setPriceValue}
        name="price"
        // ref={priceRef}

        // passCheckBoxState={onCheckBoxState}
      />
      <Filter
        labels={[
          "adidas",
          "nike",
          "converse",
          "Reebok",
          "Vans",
          "Puma",
          "New Balance",
          "Jordan Brand",
          "Yeezy",
          "Saucony",
          "Veja",
          "Salomon",
        ]}
        onPassData={onCheckBox}
        setter={props.setBrandValue}
        name="brand"
        // ref={brandRef}

        // passCheckBoxState={onCheckBoxState}
      />
      <Filter
        labels={["in stock", "out of stock"]}
        onPassData={onCheckBox}
        setter={props.setStockValue}
        name="stock"
        // ref={stockRef}

        // passCheckBoxState={onCheckBoxState}
      />
    </div>
  );
};

export default SideBar;
