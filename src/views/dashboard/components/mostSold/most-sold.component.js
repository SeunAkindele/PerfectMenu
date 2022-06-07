import React from "react";
import {Text} from "../../../../components/typography/text.component";
import {  DashboardMostSold, Icon, MostSoldContainer, MostSoldInnerContainer, IconInverse } from "./most-sold.component.styles";
import{ SvgXml } from "react-native-svg";
import { Spacer } from "../../../../components/spacer/spacer.component";
import starGold from "../../../../../assets/star-gold";
import starSilver from "../../../../../assets/star-silver";


export const MostSold = ({mostSoldData}) => {
 
  return (
   
    <DashboardMostSold>
      <Text variant="tag" style={{color: 'grey', alignSelf: 'center'}}>Most Sold Item</Text>
      <Spacer position="top" size="large" />
      {
        mostSoldData.qty > 0
        ?
        <MostSoldContainer>
        <MostSoldInnerContainer>
          <Icon source={{ uri: `http://localhost/PerfectMenuApi/vendor/images/${mostSoldData.image}`}} />
          <Text variant="label">{mostSoldData.name}</Text>
        </MostSoldInnerContainer>
        <Text>{mostSoldData.qty}</Text>
        <SvgXml xml={starGold} width={30} height={30} />
      </MostSoldContainer>
        :
      <MostSoldContainer>
        <MostSoldInnerContainer>
          <IconInverse name="ios-ellipsis-horizontal-circle"/>
          <Text>-----</Text>
        </MostSoldInnerContainer>
        <Text>---</Text>
        <SvgXml xml={starSilver} width={30} height={30} />
      </MostSoldContainer>
      }
      
      <Spacer position="bottom" size="large" />
      
    </DashboardMostSold>
  )
}