import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import data from "../../data/countryInformationData.json";

const FeedContent = ({ selectedCountry, navigation }) => {
  return (
    <View>
      {data
        .filter((country) => {
          if (
            country.iso3Code
              ?.toLowerCase()
              .includes(selectedCountry?.toLowerCase())
          ) {
            return country;
          }
        })
        .map((country, index) => (
          <View
            key={index}
            style={{
              width: "100%",
              padding: 15,
            }}
          >
            <View style={{}}>
              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Dialing Code</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.dialingCode}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>ISO 2 Code</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.iso2Code}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>ISO 3 Code</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.iso3Code}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Capital</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.capital}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Main Language</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.mainLanguage}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Currency</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.currency}</Text>
                </View>
              </View>
            </View>

            <View style={styles.geography}>
              <Text
                style={{
                  fontSize: 25,
                  marginTop: 15,
                  borderBottomWidth: 1,
                  padding: 10,
                }}
              >
                Geography
              </Text>

              <View style={styles.GeofieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Continent</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.geography.continent}</Text>
                </View>
              </View>
              <View style={styles.GeofieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Location</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.geography.location}</Text>
                </View>
              </View>
              <View style={styles.GeofieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Land</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.geography.land}</Text>
                </View>
              </View>
              <View style={styles.GeofieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Terrain</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.geography.terrain}</Text>
                </View>
              </View>
              <View style={styles.GeofieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Climate</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.geography.climate}</Text>
                </View>
              </View>
              <View style={styles.GeofieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Natural Hazzards</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.geography.naturalHazards}</Text>
                </View>
              </View>
              <View style={styles.GeofieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Note</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.geography.note}</Text>
                </View>
              </View>

              <View style={styles.GeofieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Bordering Countries</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.neighbouringCountries + " "}</Text>
                </View>
              </View>
            </View>

            <View style={styles.history}>
              <Text
                style={{
                  fontSize: 25,
                  marginTop: 15,
                  borderBottomWidth: 1,
                  padding: 5,
                  marginBottom: 10,
                }}
              >
                History
              </Text>
              <Text style={{ marginBottom: 20 }}>{country.history}</Text>
            </View>

            <View style={styles.demographics}>
              <Text
                style={{
                  fontSize: 25,
                  marginTop: 15,
                  borderBottomWidth: 1,
                  padding: 5,
                  marginBottom: 10,
                }}
              >
                Demographics
              </Text>
              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Life Expectancy</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.demographics.lifeExpectancy}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Median Age</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.demographics.medianAge}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Birth Rate</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.demographics.birthRate}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Death Rate</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.demographics.deathRate}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Sex Ratio</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.demographics.sexRatio}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Literacy</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.demographics.literacy}</Text>
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 25,
                  marginTop: 15,
                  borderBottomWidth: 1,
                  padding: 5,
                  marginBottom: 10,
                }}
              >
                Transportation
              </Text>
              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Roadways</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.transportation.roadways}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Railways</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.transportation.railways}</Text>
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Airports</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.transportation.airports}</Text>
                </View>
              </View>
              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Waterways</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.transportation.waterways}</Text>
                </View>
              </View>
              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Heliports</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.transportation.heliports}</Text>
                </View>
              </View>
              <View style={styles.fieldContainer}>
                <View style={styles.left}>
                  <Text style={styles.title}>Paved Airports</Text>
                </View>

                <View style={styles.right}>
                  <Text>{country.transportation.airportsPaved}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 100,
                justifyContent: "center",
              }}
            >
              <Button
                title="View Covid Stats"
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate("Covid", {
                    itemId: selectedCountry,
                  });
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};

export default FeedContent;

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
