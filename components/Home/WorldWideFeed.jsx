import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NumberFormat from "react-number-format";
import ProgressCircle from "react-native-progress-circle";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import globalTable from "./GlobalTable";
import GlobalTable from "./GlobalTable";
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
  console.log(continents);
  //============================================================================================================================================
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/home-banner.jpg")}
        style={{ width: "100%", height: 250, resizeMode: "cover" }}
      />
      <View style={styles.theContainer}>
        <Text style={styles.headingRoot}> Global </Text>
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
                <Text style={{ fontSize: 20, color: "white" }}>
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
                <Text style={{ fontSize: 20, color: "white" }}>
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
                color="skyblue"
              />
            </View>
            <NumberFormat
              value={globalStats.active}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(formattedValue) => (
                <Text style={{ fontSize: 20, color: "white" }}>
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
                <Text style={{ fontSize: 20, color: "white" }}>
                  {formattedValue}
                </Text>
              )} // <--- Don't forget this!
            />
          </View>
        </View>
      </View>

      <View style={styles.theContainer}>
        <View style={styles.continentStatsContainer}>
          <View style={styles.heading}>
            <Text style={styles.globalHeading}>Continent Stats</Text>
          </View>
          {continents.map((continent, index) => (
            <View
              style={[
                styles.card,
                {
                  backgroundColor: "#161C23",
                  width: "100%",
                },
              ]}
              key={index}
            >
              <View style={styles.headingContainer}>
                <Text style={{ color: "lightgrey" }}>
                  {continent.continent}
                </Text>
              </View>

              <View style={styles.casesContainer}>
                <View style={styles.field}>
                  <View style={styles.continentCard}>
                    <Text style={styles.casesHeadingTextRoot}>Cases</Text>
                    <NumberFormat
                      value={continent.cases}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(formattedValue) => (
                        <Text style={{ fontSize: 20, color: "white" }}>
                          {formattedValue}
                        </Text>
                      )} // <--- Don't forget this!
                    />
                    <View style={styles.circle}>
                      <ProgressCircle
                        percent={Number(
                          (continent.cases / continent.population) * 100
                        ).toFixed(2)}
                        radius={40}
                        borderWidth={2}
                        color="#3399FF"
                        shadowColor="#ebebeb"
                        bgColor="#fff"
                      >
                        <Text style={{ fontSize: 20, textAlign: "center" }}>
                          {Number(
                            (continent.cases / continent.population) * 100
                          ).toFixed(2)}
                          %
                        </Text>
                      </ProgressCircle>
                    </View>
                  </View>

                  <View style={styles.continentCard}>
                    <Text style={styles.casesHeadingTextRoot}>Deaths</Text>
                    <NumberFormat
                      value={continent.deaths}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(formattedValue) => (
                        <Text style={{ fontSize: 20, color: "white" }}>
                          {formattedValue}
                        </Text>
                      )} // <--- Don't forget this!
                    />

                    <View style={styles.circle}>
                      <ProgressCircle
                        percent={Number(
                          (continent.deaths / continent.cases) * 100
                        ).toFixed(2)}
                        radius={40}
                        borderWidth={2}
                        color="#3399FF"
                        shadowColor="#ebebeb"
                        bgColor="#fff"
                      >
                        <Text style={{ fontSize: 20, textAlign: "center" }}>
                          {Number(
                            (continent.deaths / continent.cases) * 100
                          ).toFixed(2)}
                          %
                        </Text>
                      </ProgressCircle>
                    </View>
                  </View>

                  <View style={styles.continentCard}>
                    <Text style={styles.casesHeadingTextRoot}>Recoveries</Text>
                    <NumberFormat
                      value={continent.recovered}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(formattedValue) => (
                        <Text style={{ fontSize: 20, color: "white" }}>
                          {formattedValue}
                        </Text>
                      )} // <--- Don't forget this!
                    />

                    <View style={styles.circle}>
                      <ProgressCircle
                        percent={Number(
                          (continent.recovered / continent.cases) * 100
                        ).toFixed(2)}
                        radius={40}
                        borderWidth={2}
                        color="#3399FF"
                        shadowColor="#ebebeb"
                        bgColor="#fff"
                      >
                        <Text style={{ fontSize: 20, textAlign: "center" }}>
                          {Number(
                            (continent.recovered / continent.cases) * 100
                          ).toFixed(2)}
                          %
                        </Text>
                      </ProgressCircle>
                    </View>
                  </View>

                  <View style={styles.continentCard}>
                    <Text style={styles.casesHeadingTextRoot}>Recoveries</Text>
                    <NumberFormat
                      value={continent.tests}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(formattedValue) => (
                        <Text style={{ fontSize: 20, color: "white" }}>
                          {formattedValue}
                        </Text>
                      )} // <--- Don't forget this!
                    />

                    <View style={styles.circle}>
                      <ProgressCircle
                        percent={Number(
                          (continent.critical / continent.cases) * 100
                        ).toFixed(2)}
                        radius={40}
                        borderWidth={2}
                        color="#3399FF"
                        shadowColor="#ebebeb"
                        bgColor="#fff"
                      >
                        <Text style={{ fontSize: 20, textAlign: "center" }}>
                          {Number(
                            (continent.critical / continent.cases) * 100
                          ).toFixed(2)}
                          %
                        </Text>
                      </ProgressCircle>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <ProgressCircle
                  percent={Number(
                    ((continent.cases / continent.population) * 100).toFixed(2)
                  )}
                  radius={50}
                  borderWidth={4}
                  color="#FF4E72"
                  shadowColor="lightgrey"
                  bgColor="#000000"
                >
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {Number(
                      ((continent.cases / continent.population) * 100).toFixed(
                        2
                      )
                    )}
                    % infected
                  </Text>
                </ProgressCircle>
              </View>
            </View>
          ))}
        </View>
      </View>

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
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>View Full Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorldWideFeed;

const styles = StyleSheet.create({
  continentCard: {
    width: "50%",
    backgroundColor: "black",
    padding: 10,
    margin: 10,
  },

  casesHeadingTextRoot: {
    color: "white",
  },
  field: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 8,
    padding: 20,
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
    borderWidth: 1,
    backgroundColor: "black",
    justifyContent: "space-around",
    elevation: 8,
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
    color: "darkgrey",
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
