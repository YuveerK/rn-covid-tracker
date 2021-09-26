import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import vaccineData from "../data/vaccineData.json";
import { ScrollView } from "react-native-gesture-handler";

const VaccineStatsDetails = ({ route, navigation, data }) => {
  const id = route.params.itemId;
  const [candidates, setCandidates] = useState([]);
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setCandidates(vaccineData.data[id]);
      setInstitutions(vaccineData.data[id].institutions);
    };
    loadData();
  }, []);

  console.log(institutions);
  return (
    <ScrollView style={{ margin: 15 }}>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Candidate</Text>
        <Text>{candidates.candidate}</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Mechanism</Text>
        <Text>{candidates.mechanism}</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Sponsors</Text>
        <Text>{candidates.sponsors}</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Details</Text>
        <Text>{candidates.details}</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Trial Phase</Text>
        <Text>{candidates.trialPhase}</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Institutions</Text>
        <Text>{candidates.institutions}</Text>
      </View>
    </ScrollView>
  );
};

export default VaccineStatsDetails;

const styles = StyleSheet.create({});
