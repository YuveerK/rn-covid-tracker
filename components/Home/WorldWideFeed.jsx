import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NumberFormat from "react-number-format";
import ProgressCircle from "react-native-progress-circle";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const WorldWideFeed = () => {
  const [globalStats, setGlobalStats] = useState([]);
  const [globalGraph, setGlobalGraph] = useState([]);
  const [countries, setCountries] = useState([]);
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

  let casesPercentage = Number(
    ((globalStats.recovered / globalStats.cases) * 100).toFixed(2)
  );

  let deathPercentage = Number(
    ((globalStats.deaths / globalStats.cases) * 100).toFixed(2)
  );

  console.log(globalStats);
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

      <View style={styles.tableContainer}>
        <View style={styles.searchContainer}>
          <View>
            <AntDesign name="search1" size={24} color="black" />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <ScrollView horizontal={true}>
          <ScrollView nestedScrollEnabled={true}>
            <View style={styles.tableHeader}>
              <View style={styles.tableHeaderData}>
                <Text>Country</Text>
              </View>
              <View style={styles.tableHeaderData}>
                <Text>Cases</Text>
              </View>
              <View style={styles.tableHeaderData}>
                <Text>Today Cases</Text>
              </View>
              <View style={styles.tableHeaderData}>
                <Text>Deaths</Text>
              </View>
              <View style={styles.tableHeaderData}>
                <Text>Today Deaths</Text>
              </View>
              <View style={styles.tableHeaderData}>
                <Text>Recovered</Text>
              </View>
              <View style={styles.tableHeaderData}>
                <Text>Today Recovered</Text>
              </View>
              <View style={styles.tableHeaderData}>
                <Text>Active</Text>
              </View>
              <View style={styles.tableHeaderData}>
                <Text>Critical</Text>
              </View>

              <View style={styles.tableHeaderData}>
                <Text>Population</Text>
              </View>
            </View>

            {countries?.length === 0 ? (
              <ActivityIndicator
                size="large"
                color="#00ff00"
                animating={true}
              />
            ) : (
              countries
                .filter((country) => {
                  if (text === "") {
                    return country;
                  } else if (
                    country.country?.toLowerCase().includes(text?.toLowerCase())
                  ) {
                    return country;
                  }
                })
                .map((country, index) => (
                  <View style={styles.tableRow} key={index}>
                    <View style={styles.tableRowData}>
                      <Image
                        source={{
                          uri: `${country.countryInfo.flag}`,
                        }}
                        style={styles.countryFlag}
                      />
                      <Text>
                        {index + 1}. {country.country}
                      </Text>
                    </View>

                    <View style={styles.tableRowData}>
                      <NumberFormat
                        value={country.cases}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(formattedValue) => (
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {formattedValue}
                          </Text>
                        )} // <--- Don't forget this!
                      />
                    </View>
                    <View style={styles.tableRowData}>
                      <NumberFormat
                        value={country.todayCases}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(formattedValue) => (
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {formattedValue}
                          </Text>
                        )} // <--- Don't forget this!
                      />
                    </View>
                    <View style={styles.tableRowData}>
                      <NumberFormat
                        value={country.deaths}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(formattedValue) => (
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {formattedValue}
                          </Text>
                        )} // <--- Don't forget this!
                      />
                    </View>
                    <View style={styles.tableRowData}>
                      <NumberFormat
                        value={country.todayDeaths}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(formattedValue) => (
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {formattedValue}
                          </Text>
                        )} // <--- Don't forget this!
                      />
                    </View>
                    <View style={styles.tableRowData}>
                      <NumberFormat
                        value={country.recovered}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(formattedValue) => (
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {formattedValue}
                          </Text>
                        )} // <--- Don't forget this!
                      />
                    </View>
                    <View style={styles.tableRowData}>
                      <NumberFormat
                        value={country.todayRecovered}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(formattedValue) => (
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {formattedValue}
                          </Text>
                        )} // <--- Don't forget this!
                      />
                    </View>
                    <View style={styles.tableRowData}>
                      <NumberFormat
                        value={country.active}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(formattedValue) => (
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {formattedValue}
                          </Text>
                        )} // <--- Don't forget this!
                      />
                    </View>
                    <View style={styles.tableRowData}>
                      <NumberFormat
                        value={country.critical}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(formattedValue) => (
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {formattedValue}
                          </Text>
                        )} // <--- Don't forget this!
                      />
                    </View>
                    <View style={styles.tableRowData}>
                      <NumberFormat
                        value={country.population}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(formattedValue) => (
                          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            {formattedValue}
                          </Text>
                        )} // <--- Don't forget this!
                      />
                    </View>
                  </View>
                ))
            )}
          </ScrollView>
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
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <ProgressCircle
          percent={casesPercentage}
          radius={60}
          borderWidth={10}
          color="#3399FF"
          shadowColor="#ebebeb"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>
            {casesPercentage}% of the word recovered
          </Text>
        </ProgressCircle>

        <ProgressCircle
          percent={deathPercentage}
          radius={60}
          borderWidth={10}
          color="#3399FF"
          shadowColor="#ebebeb"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 18, textAlign: "center" }}>
            {deathPercentage}% of the word died
          </Text>
        </ProgressCircle>
      </View>
    </View>
  );
};

export default WorldWideFeed;

const styles = StyleSheet.create({
  tableContainer: {
    width: "100%",
    height: 500,
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  countryFlag: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  tableHeaderData: {
    width: 120,
    padding: 15,

    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableRowData: {
    width: 120,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
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
