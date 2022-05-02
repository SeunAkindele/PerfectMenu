import React, {useState, createContext, useEffect, useMemo} from "react";
import { api } from "../../../api/api";

export const ItemManagementContext = createContext();

export const ItemManagementContextProvider = ({ children }) => {

  return <ItemManagementContext.Provider value={{
    onCreateItem: (token, navigation) => {
      const inputs = {
        page: 'createItem'
      }

      api("item", {request: inputs}, token, response => {
        console.log(response);
        navigation.goBack();
      });
    },
    
  }}>{children}</ItemManagementContext.Provider>;
}