import React from "react";
import { Colors } from "react-native-paper";
import { LoadingContainer, Loading } from "./loading.component.styles";

export const IsLoading = () => (
  <LoadingContainer>
    <Loading size={50} animating={true} color={Colors.red300} />
  </LoadingContainer>
)