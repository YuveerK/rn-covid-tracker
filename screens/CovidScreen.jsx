import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DataTable } from "react-native-paper";

const CovidScreen = () => {
  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title numeric>Age</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Bob</DataTable.Cell>
          <DataTable.Cell>test@test.com</DataTable.Cell>
          <DataTable.Cell numeric>105</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Mei</DataTable.Cell>
          <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>23</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
    backgroundColor: "red",
  },
});

export default CovidScreen;
