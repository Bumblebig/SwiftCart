// SharedStateComponent.js
import React, { useState, createContext, useContext } from "react";

const SharedNavStateContext = createContext();

export const useSharedNavState = () => {
  const context = useContext(SharedNavStateContext);
  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }
  return context;
};

export const SharedNavStateProvider = ({ children }) => {
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisibility((prev) => !prev);
  };

  return (
    <SharedNavStateContext.Provider
      value={{ isMobileNavVisible, toggleMobileNav }}
    >
      {children}
    </SharedNavStateContext.Provider>
  );
};
