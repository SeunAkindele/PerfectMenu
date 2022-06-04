import React, {useContext, useState} from "react";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import {Text} from "../../../../components/typography/text.component";
import { LoginContext } from '../../../account/context/login.context';
import { ucWord } from "../../../../components/utility/functions";
import { LineChart } from "react-native-chart-kit";
import { DashboardContainer, DashboardCardCover, DashboardProfile, User, DashboardProfileCover, DashboardSales } from "./dashboard.screen.styles";
import { Dimensions } from "react-native";

export const DashboardScreen = ({navigation}) => {

  const { user } = useContext(LoginContext);

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  return (
    <SafeArea>
      <DashboardContainer>
        <DashboardCardCover>
          <DashboardProfileCover>
            <Text variant="tag" color="black">Dashboard</Text>
            <DashboardProfile>
              <Text variant="small" color="black">{ucWord(user.name)}</Text>
              <User name="user-circle-o" />
            </DashboardProfile>
          </DashboardProfileCover>
          <DashboardSales>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            bezier
          />
          </DashboardSales>
        </DashboardCardCover>
      </DashboardContainer>
    </SafeArea>
  )
}