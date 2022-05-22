import React, {useState, createContext} from "react";
import { api } from "../../../api/api";
import { checkEmptyInput } from "../../../components/utility/functions";

export const RegisterContext = createContext();

export const RegisterContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    const inputs = {
      page: 'getLocations'
    }

    const arr=[];

    api("register", {request: inputs}, "", response => {
      if(response['success'] === true) {
        if(response['data']){
          let data = response['data'][0];
          arr.push({label: data.name, value: data.id});
          setLocations(arr);
          setLoading(false);
        }
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const onRegister = (name, email, phone, password, location, navigation) => {
    if(checkEmptyInput([name, email, phone, password, location])) {
      alert("None of the fields must be empty");
      return false;
    }
    const inputs = {
      name, 
      email, 
      phone, 
      password,
      location,
      page: ""
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
  }

  return <RegisterContext.Provider value={{
    onRegister,
    loading,
    locations,
    getLocations
  }}>{children}</RegisterContext.Provider>;
}