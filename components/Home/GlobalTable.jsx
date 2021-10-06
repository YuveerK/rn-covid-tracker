import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import NumberFormat from "react-number-format";

const GlobalTable = ({ countries }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.searchContainer}>
        <Text style={{ fontWeight: "bold" }}>
          Top 100 Countries With The Most Cases
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <ScrollView nestedScrollEnabled={true}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderData}>
              <Text>Country</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Cases</Text>
            </View>

            <View style={styles.tableHeaderData}>
              <Text>Cases Today</Text>
            </View>

            <View style={styles.tableHeaderData}>
              <Text>Deaths</Text>
            </View>

            <View style={styles.tableHeaderData}>
              <Text>Deaths Today</Text>
            </View>

            <View style={styles.tableHeaderData}>
              <Text>Recovered</Text>
            </View>

            <View style={styles.tableHeaderData}>
              <Text>Recovered Today</Text>
            </View>

            <View style={styles.tableHeaderData}>
              <Text>Active</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Critical</Text>
            </View>

            <View style={styles.tableHeaderData}>
              <Text>Population</Text>
            </View>
          </View>

          {countries?.length === 0 ? (
            <View>
              <Text>Loading....... </Text>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          ) : (
            countries.slice([0], [50]).map((country, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableRowData}>
                  <Image
                    source={{
                      uri: `${country.countryInfo.flag}`,
                    }}
                    style={styles.countryFlag}
                  />
                  <Text>
                    {index + 1}. {country.country}
                  </Text>
                </View>

                <View style={styles.tableRowData}>
                  <NumberFormat
                    value={country.cases}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>

                <View style={styles.tableRowData}>
                  <NumberFormat
                    value={country.todayCases}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>

                <View style={styles.tableRowData}>
                  <NumberFormat
                    value={country.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>

                <View style={styles.tableRowData}>
                  <NumberFormat
                    value={country.todayDeaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>

                <View style={styles.tableRowData}>
                  <NumberFormat
                    value={country.recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>

                <View style={styles.tableRowData}>
                  <NumberFormat
                    value={country.todayRecovered}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>

                <View style={styles.tableRowData}>
                  <NumberFormat
                    value={country.active}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>
                <View style={styles.tableRowData}>
                  <NumberFormat
                    value={country.critical}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>
                <View style={styles.tableRowData}>
                  <NumberFormat
                    value={country.population}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {formattedValue}
                      </Text>
                    )} // <--- Don't forget this!
                  />
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default GlobalTable;

const styles = StyleSheet.create({
  tableContainer: {
    width: "100%",
    height: 500,
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  countryFlag: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  tableHeaderData: {
    width: 120,
    padding: 15,

    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableRowData: {
    width: 120,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  container: {
    width: "100%",
    flex: 1,
  },
  statsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "40%",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },

  heading: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  globalHeading: {
    fontSize: 29,
  },

  headingContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cardHeading: {
    color: "darkgrey",
  },
  continentStatsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "#eee",
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
});
