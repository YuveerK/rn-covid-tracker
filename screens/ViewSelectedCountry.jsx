import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
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
import CasesOverTime from "../components/Home/CasesOverTime";
import MapView, { Marker } from "react-native-maps";
import { Circle } from "react-native-maps";
import ProgressCircle from "../components/Home/ProgressCircleComponent";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ProgressChart } from "react-native-chart-kit";

const ViewSelectedCountry = ({ route }) => {
  const [casesGraph, setCasesGraph] = useState([]);
  const [deathGraph, setDeathGraph] = useState([]);
  const countryData = route.params.countryData;
  const countryInfo = route.params.countryData.countryInfo;
  const [isLoading, setIsLoading] = useState(true);
  const windowWidth = Dimensions.get("window").width;

  let total =
    countryData.cases +
    countryData.recovered +
    countryData.deaths +
    countryData.active;
  let cases = (countryData.cases / total) * 100;
  let recovered = (countryData.recovered / total) * 100;
  let deaths = (countryData.deaths / total) * 100;
  let active = (countryData.active / total) * 100;
  const LATITUDE_DELTA = 0.3; //Increase or decrease the zoom level dynamically
  const LONGITUDE_DELTA = LATITUDE_DELTA * 100;

  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [
      countryData.recovered / countryData.active,
      countryData.deaths / countryData.active,
    ],
  };

  useEffect(() => {
    const getGraphData = async () => {
      try {
        const url2 = `https://disease.sh/v3/covid-19/historical/${countryData.countryInfo.iso3}?lastdays=90`;
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

  const buildChartData = (data) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data["cases"][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data["cases"][date];
    }
    return chartData;
  };

  console.log(countryInfo);
  return (
    <View style={[styles.mainContainer, { padding: 0 }]}>
      <ScrollView>
        <Text style={[styles.heading1, { marginBottom: 15, padding: 10 }]}>
          {countryData.country} - Coronavirus Cases
        </Text>
        {countryInfo && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: countryInfo.lat,
              longitude: countryInfo.long,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            scrollEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: countryInfo.lat,
                longitude: countryInfo.long,
              }}
              title={countryData.country}
              description={countryData.cases.toString()}
            />
          </MapView>
        )}
        <View style={styles.mainContainer}>
          <View style={styles.generalContainer}>
            <Text style={styles.heading2}>Total Confirmed Cases</Text>

            <FormatNumber
              number={countryData.cases}
              color="#364A63"
              size={30}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.row}>
              <View>
                <Text style={styles.subHeading}>Recovered</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FormatNumber
                    number={countryData.recovered}
                    color="#1EE0AC"
                    size={30}
                    fontweight="300"
                  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ProgressCircle
                    color="#1EE0AC"
                    percent={Number(
                      (countryData.recovered / countryData.cases) * 100
                    ).toFixed(1)}
                    text={Number(
                      (countryData.recovered / countryData.cases) * 100
                    ).toFixed(1)}
                    icon={
                      <FontAwesome5
                        name="praying-hands"
                        size={18}
                        color="#1EE0AC"
                      />
                    }
                  />
                </View>
              </View>

              <View>
                <Text style={styles.subHeading}>Deaths</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FormatNumber
                    number={countryData.recovered}
                    color="#E85347"
                    size={30}
                    fontweight="300"
                  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ProgressCircle
                    percent={Number(
                      (countryData.deaths / countryData.cases) * 100
                    ).toFixed(1)}
                    color="red"
                    text={Number(
                      (countryData.deaths / countryData.cases) * 100
                    ).toFixed(1)}
                    icon={
                      <FontAwesome5
                        name="heartbeat"
                        size={24}
                        color="#E85347"
                      />
                    }
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.row}></View>

          <View style={styles.generalContainer}>
            <Text style={styles.heading2}>Currently Active Cases</Text>
            <FormatNumber
              number={countryData.active}
              color="#364A63"
              size={30}
              fontweight="300"
            />
          </View>

          <View style={styles.generalContainer}>
            <Text style={styles.subHeading}>In Mild or Serious Condition</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FormatNumber
                number={countryData.active - countryData.critical}
                color="#816BFF"
                size={30}
                fontweight="300"
              />
              <Text style={[styles.generalText, { marginLeft: 10 }]}>
                {(
                  ((countryData.active - countryData.critical) /
                    countryData.active) *
                  100
                ).toFixed(1)}
                %
              </Text>
            </View>
          </View>

          <View style={[styles.generalContainer, { marginVertical: 5 }]}>
            <Text style={styles.subHeading}>Serious or Critical</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FormatNumber
                number={countryData.critical}
                color="#F4BD0E"
                size={30}
                fontweight="300"
              />
              <Text style={[styles.generalText, { marginLeft: 10 }]}>
                {((countryData.critical / countryData.active) * 100).toFixed(1)}
                %
              </Text>
            </View>
          </View>

          <View style={styles.graphContainer}>
            {casesGraph === null ? (
              <Text> No Data </Text>
            ) : (
              <CasesOverTime
                heading="Cases Over Time"
                subheading={countryData.country}
                graphData={casesGraph}
                subheading2="The graph below shows a timelines of cases for the past 3 months (90 days)"
                color="orange"
              />
            )}
          </View>

          <View style={styles.graphContainer}>
            {deathGraph === null ? (
              <Text> No Data </Text>
            ) : (
              <CasesOverTime
                heading="Deaths Over Time"
                subheading={countryData.country}
                graphData={deathGraph}
                subheading2="The graph below shows a timelines of deaths for the past 3 months (90 days)"
                color="#E85347"
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewSelectedCountry;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
  graphContainer: {
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  heading1: {
    color: "#364A63",
    fontWeight: "bold",
    fontSize: 20,
  },
  heading2: {
    color: "#364A63",
    fontWeight: "bold",
    fontSize: 18,
  },
  generalContainer: {
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  subHeading: {
    color: "grey",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
  generalText: {
    color: "grey",
    fontSize: 18,
  },
  map: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});
