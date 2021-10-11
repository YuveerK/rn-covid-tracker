import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { TouchableOpacity } from "react-native-gesture-handler";
import FeedContent from "../components/Home/FeedContent";
import WorldWideFeed from "../components/Home/WorldWideFeed";
import CountryFeed from "../components/Home/CountryFeed";
import { StatusBar } from "expo-status-bar";
const Home = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;

  const [selectedCountry, setSelectedCountry] = useState("World Wide");
  const [countryList, setCountryList] = useState([]);
  const [countryFlag, setCountryFlag] = useState(
    "https://www.freeiconspng.com/uploads/earth-png-11.png"
  );
  const [countryData, setCountryData] = useState([]);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="black" style="light" />
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WorldWideFeed navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
  },

  geography: {},
  GeofieldContainer: {
    marginVertical: 10,
  },
});
