import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
  const { token } = useContext(LoginContext);

  const [loading, setLoading] = useState(true);
  const [salesData, setSalesData] = useState([]);

  const getDashboard = () => {
    const inputs = {
      page: 'getDashboard'
    }
    
    api("dashboard", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          setSalesData(response['data']['salesData']);
        } 
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  return <DashboardContext.Provider value={{
    salesData,
    getDashboard,
    loading
  }}>{children}</DashboardContext.Provider>;
}