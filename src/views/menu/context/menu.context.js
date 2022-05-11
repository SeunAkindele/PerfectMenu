import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const {token} = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  const getMenu = () => {
    const inputs = {
      page: 'getItems'
    }

    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setMenu(response['data']);
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