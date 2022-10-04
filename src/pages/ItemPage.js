import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/use-fecth";

const ItemPage = (props) => {
  const params = useParams();
  // const {} = useFetch()

  return <div>{params.itemId}</div>;
};

export default ItemPage;
