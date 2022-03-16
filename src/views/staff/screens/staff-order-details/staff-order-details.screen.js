import React from 'react';
import { ScrollView } from 'react-native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Underline } from '../../../../components/underline/underline';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { StaffOrderSummaryContainer, StaffOrderSummaryList, StaffOrderSummaryWrapper, StaffOrderSummaryTotal } from './staff-order-details.screen.styles';
import { Text } from '../../../../components/typography/text.component';

export const StaffOrderDetailsScreen = ({staffOrder}) => {
  return (
    <SafeArea>
      <StaffOrderSummaryContainer>
        <ScrollView>
          <StaffOrderSummaryWrapper>
            <Spacer position="left" size="medium">
              <Text variant="tag">ORDER SUMMARY</Text>
            </Spacer>
            <Spacer position="bottom" size="medium" />
            <Spacer position="bottom" size="large" />

            <StaffOrderSummaryList>
              <Text variant="tag">Zuni Café  (5 x 100)</Text>
              <Text variant="tag">₦1,000</Text>
            </StaffOrderSummaryList>

            <Spacer position="bottom" size="small" />
            <Underline />
            <Spacer position="top" size="large" />

            <StaffOrderSummaryList>
              <Text variant="tag">VAT (Incl.)</Text>
              <Text variant="tag">₦30</Text>
            </StaffOrderSummaryList>
            <StaffOrderSummaryList>
              <Text variant="tag">Delivery Fee</Text>
              <Text variant="tag">₦500</Text>
            </StaffOrderSummaryList>
            <StaffOrderSummaryTotal>
              <Text variant="tag">Total</Text>
              <Text variant="tag">₦1,530</Text>
            </StaffOrderSummaryTotal>
            <Spacer position="top" size="large" />
            <Spacer position="left" size="medium">
              <Text variant="tag">CUSTOMER</Text>
            </Spacer>
            <StaffOrderSummaryList>
              <Text variant="tag">Akindele Seun</Text>
              <Text variant="tag">09031838944</Text>
            </StaffOrderSummaryList>
          </StaffOrderSummaryWrapper>
        </ScrollView>
      </StaffOrderSummaryContainer>
    </SafeArea>
  )
};