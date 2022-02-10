import React from "react";
import { LoginBackground, LoginCover, LoginContainer, AuthInput, AuthButton, Title, ErrorContainer } from "./login-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {

  return (
    <LoginBackground>
      <LoginCover />
      <Title>Perfect Menu</Title>
      <LoginContainer>
      <AuthInput
          label="E-mail"
          // value={}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => console.log(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            // value={}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => console.log(p)}
          />
        </Spacer>
        {/* {error && ( */}
          <Spacer size="large">
            <ErrorContainer size="large">
              <Text variant="error">Error will be here</Text>
            </ErrorContainer>
          </Spacer>
        {/* )} */}
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => alert("Hello!")}
          >
            Login
          </AuthButton>
        </Spacer>
      </LoginContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </LoginBackground>
  );
}