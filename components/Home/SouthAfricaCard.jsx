import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FormatNumber from "./FormatNumber";

const SouthAfricaCard = ({}) => {
  const [globalStats, setGlobalStats] = useState([]);
  const [globalStatsCountryInfo, setGlobalStatsCountryInfo] = useState([]);
  let image = "";

  //get country stats
  useEffect(() => {
    const getCountries = async () => {
      try {
        await fetch(
          "https://disease.sh/v3/covid-19/countries/za?yesterday=true&strict=true"
        )
          .then((response) => response.json())
          .then((data) => {
            setGlobalStats(data);
            setGlobalStatsCountryInfo(data.countryInfo);
          });
      } catch (error) {}
    };
    getCountries();
  }, []);

  let total = globalStats.cases + globalStats.recovered + globalStats.deaths;
  let cases = (globalStats.cases / total) * 100;
  let recovered = (globalStats.recovered / total) * 100;
  let deaths = (globalStats.deaths / total) * 100;
  image = globalStatsCountryInfo.flag;
  console.log(globalStats);
  return (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Text style={styles.cardHeading1}>
          Coronavirus Cases -{" "}
          <Text style={styles.cardHeading2}>South Africa</Text>
        </Text>

        <Image
          source={{ uri: `${globalStatsCountryInfo.flag}` }}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            borderRadius: 10,
          }}
        />
      </View>

      <View style={styles.cardRow}>
        <View>
          <Text style={styles.cardHeading2}>Confirmed</Text>
          <FormatNumber number={globalStats.cases} color="#364A63" />
        </View>
        <View>
          <Text style={styles.cardHeading2}>Recovered</Text>
          <FormatNumber number={globalStats.recovered} color="#1EE0AC" />
        </View>
        <View>
          <Text style={styles.cardHeading2}>Deaths</Text>
          <FormatNumber number={globalStats.deaths} color="#E85347" />
        </View>
      </View>

      <Text>
        The ratio of{" "}
        <Text style={{ color: "#798BFF" }}>
          (Recovery {recovered.toFixed()}%)
        </Text>{" "}
        &{" "}
        <Text style={{ color: "#798BFF" }}>(Deaths {deaths.toFixed()}%) </Text>
      </Text>

      <View style={styles.cardRow}>
        <View>
          <Text style={[styles.cardHeading1, { color: "grey" }]}>
            Last 24 Hrs
          </Text>
        </View>
        <View>
          <FormatNumber number={globalStats.todayCases} color="black" />
        </View>
      </View>

      <View style={styles.cardRow}>
        <View>
          <Text style={[styles.cardHeading1, { color: "grey" }]}>Active</Text>
        </View>
        <View>
          <FormatNumber number={globalStats.active} color="black" />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "lightgrey",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View style={styles.cardRow}>
          <View style={styles.labelColorContainer}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: "#816BFF",
                borderRadius: 2,
              }}
            ></View>
            <Text style={[styles.cardHeading2, { marginLeft: 10 }]}>
              In Mild Condition
            </Text>
          </View>
          <FormatNumber
            number={globalStats.active - globalStats.critical}
            color="#364A63"
            size={15}
          />
        </View>

        <View style={styles.cardRow}>
          <View style={styles.labelColorContainer}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: "#1EE0AC",
                borderRadius: 2,
              }}
            ></View>
            <Text style={[styles.cardHeading2, { marginLeft: 10 }]}>
              In Critical Condition
            </Text>
          </View>
          <FormatNumber
            number={globalStats.critical}
            color="#364A63"
            size={15}
          />
        </View>
      </View>
    </View>
  );
};

export default SouthAfricaCard;

const styles = StyleSheet.create({
  labelColorContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});