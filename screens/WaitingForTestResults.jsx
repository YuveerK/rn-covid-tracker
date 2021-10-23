import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Roboto_500Medium_Italic } from "@expo-google-fonts/roboto";
const WaitingForTestResults = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>Waiting For Test Results</Text>
        </View>
        <View style={styles.container2}>
          <Text
            style={[styles.headerHeading, { color: "red", marginBottom: 20 }]}
          >
            SELF-ISOLATION AT HOME
          </Text>

          <Text style={styles.rootText}>
            While awaiting test results for COVID-19; and you have been assessed
            as being medically well enough to be managed at home – please
            consider yourself as potentially infectious until the final results
            are available.
            {"\n"}
          </Text>
          <Text style={[styles.rootText, { fontWeight: "bold" }]}>
            You will need to abide by the following:
            {"\n"}
            {"\n"}
          </Text>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              You should quarantine yourself at home. Don’t go to work, avoid
              leaving your home, and as far as possible avoid close interactions
              with other people.{" "}
            </Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              You should clean your hands with soap and water frequently.
              Alcohol-based sanitisers may also be used, provided they contain
              at least 70% alcohol.{" "}
            </Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              Do not have visitors in your home. Only those who live in your
              home should be allowed to stay. If it is urgent to speak to
              someone who is not a member of your household, do this over the
              phone.{" "}
            </Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              You should wear a face mask when in the same room (or vehicle) as
              other people{" "}
            </Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              At home, you should stay in a specific room and use your own
              bathroom (if possible). If you live in shared accommodation with a
              communal kitchen, bathroom(s) and living area, you should stay in
              your room with the door closed, only coming out when necessary,
              wearing a face mask if one has been issued to you. Keep your
              windows open to allow adequate ventilation.{" "}
            </Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              You should practice good cough and sneeze hygiene by coughing or
              sneezing into a tissue, discarding the tissue immediately
              afterwards in a lined trash can, and then wash your hands
              immediately. Alternatively you can cough into your flexed elbow{" "}
            </Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              If you need to wash the laundry at home before the results are
              available, then wash all laundry at the highest temperature
              compatible with the fabric using laundry detergent. This should be
              above 60°C. If possible, tumble dry and iron using the highest
              setting compatible with the fabric. Wear disposable gloves and a
              plastic apron when handling soiled materials if possible and clean
              all surfaces and the area around the washing machine. Do not take
              laundry to a laundrette. Wash your hands thoroughly with soap and
              water after handling dirty laundry (remove gloves first if used).{" "}
            </Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              You should avoid sharing household items like dishes, cups, eating
              utensils and towels. After using any of these, the items should be
              thoroughly washed with soap and water{" "}
            </Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              All high-touch surfaces like table tops, counters, toilets,
              phones, computers, etc. that you may have touched should be
              appropriately and frequently cleaned.{" "}
            </Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons
              name="square-outline"
              size={15}
              color="red"
              style={{ marginTop: 2, marginRight: 10 }}
            />
            <Text style={styles.rootText}>
              Monitor your symptoms – seek prompt medical attention if your
              illness is worsening, for example, if you have difficulty
              breathing, or if the symptoms of the person you are caring for are
              worsening. If it’s not a medical emergency, call your doctor or
              healthcare facility. If it is an emergency and you need to call an
              ambulance, inform the call handler or operator that you are being
              tested for SARS-CoV-2 (Covid-19).{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WaitingForTestResults;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  container2: {
    padding: 20,
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
  rootTextHeading: {
    color: "#093153",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 15,
  },

  rootText: {
    color: "#093153",
    fontSize: 14,
  },
  listItemContainer: {
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 0,
    marginVertical: 5,
    width: "95%",
  },
  setpsItemsContainer: {
    paddingHorizontal: 30,
  },
  step: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
  },
  number: {
    width: 30,
    height: 30,
    backgroundColor: "#093153",
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 15,
  },
  actualNumber: {
    color: "white",
  },
  stepsContent: {
    width: "90%",
    backgroundColor: "#F2F3F4",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
