import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Searchbar } from "react-native-paper";
import { StaffContainer, StaffIcon, StaffList, StaffManagement, Arrow, SearchContainer} from './staff-screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { StaffInfoCard } from "../../components/staff-info-card/staff-info-card.component";
import { StaffContext } from "../../context/staff.context";

export const StaffScreen = ({navigation}) => {
 
  const { staff } = useContext(StaffContext);

  const authorization = 2;

  return (
    <SafeArea>
      {staff === "" 
      ? <StaffContainer>
          <StaffIcon bg="#ccc" icon="close" />
          <Text>No staff yet!</Text>
        </StaffContainer>
      : <>
          <SearchContainer>
            <Searchbar placeholder="Search" />
          </SearchContainer>
          <StaffList
            data={staff}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("StaffOrder", {
                staff: staff,
              })}>
                <StaffInfoCard staff={item} authorization={authorization} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
         
          <StaffManagement onPress={() => navigation.navigate("StaffManagement")}>
            <Text color="white" variant="label">Manage Staffs</Text>
            <Arrow name="up" />
          </StaffManagement>
        </>
      }
    </SafeArea>
  )
};