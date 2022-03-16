import React from 'react';
import { ScrollView } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Underline } from '../../../../components/underline/underline';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { OrderSummaryContainer, OrderSummaryList, OrderSummaryWrapper, OrderSummaryTotal } from './order-details.screen.styles';
import { Text } from '../../../../components/typography/text.component';

export const OrderDetailsScreen = ({order}) => {
  return (
    <SafeArea>
      <OrderSummaryContainer>
        <ScrollView>
          <OrderSummaryWrapper>
            <Spacer position="left" size="medium">
              <Text variant="tag">ORDER SUMMARY</Text>
            </Spacer>
            <Spacer position="bottom" size="medium" />
            <Spacer position="bottom" size="large" />

            <OrderSummaryList>
              <Text variant="tag">Zuni Café  (5 x 100)</Text>
              <Text variant="tag">₦1,000</Text>
            </OrderSummaryList>

            <Spacer position="bottom" size="small" />
            <Underline />
            <Spacer position="top" size="large" />

            <OrderSummaryList>
              <Text variant="tag">VAT (Incl.)</Text>
              <Text variant="tag">₦30</Text>
            </OrderSummaryList>
            <OrderSummaryList>
              <Text variant="tag">Delivery Fee</Text>
              <Text variant="tag">₦500</Text>
            </OrderSummaryList>
            <OrderSummaryTotal>
              <Text variant="tag">Total</Text>
              <Text variant="tag">₦1,530</Text>
            </OrderSummaryTotal>
            <Spacer position="top" size="large" />
          </OrderSummaryWrapper>
        </ScrollView>
      </OrderSummaryContainer>
    </SafeArea>
  )
};