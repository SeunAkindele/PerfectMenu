import styled from "styled-components/native";
import {FlatList, View, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import { Avatar, Card } from "react-native-paper";

export const DashboardContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;

export const DashboardCardCover = styled(Card)`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[2]};
`

export const DashboardProfile = styled(View)`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`

export const DashboardProfileCover = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const User = styled(FontAwesome)`
  font-size: ${(props) => props.theme.fontSizes.body};
  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.error};
`;

export const DashboardSales = styled(View)`
  width: 100%;
  
`;