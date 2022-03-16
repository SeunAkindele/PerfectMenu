import React from "react";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {StaffOrderCard, Info, LeftInfo, RightInfo, Eye, Trash, Check} from "./staff-order-info-card.styles";

export const StaffOrderInfoCard = ({ staffOrder = {} }) => {
  const {price = 3650} = staffOrder;

  return (
    <>
      <StaffOrderCard elevation={5}>
        <Info>
          <LeftInfo>
            <Text variant="tag">Oriade Akindele</Text>
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
      </StaffOrderCard>
      <Spacer position="top" size="large" />
      <StaffOrderCard elevation={5}>
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
      </StaffOrderCard>
      <Spacer position="top" size="large" />
      <StaffOrderCard elevation={5}>
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
      </StaffOrderCard>
      <Spacer position="top" size="large" />
      <StaffOrderCard elevation={5}>
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
      </StaffOrderCard>
    </>
  );
}