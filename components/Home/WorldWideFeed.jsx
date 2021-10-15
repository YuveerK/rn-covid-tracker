import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NumberFormat from "react-number-format";
import ProgressCircle from "react-native-progress-circle";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import FormatNumber from "./FormatNumber";
import WorldWideCard from "./WorldWideCard";
import TopTenCountryCard from "./TopTenCountryCard";
import CasesOverTime from "./CasesOverTime";
import SouthAfricaCard from "./SouthAfricaCard";

const WorldWideFeed = ({ navigation }) => {
  const [globalStats, setGlobalStats] = useState([]);
  const [globalGraph, setGlobalGraph] = useState([]);
  const [globalGraph2, setGlobalGraph2] = useState([]);
  const [countries, setCountries] = useState([]);
  const [sa, setSa] = useState([]);
  const [continents, setContinents] = useState([]);
  const [text, onChangeText] = useState("");
  //================================================================= Use Effects ==========================================================

  //get all stats world wide
  useEffect(() => {
    const getStats = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setGlobalStats(data);
        });
    };
    getStats();
  }, []);

  //get country stats
  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then((response) => response.json())
        .then((data) => {
          setCountries(data);
        });
    };
    getCountries();
  }, []);

  // get continent stats
  useEffect(() => {
    const getContinentStats = async () => {
      await fetch("https://disease.sh/v3/covid-19/continents")
        .then((response) => response.json())
        .then((data) => {
          setContinents(data);
        });
    };
    getContinentStats();
  }, []);

  //build graph data
  useEffect(() => {
    const getChartData = async () => {
      try {
        await fetch(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        )
          .then((response) => response.json())
          .then((data) => {
            let chartData = buildChartData(data);
            setGlobalGraph(chartData);

            let chartData2 = buildChartData2(data);
            setGlobalGraph2(chartData2);
          });
      } catch (error) {
        setGlobalGraph(null);
      }
    };
    getChartData();
  }, []);

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

  const buildChartData2 = (data) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = data["cases"][date];
        chartData.push(newDataPoint);
      }
      lastDataPoint = data["cases"][date];
    }
    return chartData;
  };

  const date = new Date();

  return (
    <>
      <View
        style={{
          width: "100%",
          height: 100,
          marginTop: StatusBar.currentHeight,
        }}
      >
        <Image
          source={require("../../assets/home.png")}
          style={{
            width: "100%",
            height: 100,
            resizeMode: "contain",
            paddingTop: 20,
          }}
        />
      </View>
      <View style={[styles.container, { marginTop: 0 }]}>
        <View style={styles.generalContainer}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            COVID-19 Coronavirus Tracker
          </Text>
          <Text style={{ fontStyle: "italic", color: "grey" }}>
            Updated: {date.toString()}
          </Text>
        </View>

        <WorldWideCard globalStats={globalStats} />

        <SouthAfricaCard globalStats={sa} />

        <TopTenCountryCard
          globalStats={globalStats}
          countryStats={countries}
          navigation={navigation}
        />

        <CasesOverTime globalStats={globalStats} graphData={globalGraph} />
      </View>
    </>
  );
};

export default WorldWideFeed;

const styles = StyleSheet.create({
  generalContainer: {
    width: "100%",
    paddingVertical: 10,
  },

  container: {
    width: "100%",
    flex: 1,
    padding: 10,
    marginTop: StatusBar.currentHeight,
  },
});
