import React, {useState, useContext, createContext} from "react";
import { LoginContext } from "../../account/context/login.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const {token} = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  const addToCart = () => {
    const inputs = {
      page: 'addToCart'
    }

    setLoading(true);
    api("cart", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setCart(response['data']['cart']);
        setCartNum(response['data']['count'])
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
    loading,
    cartNum
  }}>{children}</CartContext.Provider>;
}