import React from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = ({ product }) => {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const {quantity, setQuantity} = React.useState(0);

  const handleAdd = () =>{
    setQuantity(quantity + 1);
    addToCart();
  }
  const handleRemove = () =>{
    setQuantity(quantity - 1);
    removeFromCart();
  }
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
      <div style={{display: 'flex', alignItems: 'center'}}>
        <button onClick={handleRemove}>-</button>
        <span style={{margin: "0 10px"}}>{quantity}</span>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
