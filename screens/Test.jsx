import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FormatNumber from "../components/Home/FormatNumber";

const Test = ({ route }) => {
  const countryInfo = route.params.countryInfo;
  console.log(countryInfo);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.flatListContainer}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Country</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>
                Active Per One Million
              </Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Cases</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>
                Cases Per One Million
              </Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Continent</Text>
            </View>

            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Critical</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>
                Critical Per One Million
              </Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Deaths</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>
                Deaths Per One Million
              </Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>
                One Case Per People
              </Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>
                One Death Per People
              </Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>
                One Test Per People
              </Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Population</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Recovered</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>
                Recovered Per One Million
              </Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Tests</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>
                Tests Per One Million
              </Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Today Cases</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Today Deaths</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text style={styles.tableHeaderDataText}>Today Recovered</Text>
            </View>
          </View>
          <FlatList
            data={countryInfo}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={styles.tableRow}>
                <View style={styles.tableRowData}>
                  <View
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: `${item.countryInfo.flag}` }}
                      style={{ width: 50, height: 30 }}
                    />
                  </View>
                  <Text style={{ textAlign: "center" }}>
                    {index + 1}. {item.country}
                  </Text>
                </View>

                <View style={styles.tableRowData}>
                  <FormatNumber number={item.activePerOneMillion} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.cases} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.casesPerOneMillion} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <Text>{item.continent}</Text>
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.critical} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.criticalPerOneMillion} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.deaths} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.deathsPerOneMillion} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.oneCasePerPeople} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.oneDeathPerPeople} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.oneTestPerPeople} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.population} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.recovered} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber
                    number={item.recoveredPerOneMillion}
                    size={15}
                  />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.tests} size={15} />
                </View>
                <View style={styles.tableRowData}>
                  <FormatNumber number={item.testsPerOneMillion} size={15} />
                </View>
                <View
                  style={
                    item.todayCases > 0
                      ? styles.tableRowDataCases
                      : styles.tableRowData
                  }
                >
                  <FormatNumber number={item.todayCases} size={15} />
                </View>
                <View
                  style={
                    item.todayDeaths > 0
                      ? styles.tableRowDataDeaths
                      : styles.tableRowData
                  }
                >
                  <FormatNumber number={item.todayDeaths} size={15} />
                </View>
                <View
                  style={
                    item.todayRecovered > 0
                      ? styles.tableRowDataRecovered
                      : styles.tableRowData
                  }
                >
                  <FormatNumber number={item.todayRecovered} size={15} />
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  flatListContainer: {
    backgroundColor: "white",
  },
  tableHeader: {
    flexDirection: "row",
  },
  tableHeaderData: {
    width: 100,
    padding: 10,
    backgroundColor: "lightgreen",
    justifyContent: "center",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableRowData: {
    width: 100,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    justifyContent: "center",
    borderRightColor: "lightgrey",
    borderRightWidth: 1,
  },
  tableRowDataRecovered: {
    width: 100,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    justifyContent: "center",
    borderRightColor: "lightgrey",
    borderRightWidth: 1,
    backgroundColor: "lightgreen",
  },

  tableRowDataDeaths: {
    width: 100,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    justifyContent: "center",
    borderRightColor: "lightgrey",
    borderRightWidth: 1,
    backgroundColor: "red",
  },

  tableRowDataCases: {
    width: 100,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    justifyContent: "center",
    borderRightColor: "lightgrey",
    borderRightWidth: 1,
    backgroundColor: "orange",
  },
});
