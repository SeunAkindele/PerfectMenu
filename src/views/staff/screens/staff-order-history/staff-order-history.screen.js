import React, {useContext, useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";

import { StaffOrderContainer, StaffOrderIcon, StaffOrderList, SearchContainer } from './staff-order-history.screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { StaffOrderInfoCard } from "../../components/staff-order-info-card/staff-order-info-card.component";
import { StaffContext } from "../../context/staff.context";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const StaffOrderHistoryScreen = ({navigation}) => {

  const { staffOrder } = useContext(StaffContext);
 
  // useEffect(() => load(), []);

  return (
    <SafeArea>
      {staffOrder === "" 
      ? <StaffOrderContainer>
          <StaffOrderIcon bg="#ccc" icon="close" />
          <Text>No orders yet!</Text>
        </StaffOrderContainer>
      : <>
          <SearchContainer>
            <Searchbar placeholder="Search" />
          </SearchContainer>

          <StaffOrderList
            data={staffOrder}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <TouchableOpacity onPress={() => navigation.navigate("StaffOrderDetails", {
                  staffOrder: staffOrder,
                })}>
                  <StaffOrderInfoCard staffOrder={item} />
                </TouchableOpacity>
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
          />
        </>
      }
    </SafeArea>
  )
};