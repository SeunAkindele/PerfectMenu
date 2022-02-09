import { StatusBar as ExpoStatusBar} from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";

import {useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";

import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";

import { theme } from "../components/theme";

import { MenuContextProvider } from "./menu/context/menu.context";

import { Navigation } from "../components/navigation";

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
        <MenuContextProvider>
          <Navigation />
        </MenuContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

export default PerfectMenu;