import styled from "styled-components/native";
import {Button} from "react-native-paper";
import {View} from "react-native";
import { colors } from "../../../../components/theme/colors";

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  padding: ${(props) => props.theme.space[2]};
  width: 90%;
  align-self: center;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;