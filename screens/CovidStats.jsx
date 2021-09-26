import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const CovidStats = ({ route, navigation }) => {
  const { itemId, otherParam, capital } = route.params;
  const [covidData, setCovidData] = useState([]);
  const [vaccineData, setVaccineData] = useState([]);
  let [data, setData] = useState([]);
  let [dataDate, setDataDate] = useState([]);

  const buildChartData = (data) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = data["cases"][date] - lastDataPoint;
        chartData.push(newDataPoint);
      }
      lastDataPoint = data["cases"][date];
    }
    return chartData;
  };

  const buildChartDateData = (data) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = date;
        chartData.push(newDataPoint);
      }
      lastDataPoint = data["cases"][date];
    }
    return chartData;
  };

  useEffect(() => {
    const test = async () => {
      await fetch(
        `https://disease.sh/v3/covid-19/countries/${itemId}?strict=true`
      )
        .then((response) => response.json())
        .then((data) => {
          setCovidData(data);
        });

      const url2 = `https://disease.sh/v3/covid-19/historical/${itemId}?lastdays=30`;

      await fetch(url2)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data.timeline);
          let chartDateData = buildChartDateData(data.timeline);
          setDataDate(chartDateData);
          setData(chartData);
        });
    };
    test();
  }, []);

  useEffect(() => {
    const test = async () => {
      await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${itemId}?lastdays=5&fullData=false
    `)
        .then((response) => response.json())
        .then((data) => {
          setVaccineData(data.timeline);
        });
    };
    test();
  }, []);

  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.card}>
        <Fontisto name="test-tube" size={24} color="#9c9c9c" />
        <Text>Tests conducted as of Today</Text>
        <Text>{covidData.tests}</Text>
      </View>
      <View style={styles.card}>
        <AntDesign name="adduser" size={24} color="#ffb24d" />
        <Text>Covid-19 Cases Today</Text>
        <Text>{covidData.todayCases}</Text>
      </View>
      <View style={styles.card}>
        <FontAwesome5 name="heartbeat" size={24} color="red" />
        <Text>Covid-19 Deaths Today</Text>
        <Text>{covidData.todayDeaths}</Text>
      </View>
      <View style={styles.card}>
        <FontAwesome5 name="praying-hands" size={24} color="green" />
        <Text>Covid-19 Recoveries Today</Text>
        <Text>{covidData.todayRecovered}</Text>
      </View>
      <View style={styles.card}>
        <Fontisto name="injection-syringe" size={24} color="blue" />
        <Text>Covid-19 Vaccines as of Today</Text>
        <Text>{covidData.tests}</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 500,
          padding: 15,
        }}
      >
        <Text>Bezier Line Chart</Text>

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
            height={500}
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
    </ScrollView>
  );
};

export default CovidStats;

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",

    marginBottom: 15,
  },
  card: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginVertical: 15,
  },
});
