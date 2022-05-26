import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  const { token } = useContext(LoginContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataBackUp, setDataBackUp] = useState([]);
  const [ratings, setRatings] = useState([]);

  const getItems = () => {
    const inputs = {
      page: 'getItems'
    }
    
    setLoading(true);
    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(strlen(response['data']) > 0){
        setData(response['data']);
        setDataBackUp(response['data']);
        } else {
          setData(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const getRatings = (itemId) => {
    const inputs = {
      page: 'getRatings',
      itemId: itemId
    }

    setLoading(true);
    api("item", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          setRatings(response['data'][0]['rate']);
        } else {
          setRatings(0);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }
  
  return <ItemContext.Provider value={{
    data,
    loading,
    dataBackUp,
    setData,
    getItems,
    getRatings,
    ratings
  }}>{children}</ItemContext.Provider>;
}