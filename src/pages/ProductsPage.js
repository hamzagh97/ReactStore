import React from "react";
import TopBar from "../components/products/TopBar";
import Products from "../components/products/Products";
import { useState, useEffect, useCallback } from "react";
import SideBar from "../components/products/SideBar";
import classes from "./ProductsPage.module.css";
import useFetch from "../hooks/use-fecth";

const ProductsPage = (props) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [filterValue, setFilterValue] = useState({});

  const [genderValue, setGenderValue] = useState();
  const [priceValue, setPriceValue] = useState();
  const [brandValue, setBrandValue] = useState();
  const [stockValue, setStockValue] = useState();
  const [allFilters, setAllFilters] = useState({
    gender: genderValue,
    price: priceValue,
    title: brandValue,
    stock: stockValue,
  });

  useEffect(() => {
    setAllFilters({
      gender: genderValue,
      price: priceValue,
      title: brandValue,
      stock: stockValue,
    });
  }, [genderValue, brandValue, priceValue, stockValue]);

  const gender = allFilters.gender;
  const price = allFilters.price;
  const title = allFilters.title;
  const stock = allFilters.stock;

  const { items, error, isLoading } = useFetch(
    `http://localhost:3005/products${
      gender ? `?gender=${gender}` : "" || title ? `?title=${title}` : ""
    }${title ? `&title=${title}` : ""}`
  );
  // const [allFilters, setAllFilters] = useState({
  //   textValue: "",
  //   filters: {
  //     men: false,
  //     women: false,
  //     kids: false,
  //   },
  // });

  // const togglecheckbox = () => {
  //   setAllFilters({
  //     ...allFilters,
  //     filters: {
  //       ...allFilters.filters,
  //       men: true,
  //     },
  //   });
  // };

  // console.log(...allFilters.filters);

  // const updateNestedProps = (value) => {
  //   setAllFilters({
  //     ...allFilters,
  //     textValue: value,
  //   });
  // setAllFilters((current) => {
  //   // 👇️ get copy of nested object
  //   const textValue = { ...current.textValue };
  //   textValue = e.target.value;
  //   return { ...current, textValue };
  // });
  // };

  // console.log(allFilters);

  const handleToggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const onPassFilteredValue = (value) => {
    setFilterValue(value);
  };

  const filterData = (value) => {
    return value;
  };

  return (
    <>
      <TopBar
        items={items}
        toggleSideBar={handleToggleSideBar}
        showSideBar={showSideBar}
      />
      {/* <div className={classes.mainSection}> */}
      <SideBar
        onShowSideBar={showSideBar}
        showSideBar={showSideBar}
        passFilteredValue={onPassFilteredValue}
        takefIlter={filterData}
        allFilters={allFilters}
        // handleNestedProp={updateNestedProps}
        // togglecheckbox={togglecheckbox}
        setGenderValue={setGenderValue}
        setPriceValue={setPriceValue}
        setBrandValue={setBrandValue}
        setStockValue={setStockValue}
      />
      <Products
        onShowSideBar={showSideBar}
        filterValue={filterValue}
        filters={allFilters}
        items={items}
      />
      {/* </div> */}
    </>
  );
};

export default ProductsPage;
