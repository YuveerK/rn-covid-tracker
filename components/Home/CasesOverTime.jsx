import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import FormatNumber from "./FormatNumber";
import Graph from "./Graph";
const CasesOverTime = ({ globalStats, graphData, graphData2 }) => {
  let total = globalStats.cases + globalStats.recovered + globalStats.deaths;
  let cases = (globalStats.cases / total) * 100;
  let recovered = (globalStats.recovered / total) * 100;
  let deaths = (globalStats.deaths / total) * 100;
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeading1}>
        Cases Over Time - <Text style={styles.cardHeading2}>Worldwide</Text>
      </Text>

      <Text
        style={[
          styles.cardHeadingDescription,
          { marginTop: 5, letterSpacing: 0 },
        ]}
      >
        The chart below shows daily case trends since the beginning of the
        pandemic.
      </Text>

      <View
        style={{
          width: "100%",
          borderTopColor: "lightgrey",
          borderTopWidth: 1,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {graphData?.length === 0 && (
          <View>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Loading...</Text>
          </View>
        )}
        <Graph dataFeed={graphData} color="#798BFF" />
      </View>
    </View>
  );
};

export default CasesOverTime;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
  cardText: {
    color: "#576484",
  },
  cardHeading1: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 20,
  },
  cardHeading2: {
    color: "grey",
  },
  cardHeadingDescription: {
    letterSpacing: 2,
    fontWeight: "bold",
    color: "#809BB1",
    paddingHorizontal: 20,
  },
  cardRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
