import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const {token} = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [menuBackUp, setMenuBackUp] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  const getMenu = () => {
    const inputs = {
      page: 'getItems'
    }

    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(strlen(response['data']) > 0){
          setMenu(response['data'])
          setMenuBackUp(response['data']);
        } else {
          setMenu(null);
        }
      } else {
        alert(response['data'])
      }
    });
  }

  const getCartNum = () => {
    const inputs = {
      page: 'getCartNum'
    }

    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setCartNum(response['data'])
      } else {
        alert(response['data'])
      }
    });
  }

  return <MenuContext.Provider value={{
    getMenu,
    menu,
    menuBackUp,
    setMenu,
    loading,
    setLoading,
    getCartNum,
    cartNum
  }}>{children}</MenuContext.Provider>;
}