import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const Education = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Image
          source={require("../assets/education-bg.jpg")}
          style={{ width: "100%", height: 250, resizeMode: "cover" }}
        />

        <View style={styles.listContainer}>
          <View style={styles.contentContainer}>
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>
              Coronavirus disease (COVID - 19) advice for the public
            </Text>

            <Text
              style={{
                color: "#999999",
                fontSize: 20,
                lineHeight: 35,
                marginBottom: 30,
              }}
            >
              Stay aware of the latest information on the COVID-19 outbreak,
              available on the WHO website and through your national and local
              public health authority. Most people who become infected
              experience mild illness and recover, but it can be more severe for
              others. Take care of your health and protect others by doing the
              following:
            </Text>

            <Text style={{ fontSize: 40, fontWeight: "bold" }}>
              Basic protective measures against the new coronavirus
            </Text>

            <View style={styles.listContainer}>
              <View style={styles.listItem}>
                <View style={styles.listItemLeft}>
                  <Image
                    source={require("../assets/wash-hands.png")}
                    style={styles.listImage}
                  />
                </View>
                <View style={styles.listItemRight}>
                  <Text style={styles.listItemRightHeading}>
                    Wash you hands
                  </Text>
                  <Text style={styles.listItemRightContent}>
                    Wash hands often with soap and water for at least 20s
                  </Text>
                </View>
              </View>

              <View style={styles.listItem}>
                <View style={styles.listItemLeft}>
                  <Image
                    source={require("../assets/wear-mask.png")}
                    style={styles.listImage}
                  />
                </View>
                <View style={styles.listItemRight}>
                  <Text style={styles.listItemRightHeading}>
                    Wear a Facemask
                  </Text>
                  <Text style={styles.listItemRightContent}>
                    You should wear facemask when you are around other people.
                  </Text>
                </View>
              </View>
              <View style={styles.listItem}>
                <View style={styles.listItemLeft}>
                  <Image
                    source={require("../assets/touch-face.png")}
                    style={styles.listImage}
                  />
                </View>
                <View style={styles.listItemRight}>
                  <Text style={styles.listItemRightHeading}>
                    Avoid touching your face
                  </Text>
                  <Text style={styles.listItemRightContent}>
                    Hands touch many surfaces and can pick up viruses.
                  </Text>
                </View>
              </View>
              <View style={styles.listItem}>
                <View style={styles.listItemLeft}>
                  <Image
                    source={require("../assets/close-contact.png")}
                    style={styles.listImage}
                  />
                </View>
                <View style={styles.listItemRight}>
                  <Text style={styles.listItemRightHeading}>
                    Avoid close contact
                  </Text>
                  <Text style={styles.listItemRightContent}>
                    Put distance between yourself and other people.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.mainHeading}>
              Important information about COVID-19
            </Text>
            <TouchableOpacity
              style={styles.link}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("Symptoms, diagnosis, reducing risk")
              }
            >
              <Text style={styles.subHeading}>
                Symptoms, diagnosis, reducing risk
              </Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.link}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("FAQs")}
            >
              <Text style={styles.subHeading}>Frequently Asked Questions</Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.mainHeading}>Before Going to Hospital</Text>
            <TouchableOpacity style={styles.link} activeOpacity={0.5}>
              <Text style={styles.subHeading}>How to get tested</Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.link} activeOpacity={0.5}>
              <Text style={[styles.subHeading, { maxWidth: "90%" }]}>
                Self-isolation guideline while waiting for test results
              </Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.link} activeOpacity={0.5}>
              <Text style={[styles.subHeading, { maxWidth: "90%" }]}>
                Admission request
              </Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.link} activeOpacity={0.5}>
              <Text style={[styles.subHeading, { maxWidth: "90%" }]}>
                Admissions process during the COVID-19 pandemic
              </Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.mainHeading}>
              Preventing the spread of infection
            </Text>
            <TouchableOpacity style={styles.link} activeOpacity={0.5}>
              <Text style={styles.subHeading}>
                General infection prevention tips
              </Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.link} activeOpacity={0.5}>
              <Text style={[styles.subHeading, { maxWidth: "90%" }]}>
                How to hand wash
              </Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.link} activeOpacity={0.5}>
              <Text style={[styles.subHeading, { maxWidth: "90%" }]}>
                A guide to waterless hand-washing
              </Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.link} activeOpacity={0.5}>
              <Text style={[styles.subHeading, { maxWidth: "90%" }]}>
                How to use alcohol handrub effectively
              </Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.link} activeOpacity={0.5}>
              <Text style={[styles.subHeading, { maxWidth: "90%" }]}>
                Dos and don’ts of wearing a cloth mask
              </Text>
              <Entypo name="chevron-thin-right" size={15} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Education;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    padding: 20,
  },
  listItem: {
    flexDirection: "row",
    padding: 15,
    borderTopWidth: 2,
    borderTopColor: "lightgrey",
  },
  listItemLeft: {
    width: 80,
    height: 80,
  },
  listImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "contain",
  },
  listItemRight: {
    flex: 1,
    padding: 5,
  },
  listItemRightHeading: {
    fontSize: 25,
    marginBottom: 5,
  },
  mainHeading: {
    color: "red",
    fontSize: 20,
  },
  subHeading: {
    color: "#364A63",
  },
  link: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#EFF1FF",
  },
});
