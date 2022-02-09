import 'react-native-gesture-handler';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MenuNavigator } from "./menu.navigator";
import {CartScreen} from "../../views/cart/screens/cart.screen";
import {OrderScreen} from "../../views/orders/screens/orders.screen";
import { SettingScreen } from "../../views/setting/screens/setting.screen";

import {Ionicons, MaterialIcons, FontAwesome5} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Menu') {
            iconName = "md-restaurant";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Cart') {
            iconName = "shopping-cart";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Orders') {
            iconName = "md-basket";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Setting') {
            iconName = "ios-settings";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#ccc',
        headerStyle: {height: 0}
      })}
    >
      <Tab.Screen name="Menu" component={MenuNavigator} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
)