// SharedStateComponent.js
import React, { useState, createContext, useContext } from "react";

const SharedStateContext = createContext();

export const useSharedState = () => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }
  return context;
};

export const SharedStateProvider = ({ children }) => {
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisibility((prev) => !prev);
  };

  return (
    <SharedStateContext.Provider
      value={{ isMobileNavVisible, toggleMobileNav }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};
