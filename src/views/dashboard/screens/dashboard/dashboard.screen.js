import React, {useContext, useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { LoginContext } from '../../../account/context/login.context';
import { DashboardContainer, DashboardCardCover } from "./dashboard.screen.styles";
import {Profile} from "../../components/profile/profile.component";
import { Sales } from "../../components/sales/sales.component";
import { FadeInView } from "../../../../components/animations/fade.animation";
import { IsLoading } from "../../../../components/loading/loading.component";
import { ErrorContainer } from "../../../../components/utility/error.component.styles";
import { DashboardContext } from "../../context/dashboard.context";
import { Text } from "../../../../components/typography/text.component";
import { Order } from "../../components/order/order.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { MostSold } from "../../components/mostSold/most-sold.component";

export const DashboardScreen = ({navigation}) => {
  const { user, authorization } = useContext(LoginContext);
  const {  
    getDashboard, 
    loading,
    salesData,
    orderStatusData,
    mostSoldItem
  } = useContext(DashboardContext);

  const [loadData, setLoadData] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        getDashboard();
      }, 2000);
    }, [])
  );

  const refresh = () => {
    setLoadData(true);
    setTimeout(() => { 
      getDashboard();
      setLoadData(false);
    }, 2000);
  }

  return (
    <SafeArea>
      <IsLoading loading={loading} />
      {loading 
        ?
        <ErrorContainer>
          <Text variant="error">Fetching Data...</Text>
        </ErrorContainer>
        :
        <DashboardContainer
          data={[{id: 1}]}
          keyExtractor={(item) => item.id}
          onRefresh={refresh}
          refreshing={loadData}
          renderItem={({ item }) => (
            <FadeInView>
              <DashboardCardCover elevation={5}>
                <Profile user={user} />
                <Sales salesData={salesData} />
              </DashboardCardCover>
              <DashboardCardCover elevation={5}>
                <Order orderStatusData={orderStatusData} />
              </DashboardCardCover>
              {
                authorization == 2
                &&
                <DashboardCardCover elevation={5}>
                  <MostSold mostSoldData={mostSoldItem} />
                </DashboardCardCover>
              }
              <Spacer position="top" size="large" />
            </FadeInView>
          )}
        />
      }
    </SafeArea>
  )
}