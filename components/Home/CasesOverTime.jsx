import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import FormatNumber from "./FormatNumber";
import Graph from "./Graph";
const CasesOverTime = ({
  heading,
  subheading,
  subheading2,
  color,
  graphData,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeading1}>
        {heading} - <Text style={styles.cardHeading2}>{subheading}</Text>
      </Text>

      <Text
        style={[
          styles.cardHeadingDescription,
          { marginTop: 5, letterSpacing: 0 },
        ]}
      >
        {subheading2}
      </Text>

      <View
        style={{
          width: "100%",
          borderTopColor: "lightgrey",
          borderTopWidth: 1,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
          height: 300,
        }}
      >
        {graphData?.length === 0 && (
          <View>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Loading...</Text>
          </View>
        )}
        <Graph dataFeed={graphData} color={color} />
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
    marginVertical: 20,
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
