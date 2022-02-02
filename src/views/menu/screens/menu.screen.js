import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import {StatusBar, View, Text, SafeAreaView} from "react-native";

import { MenuInfoCard } from "../components/menu-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const MenuListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const MenuScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <MenuListContainer>
        <MenuInfoCard />
      </MenuListContainer>
    </SafeArea>
  )
};