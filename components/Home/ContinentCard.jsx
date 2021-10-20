import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FormatNumber from "./FormatNumber";

const ContinentCard = ({ countryData, continentData }) => {
  const [globalStats, setGlobalStats] = useState([]);
  const [globalStatsCountryInfo, setGlobalStatsCountryInfo] = useState([]);
  const [globalVaccineData, setGlobalVaccineData] = useState([]);
  const [northAmerica, setnorthAmerica] = useState([]);
  const [asia, setAsia] = useState([]);
  const [southAmerica, setSouthAmerica] = useState([]);
  const [europe, setEurope] = useState([]);
  const [africa, setAfrica] = useState([]);
  const [autraliaOceania, setAustraliaOceania] = useState([]);
  let image = "";

  //get country stats
  useEffect(() => {
    if (countryData) {
      buildCountryData(countryData);
    }
  }, []);

  const buildCountryData = (countryData) => {
    let theNorthAmerica = [];
    let theAsia = [];
    let theSouthAmerica = [];
    let theEurope = [];
    let theAfrica = [];
    let theAustraliaOceania = [];
    countryData.map((country) => {
      if (country.continent === "North America") {
        theNorthAmerica.push(country);
      } else if (country.continent === "Asia") {
        theAsia.push(country);
      } else if (country.continent === "South America") {
        theSouthAmerica.push(country);
      } else if (country.continent === "Europe") {
        theEurope.push(country);
      } else if (country.continent === "Africa") {
        theAfrica.push(country);
      } else if (country.continent === "Australia-Oceania") {
        theAustraliaOceania.push(country);
      }
    });
    setnorthAmerica(theNorthAmerica);
    setAsia(theAsia);
    setSouthAmerica(theSouthAmerica);
    setEurope(theEurope);
    setAfrica(theAfrica);
    setAustraliaOceania(theAustraliaOceania);
  };

  useEffect(() => {
    const getGlobalVaccineData = async () => {
      await fetch(
        "https://disease.sh/v3/covid-19/vaccine/coverage/countries/za?lastdays=1&fullData=false"
      )
        .then((response) => response.json())
        .then((data) => {
          setGlobalVaccineData(Object.values(data.timeline));
        });
    };
    getGlobalVaccineData();
  }, []);
  let total = globalStats.cases + globalStats.recovered + globalStats.deaths;
  let cases = (globalStats.cases / total) * 100;
  let recovered = (globalStats.recovered / total) * 100;
  let deaths = (globalStats.deaths / total) * 100;
  image = globalStatsCountryInfo.flag;

  return (
    <>
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardHeading1}>
            Coronavirus Cases -{" "}
            <Text style={styles.cardHeading2}>North America</Text>
          </Text>
        </View>

        <View style={{ height: 600 }}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderData}>
              <Text>Country</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Cases</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Recovered</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Deaths</Text>
            </View>
          </View>
          <ScrollView nestedScrollEnabled>
            {northAmerica.map((country, index) => (
              <View
                style={
                  index % 2 === 0 ? styles.tableHeader : styles.tableHeader1
                }
                key={index}
              >
                <View style={styles.tableHeaderData}>
                  <Image
                    source={{ uri: `${country.countryInfo.flag}` }}
                    style={{
                      width: 50,
                      height: 40,
                      resizeMode: "contain",
                      borderRadius: 9,
                    }}
                  />
                  <Text>{country.country}</Text>
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.cases}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayCases > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "orange" }}>+</Text>
                      <FormatNumber
                        number={country.todayCases}
                        color="orange"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.recovered}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayRecovered > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "green" }}>+</Text>
                      <FormatNumber
                        number={country.todayRecovered}
                        color="green"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.deaths}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayDeaths > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "red" }}>+</Text>
                      <FormatNumber
                        number={country.todayDeaths}
                        color="red"
                        size={15}
                      />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardHeading1}>
            Coronavirus Cases - <Text style={styles.cardHeading2}>Asia</Text>
          </Text>
        </View>

        <View style={{ height: 600 }}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderData}>
              <Text>Country</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Cases</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Recovered</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Deaths</Text>
            </View>
          </View>
          <ScrollView nestedScrollEnabled>
            {asia.map((country, index) => (
              <View style={styles.tableHeader} key={index}>
                <View style={styles.tableHeaderData}>
                  <Image
                    source={{ uri: `${country.countryInfo.flag}` }}
                    style={{
                      width: 50,
                      height: 40,
                      resizeMode: "contain",
                      borderRadius: 9,
                    }}
                  />
                  <Text>{country.country}</Text>
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.cases}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayCases > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "orange" }}>+</Text>
                      <FormatNumber
                        number={country.todayCases}
                        color="orange"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.recovered}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayRecovered > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "green" }}>+</Text>
                      <FormatNumber
                        number={country.todayRecovered}
                        color="green"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.deaths}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayDeaths > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "red" }}>+</Text>
                      <FormatNumber
                        number={country.todayDeaths}
                        color="red"
                        size={15}
                      />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardHeading1}>
            Coronavirus Cases -{" "}
            <Text style={styles.cardHeading2}>South America</Text>
          </Text>
        </View>

        <View style={{ height: 600 }}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderData}>
              <Text>Country</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Cases</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Recovered</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Deaths</Text>
            </View>
          </View>
          <ScrollView nestedScrollEnabled>
            {southAmerica.map((country, index) => (
              <View style={styles.tableHeader} key={index}>
                <View style={styles.tableHeaderData}>
                  <Image
                    source={{ uri: `${country.countryInfo.flag}` }}
                    style={{
                      width: 50,
                      height: 40,
                      resizeMode: "contain",
                      borderRadius: 9,
                    }}
                  />
                  <Text>{country.country}</Text>
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.cases}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayCases > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "orange" }}>+</Text>
                      <FormatNumber
                        number={country.todayCases}
                        color="orange"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.recovered}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayRecovered > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "green" }}>+</Text>
                      <FormatNumber
                        number={country.todayRecovered}
                        color="green"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.deaths}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayDeaths > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "red" }}>+</Text>
                      <FormatNumber
                        number={country.todayDeaths}
                        color="red"
                        size={15}
                      />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardHeading1}>
            Coronavirus Cases - <Text style={styles.cardHeading2}>Europe</Text>
          </Text>
        </View>

        <View style={{ height: 600 }}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderData}>
              <Text>Country</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Cases</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Recovered</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Deaths</Text>
            </View>
          </View>
          <ScrollView nestedScrollEnabled>
            {europe.map((country, index) => (
              <View style={styles.tableHeader} key={index}>
                <View style={styles.tableHeaderData}>
                  <Image
                    source={{ uri: `${country.countryInfo.flag}` }}
                    style={{
                      width: 50,
                      height: 40,
                      resizeMode: "contain",
                      borderRadius: 9,
                    }}
                  />
                  <Text>{country.country}</Text>
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.cases}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayCases > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "orange" }}>+</Text>
                      <FormatNumber
                        number={country.todayCases}
                        color="orange"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.recovered}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayRecovered > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "green" }}>+</Text>
                      <FormatNumber
                        number={country.todayRecovered}
                        color="green"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.deaths}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayDeaths > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "red" }}>+</Text>
                      <FormatNumber
                        number={country.todayDeaths}
                        color="red"
                        size={15}
                      />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardHeading1}>
            Coronavirus Cases - <Text style={styles.cardHeading2}>Africa</Text>
          </Text>
        </View>

        <View style={{ height: 600 }}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderData}>
              <Text>Country</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Cases</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Recovered</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Deaths</Text>
            </View>
          </View>
          <ScrollView nestedScrollEnabled>
            {africa.map((country, index) => (
              <View style={styles.tableHeader} key={index}>
                <View style={styles.tableHeaderData}>
                  <Image
                    source={{ uri: `${country.countryInfo.flag}` }}
                    style={{
                      width: 50,
                      height: 40,
                      resizeMode: "contain",
                      borderRadius: 9,
                    }}
                  />
                  <Text>{country.country}</Text>
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.cases}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayCases > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "orange" }}>+</Text>
                      <FormatNumber
                        number={country.todayCases}
                        color="orange"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.recovered}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayRecovered > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "green" }}>+</Text>
                      <FormatNumber
                        number={country.todayRecovered}
                        color="green"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.deaths}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayDeaths > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "red" }}>+</Text>
                      <FormatNumber
                        number={country.todayDeaths}
                        color="red"
                        size={15}
                      />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.cardHeading1}>
            Coronavirus Cases -{" "}
            <Text style={styles.cardHeading2}>Australia-Oceania</Text>
          </Text>
        </View>

        <View style={{ height: 600 }}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderData}>
              <Text>Country</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Cases</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Recovered</Text>
            </View>
            <View style={styles.tableHeaderData}>
              <Text>Deaths</Text>
            </View>
          </View>
          <ScrollView nestedScrollEnabled>
            {autraliaOceania.map((country, index) => (
              <View style={styles.tableHeader} key={index}>
                <View style={styles.tableHeaderData}>
                  <Image
                    source={{ uri: `${country.countryInfo.flag}` }}
                    style={{
                      width: 50,
                      height: 40,
                      resizeMode: "contain",
                      borderRadius: 9,
                    }}
                  />
                  <Text>{country.country}</Text>
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.cases}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayCases > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "orange" }}>+</Text>
                      <FormatNumber
                        number={country.todayCases}
                        color="orange"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.recovered}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayRecovered > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "green" }}>+</Text>
                      <FormatNumber
                        number={country.todayRecovered}
                        color="green"
                        size={15}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.tableHeaderData}>
                  <FormatNumber
                    number={country.deaths}
                    color="#364A63"
                    size={15}
                  />
                  {country.todayDeaths > 0 && (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ color: "red" }}>+</Text>
                      <FormatNumber
                        number={country.todayDeaths}
                        color="red"
                        size={15}
                      />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default ContinentCard;

const styles = StyleSheet.create({
  tableHeader: {
    width: "100%",
    flexDirection: "row",
  },
  tableHeader1: {
    width: "100%",
    backgroundColor: "aliceblue",
    flexDirection: "row",
  },
  tableHeaderData: {
    width: Dimensions.get("screen").width / 4 - 19,
    margin: 5,
    justifyContent: "center",
  },
  labelColorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: "100%",
    padding: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginVertical: 20,
  },
  cardText: {
    color: "#576484",
  },
  cardHeading1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  cardHeading2: {
    color: "grey",
  },
  cardHeadingDescription: {
    letterSpacing: 2,
    fontWeight: "bold",
    color: "#809BB1",
  },
  cardRow: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
