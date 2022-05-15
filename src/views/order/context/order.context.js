import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { LoginContext } from "../../account/context/login.context";

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {

  const {token} = useContext(LoginContext);

  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  const payOnDelivery = (deliveryFee, navigation) => {
    const inputs = {
      page: 'deliveryFee',
      delivery: deliveryFee
    }
    
    api("order", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setLoading(false);
        navigation.navigate("Order");
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getOrder = () => {
    const inputs = {
      page: 'getOrder'
    }
    
    api("order", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setLoading(false);
        setOrder(response['data'])
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  return <OrderContext.Provider value={{
    order,
    payOnDelivery,
    getOrder,
    loading
  }}>{children}</OrderContext.Provider>;
}