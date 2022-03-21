import React from "react";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {StaffCard, Info, LeftInfo, Phone, User, RightInfo, Trash, Check} from "./staff-info-card.styles";

export const StaffInfoCard = ({ staff = {}, authorization }) => {
  const {name = "Oriade Akindele", phone = "09031838944", photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  ]} = staff;

  return (
    <>
      <StaffCard elevation={5}>
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
      </StaffCard>
      <Spacer position="top" size="large" />
      <StaffCard elevation={5}>
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
      </StaffCard>
      <Spacer position="top" size="large" />
    </>
  );
}