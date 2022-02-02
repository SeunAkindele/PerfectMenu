import { StatusBar as ExpoStatusBar} from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components/native";

import {useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";

import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";

import { theme } from "../components/theme";

import {Ionicons, MaterialIcons, FontAwesome5} from "@expo/vector-icons";

import {MenuScreen} from "./menu/screens/menu.screen";
// import {Users} from "./users/main/users";
// import {Orders} from "./orders/main/orders";
// import {Riders} from "./riders/main/riders";
// import {Staffs} from "./staffs/main/staffs";

const Tab = createBottomTabNavigator();


const PerfectMenu = () => {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>    
      <ThemeProvider theme={theme}>
        <MenuScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>

    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ color, size }) => {
    //         let iconName;

    //         if (route.name === 'Menu') {
    //           iconName = "md-restaurant";
    //           return <Ionicons name={iconName} size={size} color={color} />;
    //         } else if (route.name === 'Orders') {
    //           iconName = "shopping-cart";
    //           return <MaterialIcons name={iconName} size={size} color={color} />;
    //         } else if (route.name === 'Users') {
    //           iconName = "user-circle";
    //           return <FontAwesome5 name={iconName} size={size} color={color} />;
    //         } else if (route.name === 'Staffs') {
    //           iconName = "directions-bike";
    //           return <MaterialIcons name={iconName} size={size} color={color} />;
    //         } else if (route.name === 'Riders') {
    //           iconName = "directions-bike";
    //           return <MaterialIcons name={iconName} size={size} color={color} />;
    //         }

    //         // You can return any component that you like here!
            
    //       },
    //       tabBarActiveTintColor: 'tomato',
    //       tabBarInactiveTintColor: '#bbb',
    //     })}
    //   >
    //     <Tab.Screen name="Menu" component={Menu} />
    //     <Tab.Screen name="Orders" component={Orders} />
    //     <Tab.Screen name="Users" component={Users} />
    //     <Tab.Screen name="Riders" component={Riders} />
    //     {/* <Tab.Screen name="Staffs" component={Staffs} /> */}
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default PerfectMenu;