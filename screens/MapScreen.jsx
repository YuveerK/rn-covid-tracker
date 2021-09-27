import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Circle, Heatmap, Marker } from "react-native-maps";

const MapScreen = () => {
  let { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 1; //Increase or decrease the zoom level dynamically
  const LONGITUDE_DELTA = LATITUDE_DELTA * 100;

  //states
  const [coordinates, setCoordinates] = useState([]);
  const [mapRegion, setmapRegion] = useState({
    latitude: 8.7832,
    longitude: 34.5085,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    const getCoords = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          let countryLists = data.map((country) => ({
            latitude: country.countryInfo.lat,
            longitude: country.countryInfo.long,
            weight: Math.sqrt(country.cases) * 100,
            cases: country.cases,
          }));
          setCoordinates(countryLists);
        });
    };
    getCoords();
  }, []);

  coordinates.map((cord, index) => console.log(cord.longitude));
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
      >
        {coordinates?.length > 0 && (
          <Heatmap
            points={coordinates}
            radius={40}
            opacity={1}
            gradient={{
              colors: ["blue", "green", "yellow", "red"],
              startPoints: [0.01, 0.04, 0.1, 0.5],
              colorMapSize: 2000,
            }}
          />
        )}

        {coordinates?.length > 0 &&
          coordinates.map((cord, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: cord.latitude,
                longitude: cord.longitude,
              }}
              title={"Covid-19 Cases"}
              description={`${cord.cases}`.toString()}
            />
          ))}
      </MapView>

      <View
        style={{
          width: 120,
          height: 120,
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <View style={styles.lineContainer}>
          <View style={{ width: 20, height: 5, backgroundColor: "red" }}></View>
          <Text style={{ marginLeft: 10 }}>High </Text>
        </View>
        <View style={styles.lineContainer}>
          <View
            style={{ width: 20, height: 5, backgroundColor: "yellow" }}
          ></View>
          <Text style={{ marginLeft: 10 }}>Medium </Text>
        </View>

        <View style={styles.lineContainer}>
          <View
            style={{ width: 20, height: 5, backgroundColor: "green" }}
          ></View>
          <Text style={{ marginLeft: 10 }}>Moderate </Text>
        </View>
        <View style={styles.lineContainer}>
          <View
            style={{ width: 20, height: 5, backgroundColor: "blue" }}
          ></View>
          <Text style={{ marginLeft: 10 }}>Low </Text>
        </View>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
