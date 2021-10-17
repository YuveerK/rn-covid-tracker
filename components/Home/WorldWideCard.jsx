import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormatNumber from "./FormatNumber";

const WorldWideCard = ({ globalStats, vaccineStats }) => {
  let total = globalStats.cases + globalStats.recovered + globalStats.deaths;
  let cases = (globalStats.cases / total) * 100;
  let recovered = (globalStats.recovered / total) * 100;
  let deaths = (globalStats.deaths / total) * 100;

  return (
    <View style={styles.card}>
      <Text style={styles.cardHeading1}>
        Coronavirus Cases - <Text style={styles.cardHeading2}>Worldwide</Text>
      </Text>

      <Text style={[styles.cardHeadingDescription, { marginTop: 20 }]}>
        TOTAL CONFIRMED CASES
      </Text>
      <FormatNumber number={globalStats.cases} color="#364A63" size={25} />

      <View
        style={[
          styles.generalContainer,
          {
            flexDirection: "row",
          },
        ]}
      >
        <View
          style={{
            width: `${cases}%`,
            height: 10,
            backgroundColor: "#816BFF",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        ></View>
        <View
          style={{
            width: `${recovered}%`,
            height: 10,
            backgroundColor: "#1EE0AC",
          }}
        ></View>
        <View
          style={{
            width: `${deaths}%`,
            height: 10,
            backgroundColor: "#E85347",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        ></View>
      </View>

      <View style={styles.cardRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#816BFF",
              marginRight: 15,
              borderRadius: 2,
            }}
          ></View>
          <View>
            <Text style={styles.cardText}>Cases</Text>
          </View>
        </View>

        <View>
          <FormatNumber number={globalStats.cases} color="#364A63" size={15} />
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#1EE0AC",
              marginRight: 15,
              borderRadius: 2,
            }}
          ></View>
          <View>
            <Text style={styles.cardText}>Recoveries</Text>
          </View>
        </View>

        <View>
          <FormatNumber
            number={globalStats.recovered}
            color="#364A63"
            size={15}
          />
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#E85347",
              marginRight: 15,
              borderRadius: 2,
            }}
          ></View>
          <View>
            <Text style={styles.cardText}>Deaths</Text>
          </View>
        </View>

        <View>
          <FormatNumber number={globalStats.deaths} color="#364A63" size={15} />
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#00ff15",
              marginRight: 15,
              borderRadius: 2,
            }}
          ></View>
          <View>
            <Text style={styles.cardText}>Vaccine Tests</Text>
          </View>
        </View>

        <View>
          <FormatNumber number={vaccineStats.total} color="#364A63" size={15} />
        </View>
      </View>

      <Text>
        The ratio of{" "}
        <Text style={{ color: "#798BFF" }}>
          (Recovery {recovered.toFixed()}%)
        </Text>{" "}
        &{" "}
        <Text style={{ color: "#798BFF" }}>(Deaths {deaths.toFixed()}%) </Text>
      </Text>
    </View>
  );
};

export default WorldWideCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
  cardText: {
    color: "#9497a0",
  },
  cardHeading1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  cardHeading2: {
    color: "grey",
  },
  cardHeadingDescription: {
    letterSpacing: 2,
    fontWeight: "bold",
    color: "#809BB1",
  },
  cardRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
