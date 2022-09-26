import React from "react";
import TopBar from "../components/products/TopBar";
import Products from "../components/products/Products";
import { useState, useEffect, useCallback } from "react";
import SideBar from "../components/products/SideBar";

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
      // price: priceValue,
      title: brandValue,
      // stock: stockValue,
    });
  }, [genderValue, brandValue]);

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
        items={props.items}
        toggleSideBar={handleToggleSideBar}
        showSideBar={showSideBar}
      />
      <SideBar
        onShowSideBar={showSideBar}
        showSideBar={showSideBar}
        passFilteredValue={onPassFilteredValue}
        takefIlter={filterData}
        setGenderValue={setGenderValue}
        setPriceValue={setPriceValue}
        setBrandValue={setBrandValue}
        setStockValue={setStockValue}
      />
      <Products
        items={props.items}
        onShowSideBar={showSideBar}
        filterValue={filterValue}
        value={allFilters}
      />
    </>
  );
};

export default ProductsPage;
