import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import vaccineData from "../data/vaccineData.json";
const VaccineStats = ({ navigation }) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setCandidates(vaccineData.data);
    };
    loadData();
  }, []);
  return (
    <ScrollView style={{ padding: 20 }}>
      {candidates.map((candidate, index) => (
        <TouchableOpacity
          style={{
            flex: 1,
            height: 100,
            justifyContent: "center",
          }}
          key={index}
        >
          <Button
            title={"View" + " " + candidate.candidate}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("VaccineDetailsScreen", {
                itemId: index,
              });
            }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default VaccineStats;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 150,
    marginVertical: 20,
    backgroundColor: "white",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
