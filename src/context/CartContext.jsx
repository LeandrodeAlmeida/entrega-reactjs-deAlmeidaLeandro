import React from 'react'

export CartContext = React.createContext()

const CartProvider = ({children}) => {
  
  const [cart, setCart] = React.useEffect([])
    return (
    <CartContext.Provider value={{ cart }}> {children} </CartContext.Provider>
  )
}

