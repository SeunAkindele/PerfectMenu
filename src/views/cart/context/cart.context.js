import React, {useState, useContext, createContext} from "react";
import { api } from "../../../api/api";
import { LoginContext } from "../../account/context/login.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const {token} = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (itemId, navigation) => {
    const inputs = {
      page: 'addToCart',
      itemId: itemId
    }
    
    setLoading(true);
    api("cart", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setLoading(false);
        navigation.goBack();
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getCart = (itemId) => {
    const inputs = {
      page: 'getCart'
    }
    
    setLoading(true);
    api("cart", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setCart(response['data']);
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  return <CartContext.Provider value={{
    addToCart,
    cart,
    getCart,
    loading,
    setLoading
  }}>{children}</CartContext.Provider>;
}