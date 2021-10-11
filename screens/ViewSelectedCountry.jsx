import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  buildCasesData,
  buildDeathsData,
} from "../components/Home/buildGraphs";
import FormatNumber from "../components/Home/FormatNumber";
import Graph from "../components/Home/Graph";

const ViewSelectedCountry = ({ route }) => {
  const [casesGraph, setCasesGraph] = useState([]);
  const [deathGraph, setDeathGraph] = useState([]);
  const countryData = route.params.countryData;
  const [isLoading, setIsLoading] = useState(true);

  let total =
    countryData.cases +
    countryData.recovered +
    countryData.deaths +
    countryData.active;
  let cases = (countryData.cases / total) * 100;
  let recovered = (countryData.recovered / total) * 100;
  let deaths = (countryData.deaths / total) * 100;
  let active = (countryData.active / total) * 100;

  useEffect(() => {
    const getGraphData = async () => {
      try {
        const url2 = `https://disease.sh/v3/covid-19/historical/${countryData.countryInfo.iso3}?lastdays=120`;
        await fetch(url2)
          .then((response) => response.json())
          .then((data) => {
            let casesData = buildCasesData(data.timeline);
            setCasesGraph(casesData);

            let deathData = buildDeathsData(data.timeline);

            setDeathGraph(deathData);
          });
        setIsLoading(false);
      } catch (error) {
        setDeathGraph(null);
        setCasesGraph(null);
      }
    };

    getGraphData();
  }, []);

  console.log(deathGraph);
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardHeading}>
              {countryData.country} Statistics
            </Text>

            <View style={styles.totalCases}>
              <FormatNumber number={countryData.cases} color="black" />
              <Text style={styles.normalText}> Total Cases</Text>
            </View>

            <View style={styles.bar}>
              <View
                style={{
                  width: `${cases}%`,
                  height: "100%",
                  backgroundColor: "orange",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              ></View>
              <View
                style={{
                  width: `${recovered}%`,
                  height: "100%",
                  backgroundColor: "green",
                }}
              ></View>
              <View
                style={{
                  width: `${active}%`,
                  height: "100%",
                  backgroundColor: "#06ffde",
                }}
              ></View>
              <View
                style={{
                  width: `${deaths}%`,
                  height: "100%",
                  backgroundColor: "red",
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                }}
              ></View>
            </View>

            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "orange",
                    borderRadius: 5,
                    marginRight: 15,
                  }}
                ></View>
                <Text>Cases</Text>
              </View>

              <View style={styles.rowRight}>
                <FormatNumber number={countryData.cases} color="black" />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "green",
                    borderRadius: 5,
                    marginRight: 15,
                  }}
                ></View>
                <Text>Recoveries</Text>
              </View>

              <View style={styles.rowRight}>
                <FormatNumber number={countryData.recovered} color="black" />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "red",
                    borderRadius: 5,
                    marginRight: 15,
                  }}
                ></View>
                <Text>Deaths</Text>
              </View>

              <View style={styles.rowRight}>
                <FormatNumber number={countryData.deaths} color="black" />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#06ffde",
                    borderRadius: 5,
                    marginRight: 15,
                  }}
                ></View>
                <Text>Active Cases</Text>
              </View>

              <View style={styles.rowRight}>
                <FormatNumber number={countryData.active} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.graphContainer}>
          {casesGraph?.length !== 0 && casesGraph !== null && (
            <View style={styles.graphHeadingContainer}>
              <Text style={styles.graphHeading}> Deaths - Past 30 Days </Text>
            </View>
          )}
          {deathGraph?.length === 0 && (
            <View>
              <ActivityIndicator size="large" color="#00ff00" />
              <Text>Loading...</Text>
            </View>
          )}

          {deathGraph === null && (
            <View>
              <Text>No Data...</Text>
            </View>
          )}
          <Graph dataFeed={deathGraph} color={"red"} />
        </View>

        <View style={styles.graphContainer}>
          {casesGraph?.length !== 0 && casesGraph !== null && (
            <View style={styles.graphHeadingContainer}>
              <Text style={styles.graphHeading}> Cases - Past 30 Days </Text>
            </View>
          )}
          {casesGraph?.length === 0 && (
            <View>
              <ActivityIndicator size="large" color="#00ff00" />
              <Text>Loading...</Text>
            </View>
          )}

          {casesGraph === null && (
            <View>
              <Text>No Data...</Text>
            </View>
          )}
          <Graph dataFeed={casesGraph} color={"orange"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewSelectedCountry;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0d131a",
    flex: 1,
  },
  cardHeading: {
    fontSize: 25,
    color: "grey",
    fontWeight: "bold",
  },
  cardContainer: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  totalCases: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  bar: {
    width: "100%",
    height: 15,
    flexDirection: "row",
    marginVertical: 10,
  },

  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  graphContainer: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "aliceblue",
    padding: 10,
    elevation: 5,
    borderRadius: 20,
  },
  graphHeadingContainer: {
    width: "100%",
  },
  graphHeading: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
