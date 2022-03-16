import React, {useContext} from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const isAuthenticated = false;
  const authorization = 2;
  
  return (
    <NavigationContainer>
      { !isAuthenticated ? <AppNavigator authorization={authorization} /> : <AccountNavigator /> }
    </NavigationContainer>
  )
}