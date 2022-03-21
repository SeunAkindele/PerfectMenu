import React from "react";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {CustomerCard, Info, LeftInfo, RightInfo, Phone, User, Trash, Check} from "./customer-info-card.styles";

export const CustomerInfoCard = ({ customer = {}, authorization }) => {
  const {name = "Oriade Akindele", phone = "09031838944", photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  ]} = customer;
  
  return (
    <>
      <CustomerCard elevation={5}>
        <Info>
          <LeftInfo>
            <User onPress={() => alert("deleted")} name="user-circle-o" />
            <Text variant="tag">{name}</Text>
            <Spacer position="left" size="large">
              <Phone name="phone-square" />
            </Spacer>
            <Text variant="tag">{phone}</Text>
          </LeftInfo>
          <RightInfo>
            {authorization == 2 &&  <Trash onPress={() => alert("deleted")} name="closecircle" /> }
          </RightInfo>
        </Info>
      </CustomerCard>
      <Spacer position="top" size="large" />
      <CustomerCard elevation={5}>
        <Info>
          <LeftInfo>
            <User onPress={() => alert("deleted")} name="user-circle-o" />
            <Text variant="tag">{name}</Text>
            <Spacer position="left" size="large">
              <Phone name="phone-square" />
            </Spacer>
            <Text variant="tag">{phone}</Text>
          </LeftInfo>
          <RightInfo>
            {authorization == 2 &&  <Check onPress={() => alert("deleted")} name="checkcircle" /> }
          </RightInfo>
        </Info>
      </CustomerCard>
      <Spacer position="top" size="large" />
    </>
  );
}