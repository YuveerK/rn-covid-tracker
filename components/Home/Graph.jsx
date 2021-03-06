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
const Graph = ({ dataFeed, color }) => {
  return (
    <View
      style={{
        padding: 15,
      }}
    >
      {dataFeed?.length > 0 && (
        <LineChart
          onDataPointClick={({ index }) => console.log(dataFeed[index])}
          data={{
            datasets: [
              {
                data: dataFeed,
              },
            ],
          }}
          width={Dimensions.get("window").width - 60} // from react-native
          height={250}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `${color ? color : "black"}`,
            strokeWidth: 1, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false, // optional
            propsForHorizontalLabels: {
              fontSize: 7,
            },
            propsForHorizontalLabels: {
              fontSize: 13,
              transform: [{ rotate: "90deg" }],
            },
            propsForVerticalLabels: {
              fontSize: 9,
            },
            propsForDots: {
              r: "0",
              strokeWidth: "0",
              stroke: "rgba(255, 255, 255, 0.1)",
            },
            decimalPlaces: 0,
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 50,
          }}
          style={{
            alignItems: "center",
            borderRadius: 20,
            marginTop: 50,
          }}
          withInnerLines={false}
        />
      )}
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({});
