import React, { useContext, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { ItemInfoCard } from "../../components/item-info-card/item-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import {Text} from "../../../../components/typography/text.component";
import { SearchContainer, ItemList, ItemManagement, Arrow } from "./item-screen.styles";
import { ItemContext } from "../../context/item.context";
import { FadeInView } from "../../../../components/animations/fade.animation";
import { IsLoading } from "../../../../components/loading/loading.component";

export const ItemScreen = ({ navigation }) => {
  const { items } = useContext(ItemContext);
  const [data, setData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      
    }, [])
  );

  return (
    <SafeArea>

      {/* <IsLoading /> */}
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
    
      <ItemList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ItemDetails", {
            item: item,
          })}>
            <Spacer position="bottom" size="large">
              <FadeInView>
                <ItemInfoCard item={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
       <ItemManagement onPress={() => navigation.navigate("ItemManagement")}>
          <Text color="white" variant="label">Manage Items</Text>
          <Arrow name="up" />
        </ItemManagement>
    </SafeArea>
  );
};