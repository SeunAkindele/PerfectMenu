import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { LoginContext } from "../../account/context/login.context";

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  const { token } = useContext(LoginContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  
  return <ItemContext.Provider value={{
    getItems: () => {
      const inputs = {
        page: 'getItems'
      }
      
      setLoading(true);
      api("item", {request: inputs}, token, response => {
        if(response['success'] === true) {
          setData(response['data']);
          setLoading(false);
        } else {
          alert(response['data'])
          setLoading(false);
        }
      });
    },
    data,
    loading
  }}>{children}</ItemContext.Provider>;
}