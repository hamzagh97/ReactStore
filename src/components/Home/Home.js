import React, { useState } from "react";
import classes from "./Home.module.css";
import Banner from "../ItemsSlider/Banner";
import Categories from "../categories/Categories";
import ItemsSlider from "../ItemsSlider/ItemsSlider";
import homeImage from "../../assets/main.webp";
import banner5 from "../../assets/images/5.webp";
import banner6 from "../../assets/images/6.webp";
import banner7 from "../../assets/images/7.webp";
import useFetch from "../../hooks/use-fecth";

const Home = (props) => {
  const { items, error, isLoading } = useFetch(
    "http://localhost:3005/products"
  );
  const backgrounds = [homeImage, banner5, banner6, banner7];
  const [isTop, setIsTop] = useState(true);

  const [index, setIndex] = useState(0);

  setTimeout(() => {
    setIndex(index + 1);
    if (index === backgrounds.length - 1) {
      setIndex(0);
    }
  }, 1000);

  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchItemsHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(`http://localhost:3005/products`);
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }

  //     const datas = await response.json();
  //     console.log(datas);
  //     const transformedItems = datas.map((data) => {
  //       return {
  //         id: data.id,
  //         title: data.title,
  //         price: data.price,
  //         description: data.description,
  //         image: data.image,
  //       };
  //     });
  //     setItems(transformedItems);
  //     console.log(transformedItems);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchItemsHandler();
  // }, [fetchItemsHandler]);

  let content = <p>Found no product.</p>;

  if (items.length > 0) {
    content = <ItemsSlider />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <main>
      <div className={classes["main-banner"]}>
        <div className={classes.overlay}>
          <div className={classes.lead}>
            <h1>WORK UP A SWEAT</h1>
            <p>GEAR FOR GETTING OUTSIDE</p>
          </div>
        </div>
        <img src={backgrounds[index]} alt="" />
      </div>
      <ItemsSlider topSlider={isTop} />
      <Banner />
      <Categories onCategorieClick={props.onCategorieClick} />
      <ItemsSlider items={items} />
    </main>
  );
};

export default Home;
