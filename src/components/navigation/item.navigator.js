import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { ItemScreen } from "../../views/item/screens/item-screen/item.screen";

const ItemStack = createStackNavigator();

export const ItemNavigator = () => {
  return (
    <ItemStack.Navigator headerMode="none" screenOptions={{
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <ItemStack.Screen 
        name="ItemScreen"
        component={ItemScreen}
      />
    </ItemStack.Navigator>
  );
}