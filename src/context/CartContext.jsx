import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  }

  const removeFromCart = () => {
    setCart(cart > 0 ? cart - 1 : 0); 
  }
  
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};