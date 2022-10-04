import React, { useState } from "react";
import classes from "./TopBar.module.css";
import SearchIcon from "../search/SearchIcon";
import SearchedItem from "./SearchedItem";
import useFetch from "../../hooks/use-fecth";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  const { items, error, isLoading } = useFetch(
    `http://localhost:3005/products`
  );
  console.log(items);
  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    setSearchValue(e.target.value);
  };
  const searchedItems = items.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  // const vvv = searchValue.toLowerCase().split("");

  // let sss = [];

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

        <span onClick={props.toggleSideBar}>
          {props.showSideBar ? "hide" : "show"} filters
        </span>
        <span>sort by</span>
      </div>

      {searchValue.length > 0 && (
        <>
          <div className={classes.overlay}></div>
          <div className={classes.searchResult}>
            <ul>
              {searchedItems.map((item, i) => (
                <Link to={`/item-details/${item.id}`}>
                  <SearchedItem
                    id={item.id}
                    key={i}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    gender={item.gender}
                  />
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default TopBar;
