import React from "react";
import{ SvgXml } from "react-native-svg";
import starGold from "../../../../../assets/star-gold";
import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {MenuCard, MenuCardCover, Address, Info, Rating, Section, SectionEnd} from "./menu-info-card.styles";
import { format } from "../../../../components/utility/functions";

export const MenuInfoCard = ({ menu: {id, name, image, disabled_status, rating = 5, price} }) => {

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <MenuCard elevation={5} key={id}>
      <MenuCardCover source={{uri: `http://localhost/PerfectMenuApi/vendor/images/${image}`}} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((__, i) => (
             <SvgXml key={i} xml={starGold} width={20} height={20} /> 
            ))}
            
          </Rating>
          <SectionEnd>
            {disabled_status == 1 && (
              <Text variant="error">
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              { disabled_status == 0 && (<SvgXml xml={open} width={20} height={20} />)}
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>₦{format(price)}</Address>
      </Info>
    </MenuCard>
  );
}