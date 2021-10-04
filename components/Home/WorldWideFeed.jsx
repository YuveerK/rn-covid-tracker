import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NumberFormat from "react-number-format";
import Graph from "./Graph";
import * as V from "victory";
import { VictoryBar } from "victory";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const WorldWideFeed = () => {
  const [globalStats, setGlobalStats] = useState([]);
  const [globalGraph, setGlobalGraph] = useState([]);
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);

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
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const theData = sortedData(data);
          setCountries(theData);
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
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30")
        .then((response) => response.json())
        .then((data) => {
          let chartData = buildChartData(data);
          setGlobalGraph(chartData);
        });
    };
    getChartData();
  }, []);
  //==========================================================================================================================================

  //===================================================================== Functions ==========================================================
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

  const sortedData = (data) => {
    const theSortedData = [...data];

    theSortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else {
        return 1;
      }
    });
    return theSortedData;
  };
  //============================================================================================================================================
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Text style={styles.cardHeading}>Total Cases</Text>
            <AntDesign name="adduser" size={24} color="#ffb24d" />
          </View>
          <NumberFormat
            value={globalStats.cases}
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
          <View style={styles.headingContainer}>
            <Text style={styles.cardHeading}>Recovered</Text>
            <FontAwesome5 name="praying-hands" size={24} color="green" />
          </View>
          <NumberFormat
            value={globalStats.recovered}
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
          <View style={styles.headingContainer}>
            <Text style={styles.cardHeading}>Active Cases</Text>
            <MaterialCommunityIcons
              name="chart-line-variant"
              size={24}
              color="orange"
            />
          </View>
          <NumberFormat
            value={globalStats.active}
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
          <View style={styles.headingContainer}>
            <Text style={styles.cardHeading}>Deaths</Text>
            <MaterialCommunityIcons
              name="chart-line-variant"
              size={24}
              color="orange"
            />
          </View>
          <NumberFormat
            value={globalStats.active}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(formattedValue) => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {formattedValue}
              </Text>
            )} // <--- Don't forget this!
          />
        </View>
      </View>

      <View style={styles.countriesListContainer}>
        <View style={styles.heading}>
          <Text style={styles.globalHeading}>Global Stats</Text>
        </View>
        <View style={styles.countriesListHeadings}>
          <View style={{ width: 120 }}>
            <Text style={{ fontWeight: "bold" }}>Countries</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Cases</Text>
            <Text style={{ fontWeight: "bold" }}>Recovered</Text>
            <Text style={{ fontWeight: "bold" }}>Deaths</Text>
          </View>
        </View>
        <ScrollView nestedScrollEnabled={true}>
          {countries?.length > 0 ? (
            countries.map((country, index) => (
              <View style={styles.countryListItem} key={index}>
                <View style={styles.countryListItemLeft}>
                  <Image
                    style={{
                      width: 50,
                      height: 35,
                      marginBottom: 10,
                      borderRadius: 10,
                    }}
                    source={{ uri: `${country.countryInfo.flag}` }}
                  />
                  <Text>
                    {index + 1}. {country.country}
                  </Text>
                </View>

                <View style={styles.statsItemContainer}>
                  <NumberFormat
                    value={country.cases}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                  <NumberFormat
                    value={country.recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                  <NumberFormat
                    value={country.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>
              </View>
            ))
          ) : (
            <Text> Loading... </Text>
          )}
        </ScrollView>
      </View>
      {/* <Graph dataFeed={globalGraph} /> */}

      <View style={styles.continentStatsContainer}>
        <View style={styles.heading}>
          <Text style={styles.globalHeading}>Continent Stats</Text>
        </View>
        {continents.map((continent, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.headingContainer}>
              <Text style={styles.cardHeading}>{continent.continent}</Text>
            </View>
            <NumberFormat
              value={continent.cases}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(formattedValue) => (
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {formattedValue}
                </Text>
              )} // <--- Don't forget this!
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default WorldWideFeed;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  statsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "40%",
    margin: 15,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  countriesListContainer: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#eee",
    marginTop: 30,
  },
  heading: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  globalHeading: {
    fontSize: 29,
  },
  countriesListHeadings: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 15,
  },
  countryListItem: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  countryListItemLeft: {
    width: 120,
  },
  statsItemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
  },
  headingContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cardHeading: {
    color: "darkgrey",
  },
  continentStatsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "#eee",
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
});
