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
  return (
    <View
      style={{
        alignItems: "center",
        padding: 15,
      }}
    >
      <Text>Covid-19 Cases for the past 30 days</Text>

      {dataFeed?.length > 0 && (
        <LineChart
          data={{
            labels: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ],

            datasets: [
              {
                data: dataFeed,
              },
            ],
          }}
          verticalLabelRotation={90} //Degree to rotate
          width={Dimensions.get("window").width - 40} // from react-native
          height={250}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 0.9, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false, // optional
            propsForHorizontalLabels: {
              fontSize: 7,
            },
            propsForHorizontalLabels: {
              fontSize: 9,
              transform: [{ rotate: "90deg" }],
            },
            propsForVerticalLabels: {
              fontSize: 9,
            },
            propsForDots: {
              r: "2",
              strokeWidth: "1",
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
            borderRadius: 10,
            alignItems: "center",
          }}
          withInnerLines={false}
        />
      )}
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({});
