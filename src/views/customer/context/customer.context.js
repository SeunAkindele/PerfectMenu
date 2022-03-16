import React, {useState, createContext, useEffect, useMemo} from "react";

export const CustomerContext = createContext();

export const CustomerContextProvider = ({ children }) => {
  return <CustomerContext.Provider value={{
    customer: [1], customerOrder: [1],
  }}>{children}</CustomerContext.Provider>;
}