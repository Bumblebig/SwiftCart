// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};

export const CartContextProvider = ({ children }) => {
  const [isCartVisible, setCartVisibility] = useState(false);

  const toggleCart = () => {
    setCartVisibility((prev) => !prev);
  };

  const closeCart = () => {
    setCartVisibility(false);
  };

  return (
    <CartContext.Provider value={{ isCartVisible, toggleCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};
