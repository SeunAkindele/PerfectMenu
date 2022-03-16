import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Searchbar } from "react-native-paper";
import { CustomerOrderContainer, CustomerOrderIcon, CustomerOrderList, Refresh, SearchContainer, CustomerOrderHistory, Arrow } from './customer-order-screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { CustomerOrderInfoCard } from "../../components/customer-order-info-card/customer-order-info-card.component";
import { CustomerContext } from "../../context/customer.context";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const CustomerOrderScreen = ({navigation}) => {
  const [pending, setPending] = useState([]);

  const { customerOrder } = useContext(CustomerContext);

  useEffect(() => load(), []);

  const load = () => {
    if(customerOrder.includes(2)){
     
      // alert("Pending");
      setPending(customerOrder);
      // return false;
    } else {
      // alert("Dispatched");
      setPending(customerOrder);
      // return false;
    }
  }

  const reload = () => {
    if(customerOrder.includes(2)){
     
      alert("Still Waiting");
      setPending(customerOrder);
      // return false;
    } else {
      // alert("Dispatched");
      setPending(customerOrder);
      // return false;
    }
  }

 
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
          {pending.includes(2) &&
          <>
            <Refresh name="ios-refresh-circle" onPress={() => reload()} />
          </>}
          <CustomerOrderHistory onPress={() => navigation.navigate("CustomerOrderHistory")}>
            <Text color="white" variant="label">Past Orders</Text>
            <Arrow name="up" />
          </CustomerOrderHistory>
        </>
      }
    </SafeArea>
  )
};