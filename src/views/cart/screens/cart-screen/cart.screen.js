import React, { useContext } from 'react';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { CartInfoCard } from "../../components/cart-info-card/cart-info-card.component";
import { CartContainer, CartIcon, CartList, CartCallToAction, Arrow } from './cart.screen.styles';
import { CartContext } from "../../context/cart.context";
import {Text} from "../../../../components/typography/text.component";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const CartScreen = ({navigation}) => {
  const { cart, total, qty } = useContext(CartContext);
  
  return (
    <SafeArea>
      {cart === "" 
      ? <CartContainer>
          <CartIcon bg="#ccc" icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartContainer>
      : <>
          <CartList
            data={cart}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <CartInfoCard cart={item} />
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
          />
          <CartCallToAction onPress={() => navigation.navigate("CartSummary", {
                cart: cart,
              })}>
            <Text color="white" variant="label">Proceed to Checkout</Text>
            <Arrow name="up" />
          </CartCallToAction>
        </>
        }
    </SafeArea>
  )
};