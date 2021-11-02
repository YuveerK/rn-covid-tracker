import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Roboto_500Medium_Italic } from "@expo-google-fonts/roboto";
const AdmissionRequest = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>
            COVID-19 (Coronavirus) Admission Request
          </Text>
        </View>

        <View>
          <Text style={[styles.rootTextHeading, { fontWeight: "bold" }]}>
            PLEASE PAY ATTENTION TO THE FOLLOWING ADMISSION REQUEST
            {"\n"}
          </Text>
        </View>

        <View>
          <Text
            style={[
              styles.rootText,
              { fontWeight: "bold", textAlign: "center" },
            ]}
          >
            All patients waiting for admission or assistance will be attended to
            in line with general admission processes.
            {"\n"}
          </Text>
        </View>

        <View>
          <Text
            style={[
              styles.rootText,
              { fontWeight: "bold", textAlign: "center" },
            ]}
          >
            HOWEVER – please note the following:
          </Text>
        </View>

        <View style={styles.bubbleContainer}>
          <View style={styles.bubbleContentContainer}>
            <Text
              style={[
                styles.rootText,
                { fontWeight: "bold", textAlign: "center", color: "white" },
              ]}
            >
              If you suspect you have a respiratory viral or bacterial infection
              and are displaying any of these symptoms.
            </Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/fever.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/body-aches.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/chills.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/cough.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/gastro.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/loss-of-taste.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/shortness-of-breath.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/sore-throat.png")}
            style={styles.imageLogo}
          />
        </View>

        <View style={styles.contentContainer}>
          <View style={[styles.stepsContainer, { backgroundColor: "red" }]}>
            <Text
              style={[styles.rootText, { color: "white", fontWeight: "bold" }]}
            >
              Or
            </Text>
          </View>
          <View style={[styles.stepsContainer, {}]}>
            <Text style={styles.rootText}>
              Have been in contact with a person(s) with confirmed COVID-19 OR
            </Text>
          </View>
          <View style={[styles.stepsContainer, {}]}>
            <Text style={styles.rootText}>
              Have a history of travel to areas with local transmission of
              COVID-19 OR
            </Text>
          </View>
          <View
            style={[styles.stepsContainer, { marginVertical: 0, marginTop: 5 }]}
          >
            <Text style={styles.rootText}>
              Worked in or visited a healthcare facility where COVID-19 positive
              patients are treated
            </Text>
          </View>
          <View
            style={[
              styles.stepsContainer,
              {
                marginVertical: 0,
                padding: 0,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Entypo name="arrow-down" size={24} color="#EFF1FF" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdmissionRequest;

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
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 15,
  },

  rootText: {
    color: "#093153",
    textAlign: "center",
  },

  stepsContainer: {
    width: "100%",
    backgroundColor: "#EFF1FF",
    padding: 5,
    borderRadius: 20,
    marginVertical: 5,
  },
  imageLogo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    margin: 15,
  },
  imageContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  bubbleContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  bubbleContentContainer: {
    backgroundColor: "#093153",
    width: "80%",
    padding: 20,
    borderRadius: 20,
  },
  contentContainer: {
    padding: 10,
    width: "100%",
  },
});
