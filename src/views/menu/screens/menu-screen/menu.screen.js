import React, {useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { MenuInfoCard } from "../../components/menu-info-card/menu-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { SearchContainer, MenuList } from "./menu-screen.styles";
import { MenuContext } from "../../context/menu.context";
import { FadeInView } from "../../../../components/animations/fade.animation";
import { IsLoading } from "../../../../components/loading/loading.component";
import { LoginContext } from "../../../account/context/login.context";

export const MenuScreen = ({ navigation }) => {
  const { menu } = useContext(MenuContext);
  const {isLoading, user} = useContext(LoginContext);
  
  return (
    <SafeArea>

      {/* <IsLoading loading={isLoading} /> */}
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
    
        <MenuList
          data={menu}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("MenuDetail", {
              menu: item,
            })}>
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <MenuInfoCard menu={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      
    </SafeArea>
  );
};