import { getActionFromState } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import vaccineData from "../data/vaccineData.json";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const VaccineStats = ({ navigation }) => {
  const [candidates, setCandidates] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedIndex, setIsClickedIndex] = useState(null);
  const [text, onChangeText] = useState("");

  useEffect(() => {
    const loadData = () => {
      setCandidates(vaccineData.data);
    };
    loadData();
  }, []);

  const getInfo = (index) => {
    setIsClicked(!isClicked);
    setIsClickedIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <ScrollView horizontal={true}>
          <ScrollView>
            <Text
              style={{ fontSize: 20, marginBottom: 20, fontWeight: "bold" }}
            >
              Vaccine candidates in development
            </Text>
            <View style={styles.searchContainer}>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: "black",
                  height: "100%",
                  padding: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <EvilIcons name="search" size={24} color="black" />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View style={styles.tableHeaders}>
              <View
                style={{
                  width: 50,

                  height: 100,
                }}
              ></View>
              <View style={styles.tableHeaderHeading}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Candidate
                </Text>
              </View>
              <View style={styles.tableHeaderHeading}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Mechanism
                </Text>
              </View>
              <View style={styles.tableHeaderHeading}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Sponsor
                </Text>
              </View>
              <View style={styles.tableHeaderHeading}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Trial Phase
                </Text>
              </View>
              <View style={styles.tableHeaderHeading}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Institution
                </Text>
              </View>
            </View>

            {candidates?.length > 0 &&
              candidates
                .filter((vaccine) => {
                  if (text === "") {
                    return vaccine;
                  } else if (
                    vaccine.candidate
                      ?.toLowerCase()
                      .includes(text?.toLowerCase()) ||
                    vaccine.mechanism
                      ?.toLowerCase()
                      .includes(text?.toLowerCase())
                  ) {
                    return vaccine;
                  }
                })
                .map((vaccine, index) => (
                  <TouchableOpacity
                    style={styles.tableRow}
                    key={index}
                    onPress={() => getInfo(index)}
                  >
                    <View style={{ flexDirection: "row", width: "100%" }}>
                      <View style={styles.icon}>
                        {isClickedIndex === index && isClicked === true ? (
                          <AntDesign name="closecircle" size={20} color="red" />
                        ) : (
                          <Ionicons
                            name="ios-add-circle-sharp"
                            size={24}
                            color="green"
                          />
                        )}
                      </View>
                      <View style={styles.rowContent}>
                        <Text>{vaccine.candidate}</Text>
                      </View>
                      <View style={styles.rowContent}>
                        <Text>{vaccine.mechanism}</Text>
                      </View>
                      <View style={styles.rowContent}>
                        <Text>{vaccine.sponsors}</Text>
                      </View>
                      <View style={styles.rowContent}>
                        <Text>{vaccine.trialPhase}</Text>
                      </View>
                      <View style={styles.rowContent}>
                        <Text>{vaccine.institutions}</Text>
                      </View>
                    </View>

                    {candidates?.length > 0 &&
                      isClickedIndex === index &&
                      isClicked === true && (
                        <View
                          style={{
                            borderLeftWidth: 2,
                            borderLeftColor: "lightgrey",
                            borderRightWidth: 2,
                            borderRightColor: "lightgrey",
                            padding: 15,
                            width: 800,
                          }}
                        >
                          <Text style={{ fontSize: 30, color: "purple" }}>
                            Details
                          </Text>
                          <Text style={{ fontSize: 18 }}>
                            {vaccine.details}
                          </Text>
                        </View>
                      )}
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

export default VaccineStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    padding: 10,
  },
  searchContainer: {
    height: 40,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 20,
  },
  input: {
    height: 40,
    width: 340,
    marginVertical: 12,
    padding: 10,
  },
  table: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  tableHeaders: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  tableHeaderHeading: {
    width: 150,
    height: 100,
    padding: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  tableRow: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    width: "100%",
  },
  rowContent: {
    width: 150,

    justifyContent: "center",
    padding: 5,
  },
  icon: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
