import React from 'react';
import { ScrollView } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Underline } from '../../../../components/underline/underline';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { CustomerOrderSummaryContainer, CustomerOrderSummaryList, CustomerOrderSummaryWrapper, CustomerOrderSummaryTotal } from './customer-order-details.screen.styles';
import { Text } from '../../../../components/typography/text.component';

export const CustomerOrderDetailsScreen = ({customerOrder}) => {
  return (
    <SafeArea>
      <CustomerOrderSummaryContainer>
        <ScrollView>
          <CustomerOrderSummaryWrapper>
            <Spacer position="left" size="medium">
              <Text variant="tag">ORDER SUMMARY</Text>
            </Spacer>
            <Spacer position="bottom" size="medium" />
            <Spacer position="bottom" size="large" />

            <CustomerOrderSummaryList>
              <Text variant="tag">Zuni Café  (5 x 100)</Text>
              <Text variant="tag">₦1,000</Text>
            </CustomerOrderSummaryList>

            <Spacer position="bottom" size="small" />
            <Underline />
            <Spacer position="top" size="large" />

            <CustomerOrderSummaryList>
              <Text variant="tag">VAT (Incl.)</Text>
              <Text variant="tag">₦30</Text>
            </CustomerOrderSummaryList>
            <CustomerOrderSummaryList>
              <Text variant="tag">Delivery Fee</Text>
              <Text variant="tag">₦500</Text>
            </CustomerOrderSummaryList>
            <CustomerOrderSummaryTotal>
              <Text variant="tag">Total</Text>
              <Text variant="tag">₦1,530</Text>
            </CustomerOrderSummaryTotal>
            <Spacer position="top" size="large" />
            <Spacer position="left" size="medium">
              <Text variant="tag">CUSTOMER</Text>
            </Spacer>
            <CustomerOrderSummaryList>
              <Text variant="tag">Akindele Seun</Text>
              <Text variant="tag">09031838944</Text>
            </CustomerOrderSummaryList>
          </CustomerOrderSummaryWrapper>
        </ScrollView>
      </CustomerOrderSummaryContainer>
    </SafeArea>
  )
};