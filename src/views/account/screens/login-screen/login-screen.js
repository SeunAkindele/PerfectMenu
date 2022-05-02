import React, {useContext, useState} from "react";
import { LoginBackground, LoginCover, LoginContainer, AuthInput, AuthButton, Title, ErrorContainer } from "./login-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {TextInput} from "react-native-paper";
import { LoginContext } from "../../context/login.context";

export const LoginScreen = ({ navigation }) => {

  const { onLogin } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secured, setSecured] = useState(true);

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
          onChangeText={(email) => setEmail(email)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            // value={}
            textContentType="password"
            secureTextEntry={secured}
            autoCapitalize="none"
            right={<TextInput.Icon name="eye" onPress={() => setSecured(!secured)} />}
            onChangeText={(password) => setPassword(password)}
          />
        </Spacer>
        {/* {error && ( */}
          {/* <Spacer size="large">
            <ErrorContainer size="large">
              <Text variant="error">Error will be here</Text>
            </ErrorContainer>
          </Spacer> */}
        {/* )} */}
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
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