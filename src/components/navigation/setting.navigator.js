import React from "react";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { SettingScreen } from "../../views/setting/screens/setting.screen";

const SettingStack = createStackNavigator();

export const SettingNavigator = ({route, navigation}) => {
  return (
    <SettingStack.Navigator 
      headerMode="none"
      screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <SettingStack.Screen 
        name="SettingScreen"
        component={SettingScreen}
      />
    </SettingStack.Navigator>
  );
}