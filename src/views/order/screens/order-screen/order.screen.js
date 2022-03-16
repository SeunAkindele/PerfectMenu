import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { OrderContainer, OrderIcon, OrderList, OrderHistory, Arrow, Progress, Refresh } from './order-screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { OrderInfoCard } from "../../components/order-info-card/order-info-card.component";
import { OrderContext } from "../../context/order.context";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const OrderScreen = ({navigation}) => {
  const [time, setTime] = useState(0);
  const [pending, setPending] = useState([]);

  const { order } = useContext(OrderContext);

  useEffect(() => load(), []);

  const load = () => {
    if(order.includes(2)){
      setTime(1);
      // alert("Pending");
      setPending(order);
      // return false;
    } else {
      // alert("Dispatched");
      setPending(order);
      // return false;
    }
  }

  const reload = () => {
    if(order.includes(2)){
     
      alert("Still Pending");
      setPending(order);
      // return false;
    } else {
      // alert("Dispatched");
      setPending(order);
      // return false;
    }
  }

  const countDown = () => {
    setTime(time - 0.01);
  }

  if(pending.includes(2)){
    if(time > 0){
      setTimeout(countDown, 1000);
    } else {
      load();
    }
  } 

  return (
    <SafeArea>
      {order === "" 
      ? <OrderContainer>
          <OrderIcon bg="#ccc" icon="close" />
          <Text>No orders yet!</Text>
        </OrderContainer>
      : <>
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
          {pending.includes(2) &&
          <>
            <Refresh name="ios-refresh-circle" onPress={() => reload()} />
            <Progress progress={time} />
          </>}
          <OrderHistory onPress={() => navigation.navigate("OrderHistory")}>
            <Text color="white" variant="label">Past Orders</Text>
            <Arrow name="up" />
          </OrderHistory>
        </>
      }
    </SafeArea>
  )
};