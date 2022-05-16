import React from "react";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { format } from "../../../../components/utility/functions";
import {OrderCard, Info, LeftInfo, RightInfo, Eye, Trash, Check} from "./order-info-card.styles";

export const OrderInfoCard = ({ order: {amount, id, status} }) => {

  return (
  <>
  {    
  status == 2
    &&  
    <OrderCard elevation={5} key={id}>
      <Info>
        <LeftInfo>
          <Text variant="caption">Order total</Text>
          <Spacer position="left" size="large">
            <Text variant="caption">{format(amount)}</Text>
          </Spacer>
        </LeftInfo>
        <RightInfo>
          <Spacer position="right" size="large">
            <Text variant="caption" color="orange" >Pending</Text>
          </Spacer>
          <Spacer position="right" size="small">
            <Eye name="eyeo" />
          </Spacer>
          <Spacer position="right" size="small">
            <Trash onPress={() => alert("deleted")} name="closecircle" />
          </Spacer>
        </RightInfo>
      </Info>
    </OrderCard>
}
{
    status == 1
    &&
    <OrderCard elevation={5} key={id}>
      <Info>
        <LeftInfo>
          <Text variant="caption">Order total</Text>
          <Spacer position="left" size="large">
            <Text variant="caption">{format(amount, 2)}</Text>
          </Spacer>
        </LeftInfo>
        <RightInfo>
          <Spacer position="right" size="large">
            <Text variant="caption" color="blue">Dispatched</Text>
          </Spacer>
          <Spacer position="right" size="small">
            <Eye name="eyeo" />
          </Spacer>
          <Spacer position="right" size="small">
            <Check onPress={() => alert("deleted")} name="checkcircle" />
          </Spacer>
        </RightInfo>
      </Info>
    </OrderCard>
}
{
  status == 0
  &&
  <OrderCard elevation={5} key={id}>
      <Info>
        <LeftInfo>
          <Text variant="caption">Order total</Text>
          <Spacer position="left" size="large">
            <Text variant="caption">{format(amount)}</Text>
          </Spacer>
        </LeftInfo>
        <RightInfo>
          <Spacer position="right" size="large">
            <Text variant="caption" color="success">Delivered</Text>
          </Spacer>
          <Spacer position="right" size="small">
            <Eye name="eyeo" />
          </Spacer>
        </RightInfo>
      </Info>
    </OrderCard>
}
{
  status == 3
  &&
  <OrderCard elevation={5} key={id}>
      <Info>
        <LeftInfo>
          <Text variant="caption">Order total</Text>
          <Spacer position="left" size="large">
            <Text variant="caption">{format(amount)}</Text>
          </Spacer>
        </LeftInfo>
        <RightInfo>
          <Spacer position="right" size="large">
            <Text variant="caption" color="error">Cancelled</Text>
          </Spacer>
          <Spacer position="right" size="small">
            <Eye name="eyeo" />
          </Spacer>
        </RightInfo>
      </Info>
    </OrderCard>
}
  </>
  );
}
