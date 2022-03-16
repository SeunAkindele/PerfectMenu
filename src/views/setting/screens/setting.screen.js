import React, { useContext } from 'react';
import { View } from "react-native";
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { List, Avatar } from 'react-native-paper';

export const SettingScreen = ({ navigation }) => {
  // const { onLogout } = useContext();

  const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
  `;

  const AvatarContainer = styled(View)`
    align-items: center;
  `;

  return (
    <SafeArea>
      <AvatarContainer>
      <Spacer position="top" size="large">
        <Avatar.Icon size={180} icon="human" backgroundColor="#ccc" />
        </Spacer>
        <Spacer position="top" size="large">
        <Text variant="label">oriadeakindele@gmail.com</Text>
      </Spacer>
      </AvatarContainer>
     
      <List.Section>
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => navigation.navigate("Login")}
        />
         {/* <SettingsItem
          title="Logut"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => console.log("hi")}
        /> */}
      </List.Section>
    </SafeArea>
  )
};