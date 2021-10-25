import React, { useState } from "react";
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
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TopTenCountryCard = ({ globalStats, countryStats, navigation }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.cardRow, { backgroundColor: "white", padding: 0 }]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={styles.cardHeading1}>
              Top 20 Most Affected Countries
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
      <View style={{ height: 210, paddingVertical: 10 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {countryStats.slice(0, 20).map((country, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={{
                width: 190,
                height: 170,
                marginHorizontal: 10,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                alignItems: "center",
                padding: 15,
                position: "relative",
                elevation: 3,
                marginTop: 10,
              }}
              onPress={() =>
                navigation.navigate("View Selected Country", {
                  countryData: countryStats[index],
                })
              }
            >
              <Image
                source={{ uri: `${country.countryInfo.flag}` }}
                style={{
                  width: 50,
                  height: 30,
                  resizeMode: "cover",
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  left: 5,
                  top: 5,
                  fontWeight: "bold",
                  width: 20,
                  height: 20,
                  backgroundColor: "lightgrey",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 10 }}>
                  {index + 1}
                </Text>
              </View>
              <Text style={{ marginBottom: 15 }}>{country.country}</Text>

              <View style={styles.cardRow}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <AntDesign name="addusergroup" size={15} color="#ff7300" />

                  <View>
                    <Text style={styles.cardText}></Text>
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
              <View style={styles.cardRow}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome5 name="heartbeat" size={15} color="#E85347" />
                </View>

                <View>
                  <FormatNumber
                    number={country.deaths}
                    color="#364A63"
                    size={15}
                  />
                </View>
              </View>
              <View style={styles.cardRow}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome5
                    name="praying-hands"
                    size={14}
                    color="#1EE0AC"
                  />
                </View>

                <View>
                  <FormatNumber
                    number={country.recovered}
                    color="#364A63"
                    size={15}
                  />
                </View>
              </View>
            </TouchableOpacity>
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
    marginVertical: 3,
    borderRadius: 10,
  },
});
