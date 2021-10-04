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
const Graph = ({ dataFeed }) => {
  console.log(dataFeed);
  return (
    <View
      style={{
        alignItems: "center",
        height: Dimensions.get("window").height,
        padding: 15,
      }}
    >
      <Text>Covid-19 Cases for the past 30 days</Text>

      {dataFeed?.length > 0 && (
        <LineChart
          data={{
            datasets: [
              {
                data: dataFeed,
              },
            ],
          }}
          width={Dimensions.get("window").width - 50} // from react-native
          height={500}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#6eb9ff",
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
          withHorizontalLabels={false}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 50,
          }}
          hideLegend={true}
          style={{
            width: "100%",
            height: "100%",
            paddingRight: 0,
            borderRadius: 50,
            paddingBottom: 0,
            alignItems: "center",
            paddingTop: 20,
          }}
          withInnerLines={false}
        />
      )}
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({});
