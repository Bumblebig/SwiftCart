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
  const [isCheckoutVisible, setCheckoutVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartVisibility((prev) => !prev);
  };

  const toggleCheckout = () => {
    setCheckoutVisibility((prev) => !prev);
  };

  const closeCart = () => {
    setCartVisibility(false);
  };

  const closeCheckout = () => {
    setCheckoutVisibility(false);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        isCartVisible,
        isCheckoutVisible,
        toggleCart,
        toggleCheckout,
        closeCart,
        closeCheckout,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
