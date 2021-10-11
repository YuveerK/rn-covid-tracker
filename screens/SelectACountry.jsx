import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const SelectACountry = ({ navigation }) => {
  const [countryList, setCountryList] = useState([]);

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
  return (
    <View>
      {countryList?.length > 0 && (
        <FlatList
          data={countryList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              style={styles.row}
              onPress={() => test(index)}
            >
              <View style={styles.rowContainer}>
                <Image
                  source={{ uri: `${item.countryInfo.flag}` }}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                />

                <Text style={styles.countryName}>{item.country}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      )}
    </View>
  );
};

export default SelectACountry;

const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    backgroundColor: "black",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryName: {
    color: "white",
    marginLeft: 30,
  },
});
