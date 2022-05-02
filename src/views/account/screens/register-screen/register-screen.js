import React, {useContext, useState} from "react";
import { RegisterBackground, RegisterCover, RegisterContainer, AuthInput, AuthButton, Title, ErrorContainer } from "./register-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {TextInput} from "react-native-paper";
import { RegisterContext } from "../../context/register.context";
import { IsLoading } from "../../../../components/loading/loading.component";

export const RegisterScreen = ({ navigation }) => {

  const {onRegister, loading} = useContext(RegisterContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [secured, setSecured] = useState(true);

  return (
    <RegisterBackground>
      <IsLoading loading={loading} />
      <RegisterCover />
      <Title>Perfect Menu</Title>
      <RegisterContainer>
     
        <AuthInput
          label="Full name"
          // value={}
          // textContentType="number"
          // keyboardType="tel"
          autoCapitalize="none"
          onChangeText={(name) => setName(name)}
        />
        <Spacer size="large">
        <AuthInput
          label="E-mail"
          // value={}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />
        </Spacer>
        <Spacer size="large">
        <AuthInput
          label="Phone number"
          // value={}
          // textContentType="number"
          // keyboardType="tel"
          autoCapitalize="none"
          onChangeText={(phone) => setPhone(phone)}
        />
        </Spacer>
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
            icon="email"
            mode="contained"
            disabled={loading && true}
            onPress={() => onRegister(name, email, phone, password, navigation)}
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