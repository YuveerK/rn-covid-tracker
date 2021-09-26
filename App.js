import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import Home from "./screens/Home";
import CovidStats from "./screens/CovidStats";
import VaccineStats from "./screens/VaccineStats";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CovidScreen from "./screens/CovidScreen";
import VaccineStatsDetails from "./screens/VaccineStatsDetails";

export default function App() {
  const Tab = createBottomTabNavigator();

  const HomeStack = createNativeStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={Home} />
        <HomeStack.Screen name="Covid" component={CovidStats} />
        <HomeStack.Screen name="Vaccine" component={VaccineStats} />
      </HomeStack.Navigator>
    );
  }

  function VaccineStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="VaccineScreen" component={VaccineStats} />
        <HomeStack.Screen name="VaccineDetailsScreen" component={VaccineStatsDetails} />
      </HomeStack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            paddingBottom: 5,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline" size={24} color="black" />
            ),
            tabBarActiveTintColor: "#e91e63",
          }}
        />

        <Tab.Screen
          name="Vaccine"
          component={VaccineStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name="injection-syringe" size={24} color="black" />
            ),
            tabBarActiveTintColor: "#e91e63",
          }}
        />
        <Tab.Screen name="Covid Statistics" component={CovidScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
