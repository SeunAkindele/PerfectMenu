import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Searchbar } from "react-native-paper";
import { CustomerContainer, CustomerIcon, CustomerList, CustomerManagement, Arrow, SearchContainer} from './customer-screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { CustomerInfoCard } from "../../components/customer-info-card/customer-info-card.component";
import { CustomerContext } from "../../context/customer.context";

export const CustomerScreen = ({navigation}) => {
 
  const { customer } = useContext(CustomerContext);

  const authorization = 2;

  return (
    <SafeArea>
      {customer === "" 
      ? <CustomerContainer>
          <CustomerIcon bg="#ccc" icon="close" />
          <Text>No customers yet!</Text>
        </CustomerContainer>
      : <>
          <SearchContainer>
            <Searchbar placeholder="Search" />
          </SearchContainer>
          <CustomerList
            data={customer}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("CustomerOrders", {
                customer: customer,
              })}>
                <CustomerInfoCard customer={item} authorization={authorization} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
          {
            authorization == 2
            &&
            <CustomerManagement onPress={() => navigation.navigate("CustomerManagement")}>
              <Text color="white" variant="label">Manage Customers</Text>
              <Arrow name="up" />
            </CustomerManagement>
          }
        </>
      }
    </SafeArea>
  )
};