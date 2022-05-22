import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { StaffOrderContainer, StaffOrderIcon, StaffOrderList, StaffOrderHistory, Arrow, Progress, Refresh, SearchContainer } from './staff-order-screen.styles';
import { Searchbar } from "react-native-paper";
import {Text} from "../../../../components/typography/text.component";
import { StaffOrderInfoCard } from "../../components/staff-order-info-card/staff-order-info-card.component";
import { StaffContext } from "../../context/staff.context";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { FadeInView } from "../../../../components/animations/fade.animation";

export const StaffOrderScreen = ({navigation}) => {
  const [time, setTime] = useState(0);
  const [pending, setPending] = useState([]);

  // const {  } = useContext(StaffContext);
const staffOrder = [1];
  useEffect(() => load(), []);

  const load = () => {
    if(staffOrder.includes(2)){
      setTime(1);
      // alert("Pending");
      setPending(staffOrder);
      // return false;
    } else {
      // alert("Dispatched");
      setPending(staffOrder);
      // return false;
    }
  }

  const reload = () => {
    if(staffOrder.includes(2)){
     
      alert("Still Pending");
      setPending(staffOrder);
      // return false;
    } else {
      // alert("Dispatched");
      setPending(staffOrder);
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
                  <FadeInView>
                    <StaffOrderInfoCard staffOrder={item} />
                  </FadeInView>
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
          <StaffOrderHistory onPress={() => navigation.navigate("StaffOrderHistory")}>
            <Text color="white" variant="label">Past Orders</Text>
            <Arrow name="up" />
          </StaffOrderHistory>
        </>
      }
    </SafeArea>
  )
};