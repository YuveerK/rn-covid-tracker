import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NumberFormat from "react-number-format";
import ProgressCircle from "react-native-progress-circle";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const WorldWideFeed = ({ navigation }) => {
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

  const genRandomColor = () => {
    let color = "";
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
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

  let continentCases = Number(
    ((continents.cases / continents.population) * 100).toFixed(2)
  );
  let continentdeaths = Number(
    ((continents.deaths / continents.cases) * 100).toFixed(2)
  );
  let continentRecoveries = Number(
    ((continents.recovered / continents.cases) * 100).toFixed(2)
  );
  let continentTests = Number(
    ((continents.tests / continents.population) * 100).toFixed(2)
  );
  let continentCritical = Number(
    ((continents.crtical / continents.cases) * 100).toFixed(2)
  );

  let color = genRandomColor();
  //============================================================================================================================================
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/home-banner.png")}
        style={{ width: "100%", height: 200, resizeMode: "cover" }}
      />
      <View style={styles.theContainer}>
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
                <Text style={{ fontSize: 20, color: "black" }}>
                  {formattedValue}
                </Text>
              )} // <--- Don't forget this!
            />
          </View>

          <View style={styles.card}>
            <View style={styles.headingContainer}>
              <Text style={styles.cardHeading}>Recovered</Text>
              <FontAwesome5 name="praying-hands" size={18} color="green" />
            </View>
            <NumberFormat
              value={globalStats.recovered}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(formattedValue) => (
                <Text style={{ fontSize: 20, color: "black" }}>
                  {formattedValue}
                </Text>
              )} // <--- Don't forget this!
            />
          </View>

          <View style={styles.card}>
            <View style={styles.headingContainer}>
              <Text style={styles.cardHeading}>Active</Text>
              <MaterialCommunityIcons
                name="chart-line-variant"
                size={24}
                color="skyblue"
              />
            </View>
            <NumberFormat
              value={globalStats.active}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(formattedValue) => (
                <Text style={{ fontSize: 20, color: "black" }}>
                  {formattedValue}
                </Text>
              )} // <--- Don't forget this!
            />
          </View>

          <View style={styles.card}>
            <View style={styles.headingContainer}>
              <Text style={styles.cardHeading}>Deaths</Text>
              <FontAwesome5 name="heartbeat" size={18} color="red" />
            </View>
            <NumberFormat
              value={globalStats.active}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(formattedValue) => (
                <Text style={{ fontSize: 20, color: "black" }}>
                  {formattedValue}
                </Text>
              )} // <--- Don't forget this!
            />
          </View>
        </View>
      </View>

      <View style={styles.theContainer}>
        <View style={styles.statsContainer}>
          {continents.map((continent, index) => (
            <View style={[styles.card, { width: "100%" }]} key={index}>
              <View style={styles.headingContainer}>
                <Text style={styles.cardHeading}>{continent.continent}</Text>
              </View>

              <View style={styles.informationContainer}>
                <View style={styles.left}>
                  <View style={styles.leftHeading}>
                    <Text style={styles.casesHeadingTextRoot}>Cases</Text>
                    <AntDesign name="adduser" size={24} color="#ffb24d" />
                  </View>

                  <NumberFormat
                    value={continent.cases}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text
                        style={{
                          fontSize: 20,
                          color: "black",
                          marginBottom: 15,
                        }}
                      >
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />

                  <View style={styles.progressContainer}>
                    <ProgressCircle
                      percent={Number(
                        (continent.cases / continent.population) * 100
                      )}
                      radius={40}
                      borderWidth={4}
                      color="#ff9900"
                      shadowColor="lightgrey"
                      bgColor="#F0F8FF"
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        {Number(
                          (continent.cases / continent.population) * 100
                        ).toFixed(2)}
                        %
                      </Text>
                    </ProgressCircle>
                  </View>
                </View>

                <View style={styles.left}>
                  <View style={styles.leftHeading}>
                    <Text style={styles.casesHeadingTextRoot}>Deaths</Text>
                    <FontAwesome5 name="heartbeat" size={18} color="red" />
                  </View>

                  <NumberFormat
                    value={continent.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text
                        style={{
                          fontSize: 20,
                          color: "black",
                          marginBottom: 15,
                        }}
                      >
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />

                  <View style={styles.progressContainer}>
                    <ProgressCircle
                      percent={Number(
                        (continent.deaths / continent.cases) * 100
                      )}
                      radius={40}
                      borderWidth={4}
                      color="#ff0000"
                      shadowColor="lightgrey"
                      bgColor="#F0F8FF"
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        {Number(
                          (continent.deaths / continent.cases) * 100
                        ).toFixed(2)}
                        %
                      </Text>
                    </ProgressCircle>
                  </View>
                </View>
              </View>

              <View style={styles.informationContainer}>
                <View style={styles.left}>
                  <View style={styles.leftHeading}>
                    <Text style={styles.casesHeadingTextRoot}>Recoveries</Text>
                    <FontAwesome5
                      name="praying-hands"
                      size={18}
                      color="green"
                    />
                  </View>

                  <NumberFormat
                    value={continent.recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text
                        style={{
                          fontSize: 20,
                          color: "black",
                          marginBottom: 15,
                        }}
                      >
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />

                  <View style={styles.progressContainer}>
                    <ProgressCircle
                      percent={Number(
                        (continent.recovered / continent.cases) * 100
                      )}
                      radius={40}
                      borderWidth={4}
                      color="#00ff15"
                      shadowColor="lightgrey"
                      bgColor="#F0F8FF"
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        {Number(
                          (continent.recovered / continent.cases) * 100
                        ).toFixed(2)}
                        %
                      </Text>
                    </ProgressCircle>
                  </View>
                </View>

                <View style={styles.left}>
                  <View style={styles.leftHeading}>
                    <Text style={styles.casesHeadingTextRoot}>Active</Text>
                    <AntDesign name="warning" size={18} color="red" />
                  </View>

                  <NumberFormat
                    value={continent.active}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text
                        style={{
                          fontSize: 20,
                          color: "black",
                          marginBottom: 15,
                        }}
                      >
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />

                  <View style={styles.progressContainer}>
                    <ProgressCircle
                      percent={Number(
                        (continent.active / continent.cases) * 100
                      )}
                      radius={40}
                      borderWidth={4}
                      color="#FF4E72"
                      shadowColor="lightgrey"
                      bgColor="#F0F8FF"
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        {Number(
                          (continent.active / continent.cases) * 100
                        ).toFixed(2)}
                        %
                      </Text>
                    </ProgressCircle>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: "100%",
          justifyContent: "center",
          backgroundColor: "#7e95af",
          alignItems: "center",
          padding: 20,
          marginTop: 20,
          borderRadius: 20,
        }}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Select a Country");
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Select a Country
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "100%",
          justifyContent: "center",
          backgroundColor: "#64f83f",
          alignItems: "center",
          padding: 20,
          marginTop: 20,
          borderRadius: 20,
        }}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Test", {
            countryInfo: countries,
          });
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          View Country Rankings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorldWideFeed;

const styles = StyleSheet.create({
  progressContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    width: "45%",
    backgroundColor: "#F0F8FF",
    padding: 15,
    borderRadius: 20,
    elevation: 5,
  },
  leftHeading: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  informationContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  continentCard: {
    width: "40%",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "black",
    justifyContent: "space-around",
    elevation: 8,
  },

  casesHeadingTextRoot: {
    color: "black",
  },
  field: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  casesContainer: {},
  theContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headingRoot: {
    color: "white",
    fontSize: 20,
  },
  container: {
    width: "100%",
    flex: 1,
  },
  statsContainer: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "40%",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "aliceblue",
    justifyContent: "space-around",
    elevation: 5,
  },

  heading: {
    width: "100%",
    backgroundColor: "#161C23",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  globalHeading: {
    fontSize: 29,
    color: "white",
  },

  headingContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cardHeading: {
    color: "black",
    fontSize: 15,
  },
  continentStatsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    backgroundColor: "black",
    marginTop: 20,
    padding: 20,
    justifyContent: "space-around",
  },
});
