import React, { useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/categories/Categories";
import ItemsSlider from "../components/ItemsSlider/ItemsSlider";
import MainBanner from "../components/MainBanner";

import useFetch from "../hooks/use-fecth";

const HomePage = (props) => {
  const { items, error, isLoading } = useFetch(
    "http://localhost:3005/products"
  );
  const isTop = true;

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

  if (props.error) {
    content = <p>{props.error}</p>;
  }

  if (props.isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <MainBanner />
      <ItemsSlider items={items} isTop={isTop} />
      <Banner />
      <Categories />
      <ItemsSlider items={items} />
    </>
  );
};

export default HomePage;
