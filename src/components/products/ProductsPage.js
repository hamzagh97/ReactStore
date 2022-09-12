import React, { useState } from "react";
import classes from "./ProductsPage.module.css";
import Item from "../ItemsSlider/Item/Item";
import Filter from "./filter/Filter";
import useFetch from "../../hooks/use-fecth";

const ProductsPage = () => {
  const { items, error, isLoading } = useFetch(
    "http://localhost:3005/products"
  );
  const [showSideBar, setShowSideBar] = useState(true);
  const [isProductPage, setIsProductPage] = useState(true);
  // const prodcutsRef = useRef("");

  const hideSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <section className={classes.main}>
        <div className={classes.topBar}>
          <p>Serena Williams Design Crew(17)</p>
          <div className={classes.filtersOption}>
            <span onClick={hideSideBar}>hide filters</span>
            <span>sort by</span>
          </div>
        </div>

        <div
          className={classes.sideBar}
          style={{
            transform: showSideBar ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <Filter labels={["men", "women", "kids"]} key={1} />
          <Filter labels={["$25 - $50", "$50 - $100", "$100 - $150"]} key={2} />
          <Filter labels={["adidas", "nike", "converse", "Reebok"]} key={3} />
          <Filter labels={["in stock", "out of stock"]} key={4} />
        </div>

        <div
          className={classes.products}
          style={{ width: showSideBar ? "83%" : "100%" }}
        >
          {items.map((item, i) => (
            <Item
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              isProductPage={isProductPage}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
