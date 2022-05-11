import React from "react";
import{ SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {MenuCard, MenuCardCover, Address, Info, Rating, Section, SectionEnd} from "./menu-info-card.styles";

export const MenuInfoCard = ({ menu: {id, name, image, status, rating = 4, price} }) => {

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <MenuCard elevation={5} key={id}>
      <MenuCardCover source={{uri: `http://localhost/PerfectMenuApi/vendor/images/${image}`}} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
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
        <Address>{price}</Address>
      </Info>
    </MenuCard>
  );
}