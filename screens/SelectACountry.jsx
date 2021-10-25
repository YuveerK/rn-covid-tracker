import React, { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";

import FormatNumber from "../components/Home/FormatNumber";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const SelectACountry = ({ navigation }) => {
  const [countryList, setCountryList] = useState([]);
  const windowWidth = Dimensions.get("window").width;
  const [text, onChangeText] = useState("Useless Text");

  useEffect(() => {
    const getCountryList = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          setCountryList(data);
        });
    };
    getCountryList();
  }, []);

  const test = (index) => {
    console.log(countryList[index]);
    navigation.navigate("View Selected Country", {
      countryData: countryList[index],
    });
  };
  const date = new Date();

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View
          style={{
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 25, color: "#5D7CA5" }}>
            COVID-19 Coronavirus Tracker
          </Text>
          <Text style={{ marginVertical: 2, color: "#8BA5D8" }}>
            Confirmed Cases and Deaths by Country, Territory, or Conveyance
          </Text>
          <Text
            style={{
              marginVertical: 10,
              color: "#b6b6b6",
              fontStyle: "italic",
            }}
          >
            Updated: {date.toString()}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: Dimensions.get("screen").width,
              backgroundColor: "red",
            }}
          >
            <EvilIcons name="search" size={24} color="black" />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <View style={styles.countryContainer}>
            {countryList?.length > 0 ? (
              countryList.map((country, index) => (
                <TouchableOpacity
                  style={styles.card}
                  key={index}
                  activeOpacity={0.8}
                  onPress={() => test(index)}
                >
                  <Image
                    source={{ uri: `${country.countryInfo.flag}` }}
                    style={styles.imageCard}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: 85,
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.countryName}>{country.country}</Text>

                    <EvilIcons name="external-link" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <View>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text>Loading...</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  countryContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: 150,
    height: 160,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
    position: "relative",
    elevation: 3,
    marginTop: 10,
  },
  imageCard: {
    width: 150,
    height: 85,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  countryName: {
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default SelectACountry;
