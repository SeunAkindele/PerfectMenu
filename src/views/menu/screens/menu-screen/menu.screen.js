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

export const MenuScreen = ({ navigation }) => {
  const { menu, setMenu, menuBackUp, getMenu, getCartNum, cartNum, loading, setLoading } = useContext(MenuContext);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      setTimeout(() => { 
        getMenu();
        getCartNum();
        setLoading(false);
      }, 3000);
    }, [])
  );

  const refresh = () => {
    setLoading(true);
    setTimeout(() => { 
      getMenu();
      getCartNum();
      setLoading(false);
    }, 3000);
  }

  const search = (text) => {
    setMenu(menuBackUp.filter(item => item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
  }

  return (
    <SafeArea>
      <IsLoading loading={loading} />
      <SearchContainer>
        <Searchbar placeholder="Search" onChangeText={(text) => search(text)} />
      </SearchContainer>
      <Cart name="shoppingcart" />
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
      {menu !== null
        &&
        strlen(menu) > 0
        ?
        <>
          <MenuList
            data={menu}
            keyExtractor={(item) => item.id}
            onRefresh={refresh}
            refreshing={loading}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => item.disabled_status == 0 ? navigation.navigate("MenuDetail", { menu: item }) : alert("This menu is unavailable for now.")} key={item.id}>
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
        
          menu === null
          &&
        <MenuList
            data={[{id: 1}]}
            keyExtractor={(item) => item.id}
            onRefresh={refresh}
            refreshing={loading}
            renderItem={({ item }) => (
              <ErrorContainer>
             
                  <Spacer position="bottom" size="large">
                    <Text variant="error">No Data Yet</Text>
                  </Spacer>
                  <MenuIcon bg="#ccc" icon="cart-off" />
                
             
            </ErrorContainer>
            )}
          />
       } 
    </SafeArea>
  );
};