import React, {useState, createContext, useEffect, useMemo} from "react";
import { api } from "../../../api/api";
import { checkEmptyInput } from "../../../components/utility/functions";

export const RegisterContext = createContext();

export const RegisterContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return <RegisterContext.Provider value={{
    onRegister: (name, email, phone, password, navigation) => {
      if(checkEmptyInput([name, email, phone, password])) {
        alert("None of the fields must be empty");
        return false;
      }
      const inputs = {
        name, 
        email, 
        phone, 
        password
      }
      setLoading(true);
      api("register", {request: inputs}, "", response => {
        if(response['success'] === true) {
          setLoading(false);
          alert(response['data']);
          navigation.navigate("Login");
        } else {
          setLoading(false);
          alert(response['data']);
        }
      });
      
    },
    loading
  }}>{children}</RegisterContext.Provider>;
}