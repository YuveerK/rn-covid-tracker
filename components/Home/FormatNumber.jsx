import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberFormat from "react-number-format";

const FormatNumber = ({ number, size, color }) => {
  return (
    <NumberFormat
      value={number}
      displayType={"text"}
      thousandSeparator={true}
      renderText={(formattedValue) => (
        <Text
          style={{
            fontSize: size ? size : 20,
            fontWeight: "bold",
            color: color ? color : "white",
          }}
        >
          {formattedValue}
        </Text>
      )} // <--- Don't forget this!
    />
  );
};

export default FormatNumber;

const styles = StyleSheet.create({});
