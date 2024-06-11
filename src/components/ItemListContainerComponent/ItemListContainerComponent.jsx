import React from "react";
import { useProducts } from "../../hooks/useProducts";

const ItemListContainerComponent = ({ products }) => {
  const customStyle = {
    display: "flex",
    fontSize: "2rem",
    color: "red",
    justifyContent: "center",
    margin: "auto",
  };



  return <div style={customStyle}>{greeting}</div>;
};

export default ItemListContainerComponent;
