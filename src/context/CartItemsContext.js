import React, { useState, createContext } from 'react';

const CartItemsContext = createContext();

const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};

export { CartItemsProvider, CartItemsContext };
