import React, {useState, createContext, useContext} from "react";
import { api } from "../../../api/api";
import { checkEmptyInput, strlen } from "../../../components/utility/functions";
import { LoginContext } from "../../account/context/login.context";

export const StaffContext = createContext();

export const StaffContextProvider = ({ children }) => {
  const {token} = useContext(LoginContext);

  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderBackUp, setOrderBackUp] = useState([]);
  const [pastOrder, setPastOrder] = useState([]);
  const [pastOrderBackUp, setPastOrderBackUp] = useState([]);
  const [pending, setPending] = useState([]);

  const getLocations = () => {
    const inputs = {
      page: 'getLocations'
    }

    const arr=[];

    api("location", {request: inputs}, token, response => {
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

  const getOrder = () => {
    const inputs = {
      page: 'getOrder'
    }
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        if(response['data']){
          if(strlen(response['data']['data']) > 0){
            setOrder(response['data']['data']);
            setOrderBackUp(response['data']['data']);
            setPending(response['data']['pending']);
          } else {
            setOrder(null);
          }
          setLoading(true);
        } else {
          setOrder(null);
        }
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const createStaff = (name, email, phone, type, location, navigation) => {
    const inputs = {
      page: 'createStaff',
      name: name,
      phone: phone,
      email: email,
      type: type,
      location: location
    }

    if(checkEmptyInput([name, email, phone, type, location])) {
      alert("None of the asterisked fields be empty");
      return false;
    }

    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        setLoading(false);
        alert("Entry saved successfully");
        navigation.goBack();
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const cancleOrder = (orderToken, customerId) => {
    const inputs = {
      page: 'cancleOrder',
      token: orderToken,
      customerId
    }
    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        getOrder();
        // getPastOrder();
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  const dispatchOrder = (orderToken, customerId) => {
    
    const inputs = {
      page: 'dispatchOrder',
      token: orderToken,
      customerId
    }
    setLoading(true);
    api("staff", {request: inputs}, token, response => {
      if(response['success'] === true) {
        getOrder();
        // getPastOrder();
        setLoading(false);
      } else {
        alert(response['data'])
        setLoading(false);
      }
    });
  }

  return <StaffContext.Provider value={{
    order,
    cancleOrder,
    dispatchOrder,
    orderBackUp,
    setOrder,
    pending,
    loading,
    createStaff,
    locations,
    getLocations,
    getOrder
  }}>{children}</StaffContext.Provider>;
}