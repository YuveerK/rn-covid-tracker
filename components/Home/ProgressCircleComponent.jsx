import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressCircle from "react-native-progress-circle";

const ProgressCircleComponent = ({
  percent,
  color,
  shadowColor,
  bgColor,
  text,
  icon
}) => {
  return (
    <ProgressCircle
      percent={Number(percent)}
      radius={50}
      borderWidth={2}
      color={color ? color : "black"}
      shadowColor="#999"
      bgColor="#fff"
    >
      {icon}

      <Text style={{ fontSize: 18 }}>{text}%</Text>
    </ProgressCircle>
  );
};

export default ProgressCircleComponent;

const styles = StyleSheet.create({});
