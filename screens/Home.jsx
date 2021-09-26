import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { TouchableOpacity } from "react-native-gesture-handler";
import FeedContent from "../components/Home/FeedContent";
const Home = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState("World Wide");
  const [countryList, setCountryList] = useState([]);
  const [countryFlag, setCountryFlag] = useState(
    "https://www.freeiconspng.com/uploads/earth-png-11.png"
  );
  const [countryData, setCountryData] = useState([]);

  //Populate country list
  useEffect(() => {
    getCountryList = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          let countryLists = data.map((country) => ({
            country: country.country,
            iso: country.countryInfo.iso3,
            flag: country.countryInfo.flag,
          }));
          setCountryList(countryLists);
        });
    };
    getCountryList();
  }, []);

  const onCountryChange = (itemValue, index) => {
    console.log(itemValue);
    setSelectedCountry(itemValue);

    if (itemValue === "World Wide") {
      setCountryFlag("https://www.freeiconspng.com/uploads/earth-png-11.png");
    } else {
      try {
        fetch(
          `https://disease.sh/v3/covid-19/countries/${itemValue}?strict=true`
        )
          .then((response) => response.json())
          .then((data) => {
            let countryFlag = data.countryInfo.flag;
            setCountryFlag(countryFlag);
            setCountryData(data);
          });
      } catch (error) {
        setCountryFlag("https://disease.sh/assets/img/flags/unknown.png");
      }
    }
  };

  return (
    <View style={{ padding: 15 }}>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue, index) => onCountryChange(itemValue, index)}
        mode="dropdown"
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#d6d6d6",
        }}
      >
        <Picker.Item label="World Wide" value="World Wide" />
        {countryList.map((country, index) => (
          <Picker.Item
            label={country.country}
            value={country.iso ? country.iso : country.country}
            key={index}
          />
        ))}
      </Picker>

      <ScrollView>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {countryFlag && (
            <Image
              source={{
                uri: `${countryFlag}`,
              }}
              style={{
                width: 200,
                height: 100,
                resizeMode: "contain",
                marginTop: 15,
              }}
            />
          )}

          <FeedContent
            selectedCountry={selectedCountry}
            navigation={navigation}
          />
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
