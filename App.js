import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import CovidStats from "./screens/CovidStats";
import VaccineStats from "./screens/VaccineStats";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CovidScreen from "./screens/CovidScreen";
import VaccineStatsDetails from "./screens/VaccineStatsDetails";
import CasesGraphScreen from "./screens/CasesGraphScreen";
import MapScreen from "./screens/MapScreen";
import Education from "./screens/Education";
import Test from "./screens/Test";
import SelectACountry from "./screens/SelectACountry";
import ViewSelectedCountry from "./screens/ViewSelectedCountry";
import SymptomsDiagnosisReducingRisk from "./screens/SymptomsDiagnosisReducingRisk";
import FAQ from "./screens/FAQ";
import HowToGetTested from "./screens/HowToGetTested";
import WaitingForTestResults from "./screens/WaitingForTestResults";
import AdmissionRequest from "./screens/AdmissionRequest";

export default function App() {
  const Tab = createBottomTabNavigator();

  const HomeStack = createNativeStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen name="Covid" component={CovidStats} />
        <HomeStack.Screen name="CasesGraph" component={CasesGraphScreen} />
        <HomeStack.Screen name="Select a Country" component={SelectACountry} />
        <HomeStack.Screen
          name="View Selected Country"
          component={ViewSelectedCountry}
        />
        <HomeStack.Screen
          name="Detailed Stats Table"
          component={Test}
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            headerTintColor: "black",
          }}
        />
      </HomeStack.Navigator>
    );
  }

  function VaccineStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name=" Vaccine Candidates in Development"
          component={VaccineStats}
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            headerTintColor: "black",
          }}
        />
        <HomeStack.Screen
          name="VaccineDetailsScreen"
          component={VaccineStatsDetails}
        />
      </HomeStack.Navigator>
    );
  }
  function TestStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Test" component={Test} />
      </HomeStack.Navigator>
    );
  }

  function MapStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Covid 19 Cases: Heatmap"
          component={MapScreen}
        />
      </HomeStack.Navigator>
    );
  }

  function EducationStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Education" component={Education} />
        <HomeStack.Screen
          name="Symptoms, diagnosis, reducing risk"
          component={SymptomsDiagnosisReducingRisk}
        />
        <HomeStack.Screen name="FAQs" component={FAQ} />
        <HomeStack.Screen name="How to Get Tested" component={HowToGetTested} />
        <HomeStack.Screen
          name="Waiting For Test Results"
          component={WaitingForTestResults}
        />
        <HomeStack.Screen name="Admission Request" component={AdmissionRequest} />
        {/* <HomeStack.Screen name="FAQs" component={FAQ} />
        <HomeStack.Screen name="FAQs" component={FAQ} />
        <HomeStack.Screen name="FAQs" component={FAQ} />
        <HomeStack.Screen name="FAQs" component={FAQ} />
        <HomeStack.Screen name="FAQs" component={FAQ} />
        <HomeStack.Screen name="FAQs" component={FAQ} /> */}
      </HomeStack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            paddingBottom: 5,
            backgroundColor: "white",
            borderTopWidth: 0,
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
            tabBarActiveTintColor: "#798BFF",
          }}
        />

        {/* <Tab.Screen
          name="Vaccine"
          component={VaccineStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name="injection-syringe" size={24} color="black" />
            ),
            tabBarActiveTintColor: "#798BFF",
          }}
        /> */}

        <Tab.Screen
          name="Covid Map"
          component={MapStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="map" size={24} color="black" />
            ),
            tabBarActiveTintColor: "#798BFF",
          }}
        />
        <Tab.Screen
          name="Information"
          component={EducationStackScreen}
          options={{
            tabBarIcon: () => (
              <SimpleLineIcons name="graduation" size={24} color="black" />
            ),
            tabBarActiveTintColor: "#798BFF",
          }}
        />
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
