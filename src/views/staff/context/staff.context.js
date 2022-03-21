import React, {useState, createContext, useEffect, useMemo} from "react";

export const StaffContext = createContext();

export const StaffContextProvider = ({ children }) => {
  return <StaffContext.Provider value={{
    staffOrder: [1], staff: [1]
  }}>{children}</StaffContext.Provider>;
}