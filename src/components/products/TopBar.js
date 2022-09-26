import React, { useState } from "react";
import classes from "./TopBar.module.css";
import SearchIcon from "../search/SearchIcon";
import CartItem from "../Cart/cartItem/CartItem";
import Item from "../ItemsSlider/Item/Item";
import SearchedItem from "./SearchedItem";

const TopBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    setSearchValue(e.target.value);
  };
  let searchedItems = [];
  const vvv = searchValue.toLowerCase().split("");

  let sss = [];

  // for (let i = 0; i < props.items.length; i++) {
  //   sss.push(props.items[i].title.toLowerCase().split(""));
  //   for (let j = 0; j < sss[i].length; j++) {
  //     if (sss[i][i] === vvv[j]) {
  //       console.log(sss[i]);
  //     } else {
  //     }
  //   }
  // }

  return (
    <div className={classes.topBar}>
      <p>{props.items.length} products</p>
      <div className={classes.filtersOption}>
        <div className={classes.searchBar}>
          <input
            type="text"
            onChange={search}
            className={classes.searchInput}
            placeholder="Search"
          />
        </div>
        <span className={classes.searchIcon}>
          <div>search</div>
        </span>
        <span onClick={props.toggleSideBar}>
          {props.showSideBar ? "hide" : "show"} filters
        </span>
        <span>sort by</span>
      </div>

      <div className={classes.searchResult}>
        <ul>
          {searchedItems.map((item, i) => (
            <SearchedItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              gender={item.gender}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
