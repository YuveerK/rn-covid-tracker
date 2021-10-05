import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";

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
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card}>
        <Fontisto name="test-tube" size={24} color="#9c9c9c" />
        <Text style={styles.cardHeading}>Tests conducted as of Today</Text>
        <NumberFormat
          value={covidData.tests}
          displayType={"text"}
          thousandSeparator={true}
          renderText={(formattedValue) => (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {formattedValue}
            </Text>
          )} // <--- Don't forget this!
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("CasesGraph", {
            data: data,
          });
        }}
      >
        <AntDesign name="adduser" size={24} color="#ffb24d" />
        <Text style={styles.cardHeading}>Covid-19 Cases Today</Text>
        <NumberFormat
          value={covidData.todayCases}
          displayType={"text"}
          thousandSeparator={true}
          renderText={(formattedValue) => (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {formattedValue}
            </Text>
          )} // <--- Don't forget this!
        />
      </TouchableOpacity>

      <View style={styles.card}>
        <FontAwesome5 name="heartbeat" size={24} color="red" />
        <Text style={styles.cardHeading}>Covid-19 Deaths Today</Text>
        <NumberFormat
          value={covidData.todayDeaths}
          displayType={"text"}
          thousandSeparator={true}
          renderText={(formattedValue) => (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {formattedValue}
            </Text>
          )} // <--- Don't forget this!
        />
      </View>

      <View style={styles.card}>
        <FontAwesome5 name="praying-hands" size={24} color="green" />
        <Text style={styles.cardHeading}>Covid-19 Recoveries Today</Text>
        <NumberFormat
          value={covidData.todayRecovered}
          displayType={"text"}
          thousandSeparator={true}
          renderText={(formattedValue) => (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {formattedValue}
            </Text>
          )} // <--- Don't forget this!
        />
      </View>

      <View style={styles.card}>
        <Fontisto name="injection-syringe" size={24} color="blue" />
        <Text style={styles.cardHeading}>Covid-19 Vaccines as of Today</Text>
        <Text>{covidData.tests}</Text>
      </View>
    </View>
  );
};

export default CovidStats;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "red",
    justifyContent: "center",
  },
  card: {
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
  },
  cardHeading: {
    textAlign: "center",
  },
});
