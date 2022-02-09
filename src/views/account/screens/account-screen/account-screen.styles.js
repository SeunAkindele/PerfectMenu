import styled from "styled-components";
import {View} from "react-native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/images/home_bg.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bg.accountBg};
`;