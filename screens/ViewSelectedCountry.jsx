import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  buildCasesData,
  buildDeathsData,
  buildVaccineData,
} from "../components/Home/buildGraphs";
import FormatNumber from "../components/Home/FormatNumber";
import CasesOverTime from "../components/Home/CasesOverTime";
import MapView, { Marker } from "react-native-maps";
import ProgressCircle from "../components/Home/ProgressCircleComponent";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PieChart, ProgressChart } from "react-native-chart-kit";

const ViewSelectedCountry = ({ route }) => {
  const [casesGraph, setCasesGraph] = useState([]);
  const [deathGraph, setDeathGraph] = useState([]);
  const [globalVaccineData, setGlobalVaccineData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDescriptionData, setWeatherDescriptionData] = useState([]);
  const [vaccineGraph, setVaccineGraph] = useState([]);
  const [weatherWindData, setWeatherWindData] = useState([]);
  const [weatherMainDescriptionData, setWeatherMainDescriptionData] = useState(
    []
  );
  const [timeZone, setTimeZone] = useState([]);

  const countryData = route.params.countryData;
  const countryInfo = route.params.countryData.countryInfo;
  const [isLoading, setIsLoading] = useState(true);
  const windowWidth = Dimensions.get("window").width;

  const LATITUDE_DELTA = 0.3; //Increase or decrease the zoom level dynamically
  const LONGITUDE_DELTA = LATITUDE_DELTA * 100;

  useEffect(() => {
    const getTimeZone = async () => {
      try {
        const url2 = `http://api.geonames.org/timezoneJSON?lat=${countryInfo.lat}&lng=${countryInfo.long}&username=uvkalza`;
        await fetch(url2)
          .then((response) => response.json())
          .then((data) => {
            setTimeZone(data);
          });
      } catch (error) {
        setTimeZone(null);
      }
    };

    getTimeZone();
  }, []);

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

  //Get Vaccine Graph Data
  useEffect(() => {
    const getGraphData = async () => {
      try {
        const url2 = `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${countryInfo.iso3}?lastdays=30&fullData=false`;
        await fetch(url2)
          .then((response) => response.json())
          .then((data) => {
            let casesData = buildVaccineData(data);
            setVaccineGraph(casesData);
          });
        setIsLoading(false);
      } catch (error) {
        setVaccineGraph(null);
      }
    };

    getGraphData();
  }, []);

  useEffect(() => {
    const getGlobalVaccineData = async () => {
      try {
        await fetch(
          `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${countryData.countryInfo.iso3}?lastdays=1&fullData=false`
        )
          .then((response) => response.json())
          .then((data) => {
            setGlobalVaccineData(Object.values(data.timeline));
          });
      } catch (error) {}
    };
    getGlobalVaccineData();
  }, []);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${countryInfo.lat}&lon=${countryInfo.long}&units=metric&appid=9593eca72eb8c1dbf309188937a446d7`
        )
          .then((response) => response.json())
          .then((data) => {
            setWeatherData(data);
            setWeatherDescriptionData(data.weather[0]);
            setWeatherMainDescriptionData(data.main);
            setWeatherWindData(data.wind);
          });
      } catch (error) {}
    };
    getWeatherData();
  }, [countryInfo]);

  const buildPics = (description) => {
    switch (description) {
      case "clear sky":
        return require("../assets/clearsky.jpg");
      case "few clouds":
        return require("../assets/fewclouds.jpg");
      case "scattered clouds":
        return require("../assets/scatteredclouds.jpg");
      case "broken clounds":
        return require("../assets/brokenclouds.jpg");
      case "shower rain":
        return require("../assets/showerrain.jpg");
      case "rain":
        return require("../assets/rain.jpg");
      case "thunderstorm":
        return require("../assets/thunderstorm.jpg");
      case "snow":
        return require("../assets/snow.jpg");
      case "mist":
        return require("../assets/mist.jpeg");

      default:
        return;
    }
  };

  let vaccinePercentage = (globalVaccineData / countryData.population) * 100;
  let vaccineText =
    vaccinePercentage > 100 ? "100 >" : vaccinePercentage.toFixed(2);

  let thetotal = countryData.cases + countryData.recovered;
  let thecases = (countryData.cases / thetotal) * 100;
  let therecovered = (countryData.recovered / thetotal) * 100;

  let image = buildPics(weatherDescriptionData.description);

  const thedata = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  console.log(vaccineGraph);
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

        <View style={styles.weatherContainer}>
          <View style={styles.weatherContentContainer}>
            {Object.keys(weatherDescriptionData).length > 0 ? (
              <>
                <Text style={[styles.subHeading, { fontSize: 30 }]}>
                  {weatherDescriptionData.main}
                </Text>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${weatherDescriptionData.icon}@2x.png`,
                  }}
                />
                <Text style={[styles.subHeading, { fontSize: 30 }]}>
                  {weatherMainDescriptionData.temp}°C
                </Text>
              </>
            ) : (
              <View>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text>Loading...</Text>
              </View>
            )}

            {Object.keys(timeZone).length > 0 && timeZone.time && (
              <Text
                style={[
                  styles.subHeading,
                  { fontSize: 15, textAlign: "center" },
                ]}
              >
                Time in {countryData.country}:{" "}
                <Text style={{ fontWeight: "bold" }}>{timeZone.time} </Text>
              </Text>
            )}

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
                marginTop: 20,
              }}
            >
              {Object.keys(weatherWindData).length > 0 && (
                <Text style={[styles.subHeading, { fontWeight: "bold" }]}>
                  Wind: {weatherWindData.deg}° at {weatherWindData.speed} kts{" "}
                </Text>
              )}
              {Object.keys(weatherWindData).length > 0 && (
                <View
                  style={{
                    position: "relative",
                    padding: 20,
                    height: 80,
                    width: 80,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>N</Text>
                  </View>
                  <View
                    style={{
                      height: 80,
                      position: "absolute",
                      right: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>E</Text>
                  </View>
                  <View
                    style={{
                      width: 80,
                      position: "absolute",
                      bottom: 0,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>S</Text>
                  </View>
                  <View
                    style={{
                      height: 80,
                      position: "absolute",
                      left: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>W</Text>
                  </View>
                  <AntDesign
                    name="arrowup"
                    size={40}
                    color="black"
                    style={{
                      transform: [{ rotate: `${weatherWindData.deg}deg` }],
                      backgroundColor: "lightgrey",
                      borderRadius: 20,
                    }}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View
              style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1 }}
            >
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomColor: "lightgrey",
                  borderBottomWidth: 1,
                  paddingVertical: 5,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={styles.heading2}>Population</Text>

                  <FormatNumber
                    number={countryData.population}
                    color="black"
                    size={22}
                  />
                </View>

                <View>
                  <Text style={styles.heading2}>Total Confirmed Cases</Text>

                  <FormatNumber
                    number={countryData.cases}
                    color="black"
                    size={22}
                  />
                </View>
              </View>

              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    width: `${therecovered}%`,
                    height: 10,
                    backgroundColor: "#1EE0AC",
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }}
                ></View>
                <View
                  style={{
                    width: `${thecases}%`,
                    height: 10,
                    backgroundColor: "#ff7300",
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                  }}
                ></View>
              </View>
              <View
                style={[
                  styles.row,
                  {
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: 20,
                  },
                ]}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#1EE0AC",
                    marginRight: 10,
                  }}
                ></View>
                <Text>Recovered</Text>
              </View>

              <View
                style={[
                  styles.row,
                  {
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: 8,
                    marginBottom: 12,
                  },
                ]}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#ff7300",
                    marginRight: 10,
                  }}
                ></View>
                <Text>Cases</Text>
              </View>

              <Text>
                The ratio of{" "}
                <Text style={{ color: "#798BFF" }}>
                  (Recovery {therecovered.toFixed()}%)
                </Text>{" "}
                &{" "}
                <Text style={{ color: "#798BFF" }}>
                  (Cases {thecases.toFixed()}%){" "}
                </Text>
              </Text>
            </View>
            <View style={styles.row}>
              <View style={{ margin: 20 }}>
                <Text style={styles.subHeading}>Active</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FormatNumber
                    number={countryData.active}
                    color="orange"
                    size={30}
                    fontweight="300"
                  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ProgressCircle
                    color="orange"
                    percent={Number(
                      (countryData.active / countryData.cases) * 100
                    ).toFixed(1)}
                    text={Number(
                      (countryData.active / countryData.cases) * 100
                    ).toFixed(1)}
                    icon={
                      <Fontisto
                        name="radio-btn-active"
                        size={18}
                        color="orange"
                      />
                    }
                  />
                </View>
              </View>

              <View style={{ margin: 20 }}>
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

              <View style={{ margin: 20 }}>
                <Text style={styles.subHeading}>New Cases</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FormatNumber
                    number={countryData.todayCases}
                    color="#ff7300"
                    size={30}
                    fontweight="300"
                  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ProgressCircle
                    color="#ff7300"
                    percent={Number(
                      (countryData.todayCases / countryData.active) * 100
                    ).toFixed(1)}
                    text={Number(
                      (countryData.todayCases / countryData.active) * 100
                    ).toFixed(1)}
                    icon={
                      <AntDesign
                        name="addusergroup"
                        size={24}
                        color="#ff7300"
                      />
                    }
                  />
                </View>
              </View>

              <View style={{ margin: 20 }}>
                <Text style={styles.subHeading}>Vaccinated</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FormatNumber
                    number={globalVaccineData[0]}
                    color="#00ff15"
                    size={30}
                    fontweight="300"
                  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ProgressCircle
                    color="#00ff15"
                    percent={Number(
                      (globalVaccineData / countryData.population) * 100
                    ).toFixed(1)}
                    text={vaccineText}
                    icon={
                      <MaterialCommunityIcons
                        name="needle"
                        size={24}
                        color="#00ff15"
                      />
                    }
                  />
                </View>
              </View>

              <View style={{ margin: 20 }}>
                <Text style={styles.subHeading}>Critical</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FormatNumber
                    number={countryData.critical}
                    color="#F4BD0E"
                    size={30}
                    fontweight="300"
                  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ProgressCircle
                    color="#F4BD0E"
                    percent={Number(
                      (countryData.critical / countryData.active) * 100
                    ).toFixed(1)}
                    text={Number(
                      (countryData.critical / countryData.active) * 100
                    ).toFixed(1)}
                    icon={
                      <AntDesign name="warning" size={24} color="#F4BD0E" />
                    }
                  />
                </View>
              </View>

              <View style={{ margin: 20 }}>
                <Text style={styles.subHeading}>Mild</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FormatNumber
                    number={countryData.active - countryData.critical}
                    color="#816BFF"
                    size={30}
                    fontweight="300"
                  />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ProgressCircle
                    color="#816BFF"
                    percent={(
                      ((countryData.active - countryData.critical) /
                        countryData.active) *
                      100
                    ).toFixed(1)}
                    text={(
                      ((countryData.active - countryData.critical) /
                        countryData.active) *
                      100
                    ).toFixed(1)}
                    icon={
                      <MaterialCommunityIcons
                        name="hand-heart"
                        size={24}
                        color="#816BFF"
                      />
                    }
                  />
                </View>
              </View>

              <View style={{ margin: 20 }}>
                <Text style={styles.subHeading}>Deaths</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FormatNumber
                    number={countryData.deaths}
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

          <View style={styles.graphContainer}>
            {casesGraph === null ? (
              <Text> No Data </Text>
            ) : (
              <CasesOverTime
                heading="Cases Over Time"
                subheading={countryData.country}
                graphData={casesGraph}
                subheading2="The graph below shows a timeline of daily cases for the past 3 months (90 days)"
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
                subheading2="The graph below shows a timeline of daily deaths for the past 3 months (90 days)"
                color="#E85347"
              />
            )}
          </View>

          <View style={styles.graphContainer}>
            {vaccineGraph === null ? (
              <Text> No Data </Text>
            ) : (
              <CasesOverTime
                heading="Vaccines Administered Over Time"
                subheading={countryData.country}
                graphData={vaccineGraph}
                subheading2="The graph below shows a timeline of vaccines administered for the past 3 months (90 days)"
                color="#37ff00"
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
  weatherContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  weatherContentContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 20,
  },
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
    justifyContent: "space-around",
    flexWrap: "wrap",
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
