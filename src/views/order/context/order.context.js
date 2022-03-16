import React, {useState, createContext, useEffect, useMemo} from "react";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  return <OrderContext.Provider value={{
    order: [1],
  }}>{children}</OrderContext.Provider>;
}