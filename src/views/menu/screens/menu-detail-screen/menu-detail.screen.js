import React, {useState} from "react";
import{ SvgXml } from "react-native-svg";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { OrderButton, Rating } from "./menu-detail-screen.styles";
import { MenuInfoCard } from "../../components/menu-info-card/menu-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { strlen, ucFirst } from "../../../../components/utility/functions";
import { Text } from "../../../../components/typography/text.component";
import star from "../../../../../assets/star";

export const MenuDetailScreen = ({ route }) => {

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const { menu } = route.params;
  const ratingArray = Array.from(new Array(Math.floor(5)));

  return (
    <>
      <MenuInfoCard menu={menu} />
      <ScrollView>
        {
          menu.ingredients && strlen(menu.ingredients) > 0
          ?
          <List.Accordion
            title="Ingredients"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
          {menu.ingredients.map((item, i) => 
            <List.Item key={i} title={`${ucFirst(item.name)}`} />
          )}
          </List.Accordion>
          :
          <Spacer position="left" size="large">
            <Spacer position="top" size="large" />
            <Text>No ingredients</Text>
          </Spacer>
        }
         <Spacer position="left" size="large">
          <Spacer position="top" size="large" />
          <Rating>
            {ratingArray.map((__,item) => (
              <SvgXml onPress={() => alert(item + 1)} xml={star} width={30} height={30} />
            ))}
          </Rating>
          <Spacer position="bottom" size="small" />
          <Text>Rate {ucFirst(menu.name)}</Text>
        </Spacer>

      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton onPress={() => alert("Add")} mode="contained">ADD TO CART</OrderButton>
      </Spacer>
    </>
  )
}