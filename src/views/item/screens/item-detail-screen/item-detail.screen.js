import React, {useState} from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { OrderButton } from "./item-detail-screen.styles";
import { ItemInfoCard } from "../../components/item-info-card/item-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const ItemDetailScreen = ({ route }) => {

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { item } = route.params;

  return (
    <>
      <ItemInfoCard item={item} />
      <ScrollView>
        <List.Accordion
          title="Ingredients"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton mode="contained">EDIT ITEM</OrderButton>
      </Spacer>
    </>
  )
}