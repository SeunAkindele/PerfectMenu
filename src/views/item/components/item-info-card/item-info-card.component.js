import React from "react";
import{ SvgXml } from "react-native-svg";
import starGold from "../../../../../assets/star-gold";
import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {ItemCard, ItemCardCover, Address, Info, Rating, Section, SectionEnd} from "./item-info-card.styles";

export const ItemInfoCard = ({ item: {name, image, status, rating = 4, price} }) => {

  // size for picture is width of 600px and height of 750px

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ItemCard elevation={5}>
      <ItemCardCover key={name} source={{uri: `http://localhost/PerfectMenuApi/vendor/images/${image}`}} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={starGold} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {status == 1 && (
              <Text variant="error">
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {status == 0 && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>N {price}</Address>
      </Info>
    </ItemCard>
  );
}