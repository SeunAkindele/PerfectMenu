import React from "react";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {CustomerOrderCard, Info, LeftInfo, RightInfo, Eye, Trash, Check} from "./customer-order-info-card.styles";

export const CustomerOrderInfoCard = ({ customerOrder = {} }) => {
  const {price = 3650, icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  ]} = customerOrder;

  return (
    <>
      <CustomerOrderCard elevation={5}>
        <Info>
          <LeftInfo>
            <Text variant="tag">Akindele Seun</Text>
            <Spacer position="left" size="large">
              <Text variant="caption">{price}</Text>
            </Spacer>
          </LeftInfo>
          <RightInfo>
            <Spacer position="right" size="large">
              <Text variant="caption" color="orange" >Waiting...</Text>
            </Spacer>
            <Spacer position="right" size="small">
              <Eye name="eyeo" />
            </Spacer>
            <Spacer position="right" size="small">
              <Check onPress={() => alert("deleted")} name="checkcircle" />
            </Spacer>
            <Spacer position="right" size="small">
              <Trash onPress={() => alert("deleted")} name="closecircle" />
            </Spacer>
          </RightInfo>
        </Info>
      </CustomerOrderCard>
      <Spacer position="top" size="large" />
      <CustomerOrderCard elevation={5}>
        <Info>
          <LeftInfo>
            <Text variant="tag">Order total</Text>
            <Spacer position="left" size="large">
              <Text variant="caption">{price}</Text>
            </Spacer>
          </LeftInfo>
          <RightInfo>
            <Spacer position="right" size="large">
              <Text variant="caption" color="blue">Dispatched</Text>
            </Spacer>
            <Spacer position="right" size="small">
              <Eye name="eyeo" />
            </Spacer>
          </RightInfo>
        </Info>
      </CustomerOrderCard>
      <Spacer position="top" size="large" />
      <CustomerOrderCard elevation={5}>
        <Info>
          <LeftInfo>
            <Text variant="tag">Order total</Text>
            <Spacer position="left" size="large">
              <Text variant="caption">{price}</Text>
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
      </CustomerOrderCard>
      <Spacer position="top" size="large" />
      <CustomerOrderCard elevation={5}>
        <Info>
          <LeftInfo>
            <Text variant="tag">Order total</Text>
            <Spacer position="left" size="large">
              <Text variant="caption">{price}</Text>
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
      </CustomerOrderCard>
    </>
  );
}