import React from "react";
import{ SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {Icon, MenuCard, MenuCardCover, Address, Info, Rating, Section, SectionEnd} from "./menu-info-card.styles";

export const MenuInfoCard = ({ menu = {} }) => {
  const {name = 'Zuni Café', icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  ], address = '100 some random street', isOpenNow = true, rating = 4, isClosedTemporarily = true} = menu;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <MenuCard elevation={5}>
      <MenuCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {/* {isClosedTemporarily && (
                <Text variant="error">
                  CLOSED TEMPORARILY
                </Text>
            )} */}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            {/* <Spacer position="left" size="large">
              <Icon source={{uri: icon}} />
            </Spacer> */}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </MenuCard>
  );
}