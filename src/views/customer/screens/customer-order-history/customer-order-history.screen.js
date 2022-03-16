import React, {useContext, useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";

import { CustomerOrderContainer, CustomerOrderIcon, CustomerOrderList, SearchContainer } from './customer-order-history.screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { CustomerOrderInfoCard } from "../../components/customer-order-info-card/customer-order-info-card.component";
import { CustomerContext } from "../../context/customer.context";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const CustomerOrderHistoryScreen = ({navigation}) => {

  const { customerOrder } = useContext(CustomerContext);
 
  // useEffect(() => load(), []);

  return (
    <SafeArea>
      {customerOrder === "" 
      ? <CustomerOrderContainer>
          <CustomerOrderIcon bg="#ccc" icon="close" />
          <Text>No orders yet!</Text>
        </CustomerOrderContainer>
      : <>
          <SearchContainer>
            <Searchbar placeholder="Search" />
          </SearchContainer>

          <CustomerOrderList
            data={customerOrder}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <TouchableOpacity onPress={() => navigation.navigate("CustomerOrderDetails", {
                  customerOrder: customerOrder,
                })}>
                  <CustomerOrderInfoCard customerOrder={item} />
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