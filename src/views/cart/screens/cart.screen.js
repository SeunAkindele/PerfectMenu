import React from 'react';

import { SafeArea } from "../../../components/utility/safe-area.component";

import { CartContainer, CartIcon } from './cart.screen.styles';
import {Text} from "../../../components/typography/text.component";

export const CartScreen = () => {
  return (
    <SafeArea>
      <CartContainer>
        <CartIcon bg="#ccc" icon="cart-off" />
        <Text>Your cart is empty!</Text>
      </CartContainer>
    </SafeArea>
  )
};