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

export const ErrorContainer = styled(View)`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;