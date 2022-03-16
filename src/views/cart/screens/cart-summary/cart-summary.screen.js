import React from 'react';
import { ScrollView } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Underline } from '../../../../components/underline/underline';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { CartSummaryContainer, CartSummaryList, CartSummaryWrapper, CartSummaryTotal, Checkout } from './cart-summary.screen.styles';
import { Text } from '../../../../components/typography/text.component';

export const CartSummaryScreen = ({cart}) => {
  return (
    <SafeArea>
      <CartSummaryContainer>
        <ScrollView>
          <CartSummaryWrapper>
            <Spacer position="left" size="medium">
              <Text variant="tag">CART SUMMARY</Text>
            </Spacer>
            <Spacer position="bottom" size="medium" />
            <Spacer position="bottom" size="large" />

            <CartSummaryList>
              <Text variant="tag">Zuni Café  (5 x 100)</Text>
              <Text variant="tag">₦1,000</Text>
            </CartSummaryList>

            <Spacer position="bottom" size="small" />
            <Underline />
            <Spacer position="top" size="large" />

            <CartSummaryList>
              <Text variant="tag">VAT (Incl.)</Text>
              <Text variant="tag">₦30</Text>
            </CartSummaryList>
            <CartSummaryList>
              <Text variant="tag">Delivery Fee</Text>
              <Text variant="tag">₦500</Text>
            </CartSummaryList>
            <CartSummaryTotal>
              <Text variant="tag">Total</Text>
              <Text variant="tag">₦1,530</Text>
            </CartSummaryTotal>
            <Spacer position="top" size="large" />
            <Checkout>
              <Text variant="tag" color="white">CHECKOUT</Text>
            </Checkout>
          </CartSummaryWrapper>
        </ScrollView>
      </CartSummaryContainer>
    </SafeArea>
  )
};