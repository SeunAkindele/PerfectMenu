import React, {useState} from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { OrderButton } from "./menu-detail-screen.styles";
import { MenuInfoCard } from "../../components/menu-info-card/menu-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const MenuDetailScreen = ({ route }) => {

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { menu } = route.params;

  return (
    <>
      <MenuInfoCard menu={menu} />
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
        <OrderButton mode="contained">ADD TO CART</OrderButton>
      </Spacer>
    </>
  )
}