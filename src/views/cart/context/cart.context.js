import React, {useState, createContext, useEffect, useMemo} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  return <CartContext.Provider value={{
    cart: [1, 2, 3, 4, 5,6,7,8,9,10],
    total: 100000,
    qty: 10
  }}>{children}</CartContext.Provider>;
}