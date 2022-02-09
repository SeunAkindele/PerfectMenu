import React, {useContext} from "react";
import {View, Text} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      { isAuthenticated ? <AppNavigator /> : <AccountNavigator /> }
    </NavigationContainer>
  )
}