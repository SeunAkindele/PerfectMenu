import React, {useContext, useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";

import { OrderContainer, OrderIcon, OrderList, SearchContainer } from './order-history.screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { OrderInfoCard } from "../../components/order-info-card/order-info-card.component";
import { OrderContext } from "../../context/order.context";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const OrderHistoryScreen = ({navigation}) => {

  const { order } = useContext(OrderContext);
 
  // useEffect(() => load(), []);

  return (
    <SafeArea>
      {order === "" 
      ? <OrderContainer>
          <OrderIcon bg="#ccc" icon="close" />
          <Text>No orders yet!</Text>
        </OrderContainer>
      : <>
          <SearchContainer>
            <Searchbar placeholder="Search" />
          </SearchContainer>

          <OrderList
            data={order}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <TouchableOpacity onPress={() => navigation.navigate("OrderDetails", {
                  order: order,
                })}>
                  <OrderInfoCard order={item} />
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