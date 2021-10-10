import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  buildCasesData,
  buildDeathsData,
  genRandomColor,
  buildVaccineData,
} from "./buildGraphs";
import Graph from "./Graph";
import FormatNumber from "./FormatNumber";
import ProgressCircle from "react-native-progress-circle";

const CountryFeed = ({ selectedCountry }) => {
  const [country, setCountry] = useState([]);
  const [casesGraph, setCasesGraph] = useState([]);
  const [deathGraph, setDeathGraph] = useState([]);
  const [vaccineGraph, setVaccineGraph] = useState([]);
  const [vaccineData, setVaccineData] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const url3 = `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${selectedCountry}?lastdays=1&fullData=true`;
        await fetch(url3)
          .then((response) => response.json())
          .then((data) => {
            setVaccineData(data.timeline[0]);
          });
      } catch (error) {}

      await fetch(
        `https://disease.sh/v3/covid-19/countries/${selectedCountry}?strict=true`
      )
        .then((response) => response.json())
        .then((data) => {
          setCountry(data);
        });

      try {
        const url2 = `https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=90`;
        await fetch(url2)
          .then((response) => response.json())
          .then((data) => {
            if (data?.length !== 0) {
              let casesData = buildCasesData(data.timeline);
              setCasesGraph(casesData);

              let deathData = buildDeathsData(data.timeline);
              setDeathGraph(deathData);
            }
          });
      } catch (error) {
        setCasesGraph([]);
        setDeathGraph([]);
      }

      try {
        const urlVax = `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${selectedCountry}?lastdays=90&fullData=false`;

        await fetch(urlVax)
          .then((response) => response.json())
          .then((data) => {
            let casesData = buildVaccineData(data);
            setVaccineGraph(casesData);
          });
      } catch (error) {
        setVaccineGraph([]);
      }
    };
    getCountry();
  }, [selectedCountry]);

  let tested = Number(((country.tests / country.population) * 100).toFixed(2));
  let vaccinated = Number(
    ((vaccineData.total / country.population) * 100).toFixed(2)
  );

  console.log(selectedCountry);
  return (
    <View style={styles.countryContainer}>
      <View style={styles.populationContainer}>
        <Text>Population</Text>
        <FormatNumber number={country.population} />
      </View>
      <View style={styles.countryCardContainer}>
        {country && tested <= 100 ? (
          <View style={[styles.card, { backgroundColor: "#b0c5ff" }]}>
            <View style={styles.headingContainer}>
              <Text>Tests</Text>
              <Fontisto name="test-tube" size={18} color="#658eff" />
            </View>
            <FormatNumber number={country.tests} />
            {country.population > 0 && (
              <ProgressCircle
                percent={Number(
                  ((country.tests / country.population) * 100).toFixed(2)
                )}
                radius={50}
                borderWidth={3}
                color="#658eff"
                shadowColor="#ebebeb"
                bgColor="#b0c5ff"
              >
                <Text style={{ fontSize: 19, textAlign: "center" }}>
                  {tested}% Tested
                </Text>
              </ProgressCircle>
            )}
            {tested > 100 && (
              <Text>
                There are{" "}
                <FormatNumber number={country.tests - country.population} />{" "}
                more people than the total population who have been tested
                indicating that tourists and travellers have been tested on
                their travels
              </Text>
            )}
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              padding: 20,
              borderWidth: 1,
              borderColor: "lightgrey",
              borderRadius: 20,
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#b0c5ff",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Tests</Text>
              <Fontisto name="test-tube" size={18} color="#658eff" />
            </View>
            <FormatNumber number={country.tests} />
            {country.population > 0 && (
              <View style={{ marginVertical: 10 }}>
                <ProgressCircle
                  percent={Number(
                    ((country.tests / country.population) * 100).toFixed(2)
                  )}
                  radius={50}
                  borderWidth={3}
                  color="#658eff"
                  shadowColor="#ebebeb"
                  bgColor="#b0c5ff"
                >
                  <Text style={{ fontSize: 19, textAlign: "center" }}>
                    {tested}% Tested
                  </Text>
                </ProgressCircle>
              </View>
            )}
            {tested > 100 && (
              <Text>
                There are{" "}
                <FormatNumber number={country.tests - country.population} />{" "}
                more people than the total population who have been tested
                indicating that tourists and travellers have been tested on
                their travels
              </Text>
            )}
          </View>
        )}

        {country && (
          <View style={[styles.card, { backgroundColor: "orange" }]}>
            <View style={styles.headingContainer}>
              <Text>Cases</Text>
              <AntDesign name="adduser" size={24} color="white" />
            </View>
            <FormatNumber number={country.cases} />
            {country.population > 0 && (
              <ProgressCircle
                percent={Number(
                  ((country.cases / country.population) * 100).toFixed(2)
                )}
                radius={50}
                borderWidth={3}
                color="#ff5e00"
                shadowColor="#ebebeb"
                bgColor="orange"
              >
                <Text style={{ fontSize: 19, textAlign: "center" }}>
                  {Number(
                    ((country.cases / country.population) * 100).toFixed(2)
                  )}
                  % Infected
                </Text>
              </ProgressCircle>
            )}
          </View>
        )}

        {country && (
          <View style={[styles.card, { backgroundColor: "#ff6464" }]}>
            <View style={styles.headingContainer}>
              <Text>Deaths</Text>
              <FontAwesome5 name="heartbeat" size={24} color="red" />
            </View>
            <FormatNumber number={country.deaths} />
            {country.population > 0 && (
              <ProgressCircle
                percent={Number(
                  ((country.deaths / country.cases) * 100).toFixed(2)
                )}
                radius={50}
                borderWidth={3}
                color="red"
                shadowColor="#ebebeb"
                bgColor="#ff6464"
              >
                <Text style={{ fontSize: 19, textAlign: "center" }}>
                  {Number(((country.deaths / country.cases) * 100).toFixed(2))}%
                  Died
                </Text>
              </ProgressCircle>
            )}
          </View>
        )}

        {country && (
          <View style={[styles.card, { backgroundColor: "lightgreen" }]}>
            <View style={styles.headingContainer}>
              <Text>Recovered</Text>
              <FontAwesome5 name="praying-hands" size={18} color="green" />
            </View>
            <FormatNumber number={country.recovered} />
            {country.population > 0 && (
              <ProgressCircle
                percent={Number(
                  ((country.recovered / country.cases) * 100).toFixed(2)
                )}
                radius={50}
                borderWidth={3}
                color="#0d9b00"
                shadowColor="#ebebeb"
                bgColor="lightgreen"
              >
                <Text style={{ fontSize: 15, textAlign: "center" }}>
                  {Number(
                    ((country.recovered / country.cases) * 100).toFixed(2)
                  )}
                  % Recovered
                </Text>
              </ProgressCircle>
            )}
          </View>
        )}

        {vaccinated <= 100 ? (
          <View style={[styles.card, { backgroundColor: "#e3b8ff" }]}>
            <View style={styles.headingContainer}>
              <Text>Vaccinated</Text>
              <Fontisto name="injection-syringe" size={24} color="purple" />
            </View>
            <FormatNumber number={vaccineData.total} />
            {country.population > 0 && (
              <ProgressCircle
                percent={vaccinated}
                radius={50}
                borderWidth={3}
                color="purple"
                shadowColor="#ebebeb"
                bgColor="#e3b8ff"
              >
                <Text style={{ fontSize: 15, textAlign: "center" }}>
                  {vaccinated > 100 ? "100 >" : `${vaccinated}% vaccinated`}
                </Text>
              </ProgressCircle>
            )}
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              padding: 20,
              borderWidth: 1,
              borderColor: "lightgrey",
              borderRadius: 20,
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#e3b8ff",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Vaccinated</Text>
              <Fontisto name="injection-syringe" size={24} color="purple" />
            </View>
            <FormatNumber number={vaccineData.total} />
            {country.population > 0 && (
              <View style={{ marginVertical: 10 }}>
                <ProgressCircle
                  percent={Number(
                    ((vaccineData.total / country.population) * 100).toFixed(2)
                  )}
                  radius={50}
                  borderWidth={3}
                  color="purple"
                  shadowColor="#ebebeb"
                  bgColor="#e3b8ff"
                >
                  <Text style={{ fontSize: 15, textAlign: "center" }}>
                    {vaccinated}% Vaccinated
                  </Text>
                </ProgressCircle>
              </View>
            )}
            {vaccinated > 100 && (
              <Text>
                There are{" "}
                <FormatNumber number={vaccineData.total - country.population} />{" "}
                more people than the total population who have been tested
                indicating that tourists and travellers have been tested on
                their travels
              </Text>
            )}
          </View>
        )}
      </View>

      {/* {casesGraph?.length > 0 ? (
        <View style={styles.graphContainer}>
          <View style={styles.graphHeading}>
            <Text style={styles.graphHeadingContent}>Cases</Text>
          </View>
          <Graph dataFeed={casesGraph} />
        </View>
      ) : (
        <Text>There is no data for the graph containing cases</Text>
      )}

      {deathGraph?.length > 0 ? (
        <View style={styles.graphContainer}>
          <View style={styles.graphHeading}>
            <Text style={styles.graphHeadingContent}>Deaths</Text>
          </View>
          <Graph dataFeed={deathGraph} />
        </View>
      ) : (
        <Text>There is no data for the graph containing deaths</Text>
      )}

      {vaccineGraph?.length > 0 ? (
        <View style={styles.graphContainer}>
          <View style={styles.graphHeading}>
            <Text style={styles.graphHeadingContent}>Vaccines</Text>
          </View>
          <Graph dataFeed={vaccineGraph} />
        </View>
      ) : (
        <Text>There is no data for the graph containing vaccines</Text>
      )} */}
    </View>
  );
};

export default CountryFeed;

const styles = StyleSheet.create({
  countryContainer: {
    width: "100%",
  },
  graphContainer: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: 10,
  },
  graphHeading: {
    padding: 10,
    width: "100%",
    justifyContent: "center",
  },
  graphHeadingContent: {
    fontSize: 25,
  },
  populationContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  countryCardContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: "40%",
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    margin: 10,
    backgroundColor: "white",
    elevation: 5,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberCases: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
