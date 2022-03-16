import styled from "styled-components/native";
import {FlatList, View} from "react-native";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const MenuList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`

`;