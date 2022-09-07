import React from "react";
import classes from "./Products.module.css";
import Item from "../ItemsSlider/Item/Item";
import ItemsSlider from "../ItemsSlider/ItemsSlider";

const DUMMY_ITEMS = [
  {
    id: "m1",
    title: "Adidas",
    description: "Forward-looking silhouettes like the Ultraboost...",
    price: 22.99,
  },
  {
    id: "m2",
    title: "Converse",
    description: "The enduring appeal of the Chuck Taylor...",
    price: 16.5,
  },
  {
    id: "m3",
    title: "Reebok",
    description:
      "Founded in Britain, based in Boston, and bought by Germany's own Adidas...",
    price: 12.99,
  },
  {
    id: "m5",
    title: "Vans",
    description: "Authentic in a way most sneakers can only pretend to be...",
    price: 18.99,
  },
  {
    id: "m6",
    title: "Puma",
    description: "A formidable selection of retro-inflected lace-ups...",
    price: 18.99,
  },
  {
    id: "m7",
    title: "Nike",
    description: "baddest name in the sneaker business...",
    price: 18.99,
  },
];

const ProductsPage = () => {
  return (
    <>
      <section className={classes.main}>
        <div className={classes.topBar}>
          <p>Serena Williams Design Crew(17)</p>
          <div className={classes.filters}>
            <span>hide filters</span>
            <span>sort by</span>
          </div>
        </div>
        <div className={classes.sideBar}>sidebar</div>
        <div className={classes.products}>
          {DUMMY_ITEMS.map((item, i) => (
            <Item
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image="./../assets/sliderimages/1.webp"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
