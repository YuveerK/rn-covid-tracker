import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import FormatNumber from "./FormatNumber";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ContinentCard2 = ({ continentStats }) => {
  const [globalStats, setGlobalStats] = useState([]);
  const [globalStatsCountryInfo, setGlobalStatsCountryInfo] = useState([]);
  const [globalVaccineData, setGlobalVaccineData] = useState([]);
  let image = "";

  useEffect(() => {
    const getGlobalVaccineData = async () => {
      await fetch(
        "https://disease.sh/v3/covid-19/vaccine/coverage/countries/za?lastdays=1&fullData=false"
      )
        .then((response) => response.json())
        .then((data) => {
          setGlobalVaccineData(Object.values(data.timeline));
        });
    };
    getGlobalVaccineData();
  }, []);

  let total = continentStats.recovered + continentStats.cases;
  let therecovered = (continentStats.recovered / total) * 100;
  let thecases = (continentStats.casses / total) * 100;

  return (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Text style={styles.cardHeading1}>
          Coronavirus Cases -{" "}
          <Text style={styles.cardHeading2}>Per Continent</Text>
        </Text>
      </View>

      {continentStats.map((continent, index) => (
        <View key={index}>
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.cardHeading1}>{continent.continent}</Text>
              <Text style={[styles.cardHeading1, { fontSize: 15 }]}>
                {continent.countries.length} countries
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cardHeading1}>Poplation</Text>
              <FormatNumber
                number={continent.population}
                color="#364A63"
                size={15}
              />
            </View>

            <View style={styles.row}>
              <View style={styles.descriptionCard}>
                <View style={styles.iconRow}>
                  <Text style={styles.cardHeading1}>Cases </Text>
                  <AntDesign name="addusergroup" size={24} color="#ff7300" />
                </View>
                <FormatNumber
                  number={continent.cases}
                  color="#364A63"
                  size={15}
                  fontweight="normal"
                />
                {continent.todayCases > 0 && (
                  <Text>
                    +
                    <FormatNumber
                      number={continent.todayCases}
                      color="orange"
                      size={15}
                      fontweight="normal"
                    />
                  </Text>
                )}
              </View>

              <View style={styles.descriptionCard}>
                <View style={styles.iconRow}>
                  <Text style={styles.cardHeading1}>Deaths </Text>
                  <FontAwesome5 name="heartbeat" size={24} color="#E85347" />
                </View>
                <FormatNumber
                  number={continent.deaths}
                  color="#364A63"
                  size={15}
                  fontweight="normal"
                />
                {continent.todayDeaths > 0 && (
                  <Text>
                    +
                    <FormatNumber
                      number={continent.todayDeaths}
                      color="#E85347"
                      size={15}
                      fontweight="normal"
                    />
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.descriptionCard}>
                <View style={styles.iconRow}>
                  <Text style={styles.cardHeading1}>Recovered </Text>
                  <FontAwesome5
                    name="praying-hands"
                    size={18}
                    color="#1EE0AC"
                  />
                </View>
                <FormatNumber
                  number={continent.recovered}
                  color="#364A63"
                  size={15}
                  fontweight="normal"
                />
                {continent.todayRecovered > 0 && (
                  <Text>
                    +
                    <FormatNumber
                      number={continent.todayRecovered}
                      color="#1EE0AC"
                      size={15}
                      fontweight="normal"
                    />
                  </Text>
                )}
              </View>

              <View style={styles.descriptionCard}>
                <View style={styles.iconRow}>
                  <Text style={styles.cardHeading1}>Covid Tests </Text>
                  <MaterialCommunityIcons
                    name="needle"
                    size={24}
                    color="#00ff15"
                  />
                </View>
                <FormatNumber
                  number={continent.tests}
                  color="#364A63"
                  size={15}
                  fontweight="normal"
                />
                {continent.todayTests > 0 && (
                  <Text>
                    +
                    <FormatNumber
                      number={continent.todayTests}
                      color="#00ff15"
                      size={15}
                      fontweight="normal"
                    />
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ContinentCard2;

const styles = StyleSheet.create({
  descriptionCard: {
    width: Dimensions.get("window").width / 2 - 60,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#F2F3F4",
  },
  labelColorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  card: {
    width: "100%",
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginVertical: 20,
  },
  cardText: {
    color: "#576484",
  },
  cardHeading1: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#364A63",
  },
  cardHeading2: {
    color: "grey",
  },
  cardHeadingDescription: {
    letterSpacing: 2,
    fontWeight: "bold",
    color: "#809BB1",
  },
  cardRow: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
