import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Roboto_500Medium_Italic } from "@expo-google-fonts/roboto";
const HowToGetTested = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>
            <Text style={[styles.headerHeading, { fontWeight: "bold" }]}>
              COVID-19 TESTING{" "}
            </Text>
            {"\n"}The correct process for getting tested for COVID-19
          </Text>
        </View>
        <Text style={[styles.rootTextHeading, { width: "100%", padding: 5 }]}>
          PLEASE FOLLOW THE STEPS OUTLINED BELOW IF:
        </Text>

        <View style={styles.listItemContainer}>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              You have acute respiratory illness with a sudden onset of at least
              one of the following symptoms: cough, sore throat, shortness of
              breath, fever of 38°C or higher, body aches, chills, loss of smell
              or taste, nausea, vomiting, diarrhea, fatigue or weakness{" "}
            </Text>
          </View>

          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              If you have a respiratory illness and have been in close contact
              with a person who tested positive for COVID-19; travelled to areas
              with local transmission of COVID-19; OR worked in or visited a
              healthcare facility where COVID-19 positive patients are treated
            </Text>
          </View>
        </View>

        <View style={styles.setpsItemsContainer}>
          <View style={styles.step}>
            <View style={styles.number}>
              <Text style={styles.actualNumber}>1</Text>
            </View>
            <View style={styles.stepsContent}>
              <Text>
                Get a healthcare practitioner referral or recommendation from
                the National Institute for Communicable Diseases (NICD)
              </Text>
            </View>
          </View>
          <View style={styles.step}>
            <View style={styles.number}>
              <Text style={styles.actualNumber}>2</Text>
            </View>
            <View style={styles.stepsContent}>
              <Text>The pathology testing form will be provided to you</Text>
            </View>
          </View>
          <View style={styles.step}>
            <View style={styles.number}>
              <Text style={styles.actualNumber}>3</Text>
            </View>
            <View style={styles.stepsContent}>
              <Text>
                Go to the designated laboratory indicated by your healthcare
                practitioner or NICD
              </Text>
            </View>
          </View>
          <View style={styles.step}>
            <View style={styles.number}>
              <Text style={styles.actualNumber}>4</Text>
            </View>
            <View style={styles.stepsContent}>
              <Text>
                The results will be communicated to you by your healthcare
                practitioner or NICD
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HowToGetTested;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    width: "100%",
    height: 130,
    backgroundColor: "#093153",
    alignItems: "center",
    justifyContent: "center",
  },
  headerHeading: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  rootTextHeading: {
    color: "#093153",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 15,
  },

  rootText: {
    color: "#093153",
    maxWidth: "95%",
  },
  listItemContainer: {
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 0,
    padding: 10,
  },
  setpsItemsContainer: {
    paddingHorizontal: 30,
  },
  step: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  number: {
    width: 30,
    height: 30,
    backgroundColor: "#093153",
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 15,
  },
  actualNumber: {
    color: "white",
  },
  stepsContent: {
    maxWidth: "90%",
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 10,
  },
});
