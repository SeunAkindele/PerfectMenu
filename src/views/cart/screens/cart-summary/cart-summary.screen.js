import React, {useContext, useState} from 'react';
import { ScrollView } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Underline } from '../../../../components/underline/underline';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { CartSummaryContainer, CartSummaryList, CartSummaryWrapper, CartSummaryTotal, Online, Offline, CartSummarySubTotal } from './cart-summary.screen.styles';
import { Text } from '../../../../components/typography/text.component';
import { format } from '../../../../components/utility/functions';
import { OrderContext } from '../../../order/context/order.context';

export const CartSummaryScreen = ({route, navigation}) => {

  const {payOnDelivery} = useContext(OrderContext);

  const { cart, total, vat } = route.params;

  const delivery = 1000;
  
  const salesSum = parseInt(total) + parseInt(vat) + delivery;

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
            {
              cart.map((item, i) =>
                <CartSummaryList key={i}>
                  <Text variant="tag">{item.name}  ({item.qty} x ₦{format(item.price)})</Text>
                  <Text variant="tag">₦{format(item.amount)}</Text>
                </CartSummaryList>
              )
            }
            <Spacer position="bottom" size="small" />
            <Underline />
            <Spacer position="top" size="large" />
            <CartSummarySubTotal>
              <Text variant="tag">Sub total</Text>
              <Text variant="tag">₦{format(total)}</Text>
            </CartSummarySubTotal>
            <CartSummaryList>
              <Text variant="tag">VAT</Text>
              <Text variant="tag">₦{format(vat, 2)}</Text>
            </CartSummaryList>
            <CartSummaryList>
              <Text variant="tag">Delivery fee</Text>
              <Text variant="tag">₦{format(delivery)}</Text>
            </CartSummaryList>
            <Spacer position="top" size="medium" />
            <CartSummaryTotal>
              <Text variant="tag">Total</Text>
              <Text variant="tag">₦{format(salesSum)}</Text>
            </CartSummaryTotal>
            <Spacer position="top" size="medium" />
            <Online onPress={() =>  null}>
              <Text variant="tag" color="white">Pay Now</Text>
            </Online>
           
            <Spacer position="top" size="medium" />
            <Offline onPress={() => payOnDelivery(delivery, navigation)}>
              <Text color="white" variant="tag">Pay on Delivery</Text>
            </Offline>
          </CartSummaryWrapper>
        </ScrollView>
      </CartSummaryContainer>
    </SafeArea>
  )
};
