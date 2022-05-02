import React, {useState, createContext} from "react";
import { api } from "../../../api/api";
import { checkEmptyInput } from "../../../components/utility/functions";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authorization, setAuthorization] = useState(0);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  return <LoginContext.Provider value={{
    onLogin: (email, password) => {
      if(checkEmptyInput([email, password])) {
        alert("None of the fields must be empty");
        return false;
      }
      
      const inputs = {
        email,
        password
      }
      
      setLoading(true);
      api("login", {request: inputs}, "", response => {
        if(response['success'] === true) {
          setUser(response['data']);
          setAuthorization(response['data']['type']);
          setIsAuthenticated(true);
          setToken(response['data']['token']);
          setLoading(false);
        } else {
          setLoading(false);
          alert(response['data']);
        }
      });
    },

    onLogout: () => {
      setUser({});
      setAuthorization(0);
      setIsAuthenticated(false);
      setToken("");
      setLoading(false);
    },
    loading,
    isAuthenticated,
    authorization,
    user,
    token,
  }}>{children}</LoginContext.Provider>;
}