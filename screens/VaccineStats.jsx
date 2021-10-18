import { getActionFromState } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import vaccineData from "../data/vaccineData.json";
import { Entypo } from "@expo/vector-icons";

const VaccineStats = ({ navigation }) => {
  const [candidates, setCandidates] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedIndex, setIsClickedIndex] = useState(null);
  const [text, onChangeText] = useState("");
  let windowWidth = Dimensions.get("window").width;
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

  const viewDetails = (index, vaccine) => {
    console.log(index);
    navigation.navigate("VaccineDetailsScreen", {
      data: vaccine
    })
  };

  console.log(candidates.candidate);
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <View style={styles.tableHeaderData}>
            <Text>Candidate</Text>
          </View>
          <View style={styles.tableHeaderData}>
            <Text>Sponsors</Text>
          </View>
          <View style={styles.tableHeaderData}></View>
        </View>

        <FlatList
          data={candidates}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              style={styles.tableRow}
              onPress={() => viewDetails(index, item)}
            >
              <View style={styles.tableRowData}>
                <Text>{item.candidate}</Text>
              </View>
              <View style={styles.tableRowData}>
                <Text>{item.sponsors}</Text>
              </View>
              <View
                style={[
                  styles.tableRowData,
                  {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Entypo name="chevron-thin-right" size={24} color="black" />
              </View>
            </TouchableWithoutFeedback>
          )}
        />
        <View style={styles.tableRow}></View>
      </View>
    </View>
  );
};

export default VaccineStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  table: {
    width: "100%",
  },
  tableHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  tableHeaderData: {
    width: Dimensions.get("window").width / 3,
    borderRightColor: "lightgrey",
    borderRightWidth: 1,
    padding: 20,
  },
  tableRow: {
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  tableRowData: {
    width: Dimensions.get("window").width / 3,
    borderRightColor: "lightgrey",
    borderRightWidth: 1,
    padding: 10,
    justifyContent: "center",
  },
});
