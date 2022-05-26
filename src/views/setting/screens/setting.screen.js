import React, { useContext } from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { List, Avatar } from 'react-native-paper';
import { LoginContext } from '../../account/context/login.context';
import { ucFirst } from '../../../components/utility/functions';
import { SettingsItem, ProfileManagement, AvatarContainer, Arrow } from './settings.screen.styles';
import { ScrollView } from 'react-native';

export const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(LoginContext);


  return (
    <SafeArea>
      <ScrollView>
      <AvatarContainer>
      <Spacer position="top" size="large">
        <Avatar.Icon size={180} icon="human" backgroundColor="#ccc" />
        </Spacer>
        <Spacer position="top" size="large">
        <Text variant="label">{user.email}</Text>
      </Spacer>
      </AvatarContainer>
     
      <List.Section>
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogout()}
        />
         <SettingsItem
          title={ucFirst(user.name)}
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
        />

        <SettingsItem
          title={ucFirst(user.phone)}
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
        />
      </List.Section>
      </ScrollView>
      <ProfileManagement onPress={() => navigation.navigate("")}>
          <Text color="white" variant="label">Manage Profile</Text>
          <Arrow name="up" />
        </ProfileManagement>
    </SafeArea>
  )
};