import React, {useState, createContext, useEffect, useMemo} from "react";

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  return <ItemContext.Provider value={{
    items: [1]
  }}>{children}</ItemContext.Provider>;
}