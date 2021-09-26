import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CovidScreen from "./screens/CovidScreen";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Covid" component={CovidScreen} />
    </Stack.Navigator>
  );
};

export { FirstScreenNavigator };
