import React, {useState, useContext } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { MenuInfoCard } from "../../components/menu-info-card/menu-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { SearchContainer, MenuList, ErrorContainer, MenuIcon, Cart, CartCount,CartCountText } from "./menu-screen.styles";
import { MenuContext } from "../../context/menu.context";
import { FadeInView } from "../../../../components/animations/fade.animation";
import { IsLoading } from "../../../../components/loading/loading.component";
import { strlen } from "../../../../components/utility/functions";
import { Text } from "../../../../components/typography/text.component";
import { CartContext } from "../../../cart/context/cart.context";

export const MenuScreen = ({ navigation }) => {
  const { menu, getMenu } = useContext(MenuContext);
  const { cartNum } = useContext(CartContext);

  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getMenu();
        setLoading(false);
      }, 3000);
    }, [])
  );

  const search = (text) => {
    alert(text);
  }

  return (
    <SafeArea>
      <IsLoading loading={loading} />
      <SearchContainer>
        <Searchbar placeholder="Search" onChangeText={(text) => search(text)} />
      </SearchContainer>
      <Cart name="shoppingcart" onPress={() => null} />
      {cartNum > 0
        &&
        <CartCount>
          <CartCountText>{cartNum}</CartCountText>
        </CartCount>}
      {loading 
        &&
        <ErrorContainer>
          <Text variant="error">Fetching Data...</Text>
        </ErrorContainer>}
      {strlen(menu) > 1 && menu !== null
        ?
        <>
          <MenuList
            data={menu}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("MenuDetail", { menu: item })} key={item.id}>
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <MenuInfoCard menu={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            )}
          />
        </>
        :
        <ErrorContainer>
          {
            !loading && strlen(menu) < 1
            &&
            <>
              <Spacer position="bottom" size="large">
                <Text variant="error">No Data Yet</Text>
              </Spacer>
              <MenuIcon bg="#ccc" icon="cart-off" />
            </>
          }
        </ErrorContainer>}
    </SafeArea>
  );
};