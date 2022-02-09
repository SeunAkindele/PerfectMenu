import React from "react";
import {AccountScreen} from "../../views/account/screens/account-screen/account-screen";
import {LoginScreen} from "../../views/account/screens/login-screen/login-screen";
import {RegisterScreen} from "../../views/account/screens/register-screen/register-screen";
import { createStackNavigator } from "@react-navigation/stack";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => (
  <AccountStack.Navigator headerMode = "none">
    <AccountStack.Screen name="Main" component={AccountScreen} />
    <AccountStack.Screen name="Login" component={LoginScreen} />
    <AccountStack.Screen name="Register" component={RegisterScreen} />
  </AccountStack.Navigator>
);