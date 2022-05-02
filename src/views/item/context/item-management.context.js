import React, {useState, createContext, useEffect, useMemo} from "react";
import { api } from "../../../api/api";
import { checkEmptyInput } from "../../../components/utility/functions";

export const ItemManagementContext = createContext();

export const ItemManagementContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return <ItemManagementContext.Provider value={{
    onCreateItem: (token, navigation, localUri, data, type) => {
      const inputs = data.split("_");
      const image = inputs[0];
      const forms = inputs[1].split("-");
      const name = forms[1];
      const price = forms[2];
      const ingredients = forms[3];

      if(checkEmptyInput([name, price, ingredients]) || image === "camera.png") {
        alert("None of the fields must be empty");
        return false;
      }

      const formData = new FormData();
      formData.append('image', { uri: localUri, name: data, type });

      setLoading(true);
      api("item", formData, token, response => {
        if(response['success'] === true) {
          setLoading(false);
          console.log(response);
          navigation.goBack();
        } else {
          alert(response['data'])
          setLoading(false);
        }
      }, "multipart/form-data");
    },
    loading
  }}>{children}</ItemManagementContext.Provider>;
}