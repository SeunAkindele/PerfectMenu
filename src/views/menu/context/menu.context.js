import React, {useState, createContext, useEffect, useMemo} from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  return <MenuContext.Provider value={{
    menu: [1, 2, 3, 4, 5]
  }}>{children}</MenuContext.Provider>;
}