import React from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FormatNumber from "./FormatNumber";
import { Ionicons } from "@expo/vector-icons";

const TopTenCountryCard = ({ globalStats, countryStats, navigation }) => {
  let total = globalStats.cases + globalStats.recovered + globalStats.deaths;
  let cases = (globalStats.cases / total) * 100;
  let recovered = (globalStats.recovered / total) * 100;
  let deaths = (globalStats.deaths / total) * 100;
  return (
    <View style={styles.card}>
      <View style={[styles.cardRow, { backgroundColor: "white", padding: 0 }]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={styles.cardHeading1}>
              Top 10 Most Affected Countries
            </Text>
          </View>
        </View>

        <View>
          <Ionicons name="earth" size={24} color="green" />
        </View>
      </View>

      {countryStats?.length === 0 && (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
          <Text>Loading...</Text>
        </View>
      )}
      <View style={{ height: 400 }}>
        <ScrollView nestedScrollEnabled={true}>
          {countryStats.slice(0, 10).map((country, index) => (
            <View style={styles.cardRow} key={index}>
              <View style={{ alignItems: "center" }}>
                <View>
                  <Image
                    source={{ uri: `${country.countryInfo.flag}` }}
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: "contain",
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      styles.cardText,
                      { color: "#6576FF", fontWeight: "bold" },
                    ]}
                  >
                    {index + 1}. {country.country}
                  </Text>
                </View>
              </View>

              <View>
                <FormatNumber
                  number={country.cases}
                  color="#364A63"
                  size={15}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={{
          width: "100%",
          justifyContent: "center",
          backgroundColor: "white",
          alignItems: "center",
          padding: 10,
          borderColor: "#6576FF",
          borderWidth: 1,
          marginTop: 50,
          borderRadius: 20,
        }}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Select a Country");
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#6576FF" }}>
          Select a Country
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "100%",
          justifyContent: "center",
          backgroundColor: "white",
          alignItems: "center",
          padding: 10,
          borderColor: "#6576FF",
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 20,
        }}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Test", {
            countryInfo: countryStats,
          });
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#6576FF" }}>
          View Detailed Stats Table
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopTenCountryCard;

const styles = StyleSheet.create({
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
    backgroundColor: "#EFF1FF",
    padding: 10,
    borderRadius: 10,
  },
});
