import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
const CasesGraphScreen = ({ route, navigation }) => {
  const data = route.params.data;
  console.log(data);
  return (
    <View
      style={{
        alignItems: "center",
        height: Dimensions.get("window").height,
        padding: 15,
      }}
    >
      <Text>Covid-19 Cases for the past 30 days</Text>

      {data?.length > 0 && (
        <LineChart
          data={{
            datasets: [
              {
                data: data,
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={Dimensions.get("window").height}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#000000",
            backgroundGradientFromOpacity: 9,
            backgroundGradientTo: "#000000",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 0.9, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false, // optional
            propsForHorizontalLabels: {
              fontSize: 7,
            },
            propsForHorizontalLabels: {
              fontSize: 15,
              transform: [{ rotate: "90deg" }],
            },
            decimalPlaces: 0,
          }}
          bezier
          style={{
            marginVertical: 8,
          }}
        />
      )}
    </View>
  );
};

export default CasesGraphScreen;

const styles = StyleSheet.create({});
