import React from "react";
import { RegisterBackground, RegisterCover, RegisterContainer, AuthInput, AuthButton, Title, ErrorContainer } from "./register-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {TextInput} from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {

  return (
    <RegisterBackground>
      <RegisterCover />
      <Title>Perfect Menu</Title>
      <RegisterContainer>
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
            right={<TextInput.Icon name="eye" />}
            onChangeText={(p) => console.log(p)}
          />
        </Spacer>
        <Spacer size="large">
        <AuthInput
          label="Phone number"
          // value={}
          // textContentType="number"
          // keyboardType="tel"
          autoCapitalize="none"
          onChangeText={(u) => console.log(u)}
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
            icon="email"
            mode="contained"
            onPress={() => alert("Hello!")}
          >
            Register
          </AuthButton>
        </Spacer>
      </RegisterContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </RegisterBackground>
  );
}