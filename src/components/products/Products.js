import React, { useState } from "react";
import classes from "./Products.module.css";
import Item from "../ItemsSlider/Item/Item";
import Notification from "../UI/Notifications/Notifications";
import useFetch from "../../hooks/use-fecth";

const Products = (props) => {
  // const filter {
  //   gender: {"all", "men", "women", "kids"};
  // // const filterValue = props.filterValue;
  // let items = props.items;
  // // const isProductPage = true;
  // // const [filterValue, setFilterValue] = useState("");

  // // let shownItems = [];
  // // const filteredItems = props.items.filter(
  // //   (data) => data.gender === filterValue
  // // );
  // // shownItems.unshift(...filteredItems);
  // // const sss =
  // //   filterValue === "" || filterValue === "All" ? items : filteredItems;
  // // console.log(filterValue);

  // items = items.filter((item) => {
  //   for (let key in filter) {
  //     if (item[key] === undefined || item[key] != filter[key]) return false;
  //   }
  //   return true;
  // });

  // console.log(users);

  const filter = {
    gender: "men",
    // price: "$25 - $50",
    title: "adidas",
    // stock: "in stock",
  };
  // let users = [
  //   {
  //     name: "John",
  //     email: "johnson@mail.com",
  //     age: 25,
  //     address: "USA",
  //   },
  //   {
  //     name: "Tom",
  //     email: "tom@mail.com",
  //     age: 35,
  //     address: "England",
  //   },
  //   {
  //     name: "Mark",
  //     email: "mark@mail.com",
  //     age: 28,
  //     address: "England",
  //   },
  // ];

  // console.log(filter, props.value);

  // const newArray = props.items.filter(function (item) {
  //   for (let key in props.value) {
  //     if (
  //       props.value[key] === "" ||
  //       item[key].toLowerCase() !== props.value[key].toLowerCase()
  //     ) {
  //       continue;
  //     }
  //     console.log(props.value[key]);
  //   }
  //   return true;
  // });

  // const allFilters = props.value;

  // const filteredItems = props.items
  //   .filter(
  //     (item) =>
  //       (allFilters.gender &&
  //         item.gender.toLowerCase() === allFilters.gender.toLowerCase()) ||
  //       (allFilters.gender && item.gender === allFilters.gender)
  //   )
  //   .filter(
  //     (item) =>
  //       allFilters.title &&
  //       item.title.toLowerCase() === allFilters.title.toLowerCase()
  //   );

  return (
    <>
      <div
        className={classes.products}
        style={{ width: props.onShowSideBar ? "83%" : "100%" }}
      >
        {props.items.map((item) => (
          <Item
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            gender={item.gender}
            // isProductPage={isProductPage}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
