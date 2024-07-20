import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const qtyProducts= 10

  return (
    <CartContext.Provider value={{qtyProducts}}>
      {children}
    </CartContext.Provider>
  );
};