import React from "react";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { ucFirst } from "../../../../components/utility/functions";
import {CustomerCard, Info, LeftInfo, RightInfo, Phone, User, Trash, Check} from "./customer-info-card.styles";

export const CustomerInfoCard = ({ customer: {name, phone, disabled_status}, authorization, loadCustomer }) => {
  
  return (
    <>
      <CustomerCard elevation={5}>
        <Info>
          <LeftInfo>
          {!loadCustomer && <User onPress={() => alert("deleted")} name="user-circle-o" />}
            <Text variant="tag">{!loadCustomer ? ucFirst(name) : '---'}</Text>
            <Spacer position="left" size="large">
              {!loadCustomer && <Phone name="phone-square" />}
            </Spacer>
            <Text variant="tag">{!loadCustomer ? phone : '-----'}</Text>
          </LeftInfo>
          <RightInfo>
            {authorization == "2" &&  
            (disabled_status == "1" ? !loadCustomer ? <Check onPress={() => alert("deleted")} name="checkcircle" /> : <Text>-----</Text> : !loadCustomer ? <Trash onPress={() => alert("deleted")} name="closecircle" /> : <Text>---</Text>) }
          </RightInfo>
        </Info>
      </CustomerCard>
      <Spacer position="top" size="large" />
    </>
  );
}