import React from "react";
import { CartContext } from "../../context/CartContext";
import './ItemDetailContainer.css'; 

const ItemDetailContainer = ({ product }) => {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const handleAdd = () =>{
    setQuantity(quantity + 1);
    addToCart();
  }
  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart();
    }
  }

  return (
    <div className="item-detail-container">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
      <div className="quantity-controls">
        <button onClick={handleRemove}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;