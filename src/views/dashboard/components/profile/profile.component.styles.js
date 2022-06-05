import styled from "styled-components/native";
import { View } from "react-native";
import {FontAwesome} from "@expo/vector-icons";

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
  padding-bottom: 20px;
`;

export const User = styled(FontAwesome)`
  font-size: ${(props) => props.theme.fontSizes.body};
  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.error};
`;