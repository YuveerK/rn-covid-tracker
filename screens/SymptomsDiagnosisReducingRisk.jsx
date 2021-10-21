import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SymptomsDiagnosisReducingRisk = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>
            COVID-19 (Coronavirus) General Information
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/fever.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/body-aches.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/chills.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/cough.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/gastro.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/loss-of-taste.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/shortness-of-breath.png")}
            style={styles.imageLogo}
          />
          <Image
            source={require("../assets/covid-symptoms/sore-throat.png")}
            style={styles.imageLogo}
          />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeadingContainer}>
              <Text style={styles.headerHeading}>
                What are the signs and symptoms?
              </Text>
            </View>
            <View style={styles.cardContent}>
              <Text
                style={[styles.cardContentParagraphs, { fontStyle: "italic" }]}
              >
                Reported symptoms include:
              </Text>

              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "50%" }}>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>
                      Fever – 38°C or higher
                    </Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>Dry cough</Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>
                      Shortness of breath
                    </Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>
                      Sore throat
                    </Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>Body aches</Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>Chills</Text>
                  </View>
                </View>
                <View style={{ width: "50%" }}>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>
                      Loss of smell / taste
                    </Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>Nausea</Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>Vomiting</Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>Diarrhea</Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>Fatigue</Text>
                  </View>
                  <View style={styles.listItem}>
                    <View style={styles.bulletPoint}></View>
                    <Text style={styles.cardContentParagraphs}>Weakness</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeadingContainer}>
              <Text style={styles.headerHeading}>
                How is COVID-19 diagnosed?
              </Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.listItem}>
                <View style={styles.bulletPoint}></View>
                <Text style={styles.cardContentParagraphs}>
                  COVID-19 is diagnosed by a laboratory test, polymerase chain
                  reaction (PCR) molecular test, on a respiratory tract sample
                </Text>
              </View>

              <View style={styles.listItem}>
                <View style={styles.bulletPoint}></View>
                <Text style={styles.cardContentParagraphs}>
                  Samples are collected from the nose and throat. A blood sample
                  may be taken.
                </Text>
              </View>

              <View style={styles.listItem}>
                <View style={styles.bulletPoint}></View>
                <Text style={styles.cardContentParagraphs}>
                  Please present yourself for testing if you have an acute
                  respiratory illness with a sudden onset of at least one of the
                  following symptoms: cough, sore throat, shortness of breath,
                  fever of 38°C or higher, body aches, chills, loss of smell or
                  taste, nausea, vomiting, diarrhea, fatigue or weakness.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.generalHeadingContainer}>
            <Text style={[styles.headerHeading, { fontSize: 13 }]}>
              How to reduce the general risk of spreading acute respiratory
              infections like COVID-19 and other viruses such as seasonal
              influenza
            </Text>
          </View>

          <View style={styles.cardItem}>
            <Image
              source={require("../assets/covid-symptoms/1_cover-cough.png")}
              style={styles.cardLogo}
            />
            <Text style={styles.cardContentDescription}>
              Cover your cough or sneeze with a flexed elbow or tissues. Throw
              the tissues in a bin. Do not cover your cough or sneeze with your
              hands or cough or sneeze in to open air.
            </Text>
          </View>

          <View style={styles.cardItem}>
            <Image
              source={require("../assets/covid-symptoms/1_cover-cough.png")}
              style={styles.cardLogo}
            />
            <Text style={styles.cardContentDescription}>
              Cover your cough or sneeze with a flexed elbow or tissues. Throw
              the tissues in a bin. Do not cover your cough or sneeze with your
              hands or cough or sneeze in to open air.
            </Text>
          </View>

          <View style={styles.cardItem}>
            <Image
              source={require("../assets/covid-symptoms/1_cover-cough.png")}
              style={styles.cardLogo}
            />
            <Text style={styles.cardContentDescription}>
              Cover your cough or sneeze with a flexed elbow or tissues. Throw
              the tissues in a bin. Do not cover your cough or sneeze with your
              hands or cough or sneeze in to open air.
            </Text>
          </View>

          <View style={styles.cardItem}>
            <Image
              source={require("../assets/covid-symptoms/1_cover-cough.png")}
              style={styles.cardLogo}
            />
            <Text style={styles.cardContentDescription}>
              Cover your cough or sneeze with a flexed elbow or tissues. Throw
              the tissues in a bin. Do not cover your cough or sneeze with your
              hands or cough or sneeze in to open air.
            </Text>
          </View>

          <View style={styles.cardItem}>
            <Image
              source={require("../assets/covid-symptoms/1_cover-cough.png")}
              style={styles.cardLogo}
            />
            <Text style={styles.cardContentDescription}>
              Cover your cough or sneeze with a flexed elbow or tissues. Throw
              the tissues in a bin. Do not cover your cough or sneeze with your
              hands or cough or sneeze in to open air.
            </Text>
          </View>

          <View style={styles.cardItem}>
            <Image
              source={require("../assets/covid-symptoms/1_cover-cough.png")}
              style={styles.cardLogo}
            />
            <Text style={styles.cardContentDescription}>
              Cover your cough or sneeze with a flexed elbow or tissues. Throw
              the tissues in a bin. Do not cover your cough or sneeze with your
              hands or cough or sneeze in to open air.
            </Text>
          </View>

          <View style={styles.cardItem}>
            <Image
              source={require("../assets/covid-symptoms/1_cover-cough.png")}
              style={styles.cardLogo}
            />
            <Text style={styles.cardContentDescription}>
              Cover your cough or sneeze with a flexed elbow or tissues. Throw
              the tissues in a bin. Do not cover your cough or sneeze with your
              hands or cough or sneeze in to open air.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SymptomsDiagnosisReducingRisk;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F2F3F4",
    padding: 10,
    marginVertical: 10,
  },
  cardLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  cardContentDescription: {
    color: "#576484",
    maxWidth: "90%",
  },
  header: {
    width: "100%",
    height: 130,
    backgroundColor: "#093153",
    alignItems: "center",
    justifyContent: "center",
  },
  headerHeading: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageLogo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    margin: 15,
  },
  cardContainer: {
    padding: 15,
  },
  card: {
    borderRadius: 15,
    marginVertical: 15,
  },
  cardHeadingContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#093153",
    height: 70,
    justifyContent: "center",
    paddingVertical: 40,
  },
  generalHeadingContainer: {
    backgroundColor: "#093153",
    borderRadius: 30,
    justifyContent: "center",
    padding: 20,
  },
  cardContent: {
    padding: 15,
    backgroundColor: "#F2F3F4",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 5,
    width: "100%",
  },
  bulletPoint: {
    width: 5,
    height: 5,
    backgroundColor: "red",
    marginTop: 7,
  },
  cardContentParagraphs: {
    paddingLeft: 10,
    color: "#576484",
  },
});
