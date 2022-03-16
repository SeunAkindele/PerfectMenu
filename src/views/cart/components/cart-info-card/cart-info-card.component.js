import React from "react";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {Icon, CartCard, Info, LeftInfo, RightInfo, ArrowLeft, ArrowRight, Trash} from "./cart-info-card.styles";

export const CartInfoCard = ({ cart = {} }) => {
  const {name = 'Zuni Café', qty = 1000, price = 3650, icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  ]} = cart;

  return (
    <CartCard elevation={5}>
      <Info>
        <LeftInfo>
          <Icon source={{ uri: photos[0]}} />
          <Text variant="tag">{name}</Text>
          <ArrowLeft onPress={() => alert("reduce")} name = "left"/>
          <Text variant="caption">{qty}</Text>
          <ArrowRight onPress={() => alert("increase")} name = "right"/>
        </LeftInfo>
        <RightInfo>
          <Spacer position="right" size="large">
            <Text variant="caption">{price}</Text>
          </Spacer>
          <Spacer position="right" size="small">
            <Trash onPress={() => alert("deleted")} name="closecircle" />
          </Spacer>
        </RightInfo>
      </Info>
    </CartCard>
  );
}