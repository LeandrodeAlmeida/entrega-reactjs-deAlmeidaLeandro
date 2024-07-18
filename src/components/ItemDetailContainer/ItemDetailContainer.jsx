import React from "react";



const ItemDetailContainer = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
};

export default ItemDetailContainer;
