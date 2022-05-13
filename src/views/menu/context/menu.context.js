import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const {token} = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(null);

  const getMenu = () => {
    const inputs = {
      page: 'getItems'
    }

    setLoading(true);
    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        !empty(response['data'])
        ? setMenu(response['data'])
        : setMenu([]);
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

 
  
  return <MenuContext.Provider value={{
    getMenu,
    menu,
    loading
  }}>{children}</MenuContext.Provider>;
}