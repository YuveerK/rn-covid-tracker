import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormatNumber from "./FormatNumber";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WorldWideCard = ({ globalStats, vaccineStats }) => {
  let total = globalStats.cases + globalStats.recovered + globalStats.deaths;
  let cases = (globalStats.cases / total) * 100;
  let recovered = (globalStats.recovered / total) * 100;
  let deaths = (globalStats.deaths / total) * 100;

  return (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Text style={styles.cardHeading1}>
          Coronavirus Cases{"\n"}
          <Text style={styles.cardHeading2}>Worldwide</Text>
        </Text>
        <Fontisto name="earth" size={40} color="#07adb9" />
      </View>

      <Text style={[styles.cardHeadingDescription, { marginTop: 20 }]}>
        POPULATION
      </Text>
      <FormatNumber number={globalStats.population} color="#364A63" size={25} />

      {/* <View
        style={[
          styles.generalContainer,
          {
            flexDirection: "row",
            marginTop: 15,
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
      </View> */}

      <View style={styles.cardRow}>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "70%" }}
        >
          <AntDesign name="addusergroup" size={24} color="#ff7300" />

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.cardText}>Cases</Text>
          </View>
        </View>

        <View style={{ width: "30%" }}>
          <FormatNumber number={globalStats.cases} color="#ff7300" size={15} />
          <Text style={{ fontSize: 10 }}>
            <FormatNumber
              number={globalStats.todayCases}
              color="#ff7300"
              size={12}
            />{" "}
            daily
          </Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "70%" }}
        >
          <FontAwesome5 name="praying-hands" size={18} color="#1EE0AC" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.cardText}>Recoveries</Text>
          </View>
        </View>

        <View style={{ width: "30%" }}>
          <FormatNumber
            number={globalStats.recovered}
            color="#1EE0AC"
            size={15}
          />
          <Text style={{ fontSize: 10 }}>
            <FormatNumber
              number={globalStats.todayRecovered}
              color="#1EE0AC"
              size={12}
            />{" "}
            daily
          </Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "70%" }}
        >
          <FontAwesome5 name="heartbeat" size={24} color="#E85347" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.cardText}>Deaths</Text>
          </View>
        </View>

        <View style={{ width: "30%" }}>
          <FormatNumber number={globalStats.deaths} color="#E85347" size={15} />
          <Text style={{ fontSize: 10 }}>
            <FormatNumber
              number={globalStats.todayDeaths}
              color="#E85347"
              size={12}
            />{" "}
            daily
          </Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "70%" }}
        >
          <MaterialCommunityIcons name="needle" size={24} color="#00ff15" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.cardText}>Vaccines Administered</Text>
          </View>
        </View>

        <View style={{ width: "30%" }}>
          <FormatNumber number={vaccineStats.total} color="#00ff15" size={15} />
        </View>
      </View>

      <Text>
        The ratio of{" "}
        <Text style={{ color: "#798BFF" }}>
          (Recovery {recovered.toFixed()}%)
        </Text>{" "}
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
