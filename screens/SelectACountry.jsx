import React, { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import FormatNumber from "../components/Home/FormatNumber";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SelectACountry = ({ navigation }) => {
  const [countryList, setCountryList] = useState([]);
  const windowWidth = Dimensions.get("window").width;

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
      <View
        style={[
          styles.tableHeader,
          { borderBottomColor: "white", paddingVertical: 0 },
        ]}
      >
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
        </View>
      </View>
      <View
        style={{
          flex: 1,
          margin: 5,
          padding: 5,
          backgroundColor: "white",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "lightgrey",
        }}
      >
        <View style={styles.tableHeader}>
          <View
            style={[styles.tableHeaderData, { width: windowWidth / 5 + 30 }]}
          >
            <Text
              style={{ color: "#576484", fontWeight: "bold", fontSize: 12 }}
            >
              Country
            </Text>
          </View>

          <View style={[styles.tableHeaderData, { width: windowWidth / 5 }]}>
            <Text
              style={{ color: "#576484", fontWeight: "bold", fontSize: 12 }}
            >
              Confirmed
            </Text>
          </View>

          <View style={[styles.tableHeaderData, { width: windowWidth / 5 }]}>
            <Text
              style={{ color: "#576484", fontWeight: "bold", fontSize: 12 }}
            >
              Recovered
            </Text>
          </View>

          <View style={[styles.tableHeaderData, { width: windowWidth / 5 }]}>
            <Text
              style={{ color: "#576484", fontWeight: "bold", fontSize: 12 }}
            >
              Deaths
            </Text>
          </View>
        </View>
        {countryList?.length > 0 && (
          <FlatList
            data={countryList}
            enableEmptySections={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableWithoutFeedback
                style={styles.row}
                onPress={() => test(index)}
              >
                <View style={[styles.rowData, { width: windowWidth / 5 + 30 }]}>
                  <Image
                    source={{ uri: `${item.countryInfo.flag}` }}
                    style={{
                      width: 50,
                      height: 40,
                      resizeMode: "contain",
                      borderRadius: 9,
                    }}
                  />

                  <Text style={styles.countryName}>{item.country}</Text>
                </View>

                <View style={[styles.rowData, { width: windowWidth / 5 }]}>
                  <View style={styles.countryName}>
                    <FormatNumber
                      number={item.cases}
                      size={14}
                      color="#576484"
                      fontweight="normal"
                    />
                  </View>
                </View>

                <View style={[styles.rowData, { width: windowWidth / 5 }]}>
                  <View style={styles.countryName}>
                    <FormatNumber
                      number={item.recovered}
                      fontweight="normal"
                      size={14}
                      color="#576484"
                    />
                  </View>
                </View>

                <View style={[styles.rowData, { width: windowWidth / 5 }]}>
                  <View style={styles.countryName}>
                    <FormatNumber
                      number={item.deaths}
                      fontweight="normal"
                      size={14}
                      color="#576484"
                    />
                  </View>
                </View>

                <View
                  style={[
                    styles.rowData,
                    {
                      width: windowWidth / 5,
                    },
                  ]}
                >
                  <View style={styles.countryName}>
                    <Entypo name="chevron-thin-right" size={24} color="black" />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default SelectACountry;

const styles = StyleSheet.create({
  tableHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  tableHeaderData: {
    width: 90,
    padding: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    backgroundColor: "white",
    padding: 5,
  },
  rowContainer: {},
  countryName: {
    color: "black",
  },
  rowData: {
    width: 90,
    justifyContent: "center",
  },
});
