import React, { useContext } from "react";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import {  } from "./staff-management.screen.styles";
import { StaffContext } from "../../context/staff.context";
import { StaffInput, StaffButton, Select, StaffContainer } from "./staff-management.screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Dropdown } from "../../../../components/dropdown/dropdown.component";
import { Text } from "../../../../components/typography/text.component";
import {TextInput} from "react-native-paper";
import { IsLoading } from "../../../../components/loading/loading.component";

export const StaffManagementScreen = ({ navigation }) => {
  const { staff } = useContext(StaffContext);

  const position = [
    {
      label: "Sales",
      value: "1",
    },
    {
      label: "Admin",
      value: "2",
    }
  ];
  
  return (
    <SafeArea>
      {/* <IsLoading /> */}
      <StaffContainer>
      <Spacer size="large">
        <StaffInput
          label="Staff name *"
          // value={}
          // textContentType="emailAddress"
          // keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => console.log(u)}
        />
      </Spacer>

      <Spacer size="large">
        <StaffInput
          label="E-mail *"
          // value={}
          // textContentType="emailAddress"
          // keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => console.log(u)}
        />
      </Spacer>

      <Spacer size="large">
        <StaffInput
          label="Phone number *"
          // value={}
          // textContentType="number"
          // keyboardType="tel"
          autoCapitalize="none"
          onChangeText={(u) => console.log(u)}
        />
      </Spacer>

      <Spacer size="large">
        <Dropdown
          data={position} onValueChange={ item => console.log(item)} placeholder='Select Position *'
        />
      </Spacer>
     
      <Spacer size="large">
        <StaffButton
          // icon=""
          mode="contained"
          onPress={() => alert("Hello!")}
        >
          Create Staff
        </StaffButton>
      </Spacer>
      </StaffContainer>
    </SafeArea>
  );
};