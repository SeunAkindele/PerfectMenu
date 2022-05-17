import React, {useContext, useState, useEffect} from 'react';
// import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import {  OrderIcon, OrderList, OrderHistory, Arrow, Progress, Refresh } from './order-screen.styles';
import {Text} from "../../../../components/typography/text.component";
import { OrderInfoCard } from "../../components/order-info-card/order-info-card.component";
import { OrderContext } from "../../context/order.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { IsLoading } from '../../../../components/loading/loading.component';
import { FadeInView } from '../../../../components/animations/fade.animation';
import { ErrorContainer } from '../../../../components/utility/error.component.styles';
import { strlen } from '../../../../components/utility/functions';

export const OrderScreen = ({navigation}) => {
  const [time, setTime] = useState(0);

  const { order, getOrder, loading, pending } = useContext(OrderContext);
  const [loadOrder, setLoadOrder] = useState(false);

  useEffect(() => {
    setTimeout(() => { 
      getOrder();
      load();
    }, 2000);
  }, []);

  const load = () => {
    if(pending.includes("2")){
      setTime(1);
    }
  }

  const reload = () => {
    setLoadOrder(true);
      setTimeout(() => { 
        getOrder();
        setLoadOrder(false);
      }, 2000);
  }

  const countDown = () => {
    setTime(time - 0.01);
  }

  if(pending.includes("2")){
    if(time > 0){
      setTimeout(countDown, 1000);
    } else {
      reload();
      load();
    }
  } 

  return (
    <SafeArea>
      <IsLoading loading={loading} />
      {loading 
        &&
        <ErrorContainer>
          <Text variant="error">Fetching Data...</Text>
        </ErrorContainer>}
      {order !== null
        &&
        strlen(order) > 0
        ?
       <>
          <OrderList
            data={order}
            onRefresh={reload}
            refreshing={loading}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("OrderDetails", {
                  item: item,
              })} key={item.id}>
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <OrderInfoCard item={item} loadOrder={loadOrder} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            )}
          />
          {pending.includes("2") &&
          <>
            <Refresh name="ios-refresh-circle" onPress={() => reload()} />
            <Progress progress={time} />
          </>}
         
        </>
        :
        order == null
        &&
        <OrderList
          data={[{id: 1}]}
          onRefresh={reload}
          refreshing={loading}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ErrorContainer>
              <Spacer position="bottom" size="large">
                <Text>No orders yet!</Text>
              </Spacer>
              <OrderIcon bg="#ccc" icon="close" />
            </ErrorContainer>
          )}
        />
        
      }
      {
        order == ""
        &&
        <View style={{flex: 1}}></View>
      }
       <OrderHistory onPress={() => navigation.navigate("OrderHistory")}>
            <Text color="white" variant="label">Past Orders</Text>
            <Arrow name="up" />
          </OrderHistory>
    </SafeArea>
  )
};