import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItemsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const datas = await response.json();
      const transformedItems = datas.map((data) => {
        return {
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
          image: data.image,
          gender: data.gender,
        };
      });
      setItems(transformedItems);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchItemsHandler();
  }, [fetchItemsHandler]);

  return { items, error, isLoading, setItems };
};

export default useFetch;
