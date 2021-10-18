import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import vaccineData from "../data/vaccineData.json";
import { ScrollView } from "react-native-gesture-handler";

const VaccineStatsDetails = ({ route, navigation, data }) => {
  const id = route.params.itemId;
  const vaccineData = route.params.data;
  const [candidates, setCandidates] = useState([]);
  const [institutions, setInstitutions] = useState([]);

  console.log(vaccineData);
  return (
    <View style={styles.container}>
      <ScrollView style={{ margin: 15 }}>
        <View style={styles.headingContainer}>
          <Text>
            Candidate
            <Text style={styles.subheading}> {vaccineData.candidate} </Text>
          </Text>
        </View>
        <Text>{vaccineData.institutions} </Text>
        <Text>{vaccineData.mechanism} </Text>
        <Text>{vaccineData.trialPhase} </Text>
        <Text>{vaccineData.details}</Text>
      </ScrollView>
    </View>
  );
};

export default VaccineStatsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headingContainer: {
    width: "100%",
  },
  subheading: {
    fontWeight: "bold",
  },
});
