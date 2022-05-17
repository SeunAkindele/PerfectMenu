import React, {useContext} from "react";
import { Alert } from "react-native";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { format } from "../../../../components/utility/functions";
import { OrderContext } from "../../context/order.context";
import {OrderCard, Info, LeftInfo, RightInfo, Eye, Trash, Check} from "./order-info-card.styles";

export const OrderInfoCard = ({ item: {amount, status, token}, loadOrder }) => {

  const {cancleOrder, confirmDelivery} = useContext(OrderContext);
  
  return (
  <>
  {    
  status == 2
    &&  
    <OrderCard elevation={5} key={token}>
      <Info>
        <LeftInfo>
          <Text variant="caption">{!loadOrder ? 'Order total' : '---'}</Text>
          <Spacer position="left" size="large">
            <Text variant="caption">{!loadOrder ? format(amount) : '---'}</Text>
          </Spacer>
        </LeftInfo>
        <RightInfo>
          <Spacer position="right" size="large">
            <Text variant="caption" color="orange" >{!loadOrder ? 'Pending' : '---'}</Text>
          </Spacer>
          <Spacer position="right" size="small">
            {!loadOrder ? <Eye name="eyeo" /> : <Text>---</Text>}
          </Spacer>
          <Spacer position="right" size="small">
          {!loadOrder ? <Trash onPress={() => {
            Alert.alert(
              "Cancle Order",
              "Are you sure?",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK", onPress: () => cancleOrder(token)}
              ],
              { cancelable: false }
            );
          }} name="closecircle" /> : <Text>---</Text>}
          </Spacer>
        </RightInfo>
      </Info>
    </OrderCard>
}
{
    status == 1
    &&
    <OrderCard elevation={5} key={token}>
      <Info>
        <LeftInfo>
          <Text variant="caption">{!loadOrder ? 'Order total' : '---'}</Text>
          <Spacer position="left" size="large">
            <Text variant="caption">{!loadOrder ? format(amount) : '---'}</Text>
          </Spacer>
        </LeftInfo>
        <RightInfo>
          <Spacer position="right" size="large">
            <Text variant="caption" color="blue">{!loadOrder ?'Dispatched'  : '---'}</Text>
          </Spacer>
          <Spacer position="right" size="small">
            {!loadOrder ? <Eye name="eyeo" /> : <Text>---</Text>}
          </Spacer>
          <Spacer position="right" size="small">
          {!loadOrder ? <Check onPress={() => {
             Alert.alert(
              "Confirm Delivery",
              "Are you sure?",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK", onPress: () => confirmDelivery(token)}
              ],
              { cancelable: false }
            );
          }} name="checkcircle" /> : <Text>---</Text>}
          </Spacer>
        </RightInfo>
      </Info>
    </OrderCard>
}
{
  status == 0
  &&
  <OrderCard elevation={5} key={token}>
      <Info>
        <LeftInfo>
          <Text variant="caption">{!loadOrder ? 'Order total' : '---'}</Text>
          <Spacer position="left" size="large">
            <Text variant="caption">{!loadOrder ? format(amount) : '---'}</Text>
          </Spacer>
        </LeftInfo>
        <RightInfo>
          <Spacer position="right" size="large">
            <Text variant="caption" color="success">{!loadOrder ? 'Delivered' : '---'}</Text>
          </Spacer>
          <Spacer position="right" size="small">
            {!loadOrder ? <Eye name="eyeo" /> : <Text>---</Text>}
          </Spacer>
        </RightInfo>
      </Info>
    </OrderCard>
}
{
  status == 3
  &&
  <OrderCard elevation={5} key={token}>
      <Info>
        <LeftInfo>
          <Text variant="caption">{!loadOrder ? 'Order total' : '---'}</Text>
          <Spacer position="left" size="large">
            <Text variant="caption">{!loadOrder ? format(amount) : '---'}</Text>
          </Spacer>
        </LeftInfo>
        <RightInfo>
          <Spacer position="right" size="large">
            <Text variant="caption" color="error">{!loadOrder ? 'Cancelled' : '---'}</Text>
          </Spacer>
          <Spacer position="right" size="small">
            {!loadOrder ? <Eye name="eyeo" /> : <Text>---</Text>}
          </Spacer>
        </RightInfo>
      </Info>
    </OrderCard>
}
  </>
  );
}
