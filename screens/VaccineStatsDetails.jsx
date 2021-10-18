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
  return <ScrollView style={{ margin: 15 }}></ScrollView>;
};

export default VaccineStatsDetails;

const styles = StyleSheet.create({});
