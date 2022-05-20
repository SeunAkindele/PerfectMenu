import React from "react";
import{ SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {MenuCard, MenuCardCover, Address, Info, Rating, Section, SectionEnd} from "./menu-info-card.styles";
import { format } from "../../../../components/utility/functions";

export const MenuInfoCard = ({ menu: {id, name, image, disabled_status, rating = 5, price}, loadCart }) => {

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <MenuCard elevation={5} key={id}>
      <MenuCardCover source={{uri: `http://localhost/PerfectMenuApi/vendor/images/${image}`}} />
      <Info>
        <Text variant="label">{!loadCart ? name : '---'}</Text>
        <Section>
          <Rating>
            {ratingArray.map((__, i) => (
              !loadCart ? <SvgXml key={i} xml={star} width={20} height={20} /> : <Text key={i}>*</Text>
            ))}
            
          </Rating>
          <SectionEnd>
            {disabled_status == 1 && (
              <Text variant="error">
                {!loadCart ? 'CLOSED TEMPORARILY' : '---'}
              </Text>
            )}
            <Spacer position="left" size="large">
              { disabled_status == 0 && (!loadCart ? <SvgXml xml={open} width={20} height={20} /> : <Text>---</Text>)}
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{!loadCart ? `₦${format(price, 2)}` : '---'}</Address>
      </Info>
    </MenuCard>
  );
}