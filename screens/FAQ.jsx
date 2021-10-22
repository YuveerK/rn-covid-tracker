import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const FAQ = () => {
  return (
    <View style={styles.generalContainer}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>COVID–19 (Coronavirus)</Text>
        </View>

        <Text style={[styles.headerHeading, { color: "red" }]}>
          Frequently Asked Questions
        </Text>

        <View style={styles.listItemContainer}>
          <View style={styles.listItem}>
            <View style={styles.listItemRow}>
              <Text style={styles.bulletPoint}>Q</Text>
              <Text style={styles.question}>
                What is coronavirus (COVID-19)?
              </Text>
            </View>
            <View style={styles.listItemRow}>
              <Text style={styles.bulletPoint}>A</Text>
              <Text style={styles.answer}>
                Coronaviruses are a large family of viruses which may cause
                illness in animals or humans. In humans, several coronaviruses
                are known to cause respiratory infections ranging from the
                common cold to more severe diseases such as Middle East
                Respiratory Syndrome (MERS) and Severe Acute Respiratory
                Syndrome (SARS). The most recently discovered coronavirus causes
                coronavirus disease COVID-19.
              </Text>
            </View>
          </View>

          <View style={styles.listItem}>
            <View style={styles.listItemRow}>
              <Text style={styles.bulletPoint}>Q</Text>
              <Text style={styles.question}>
                Does the coronavirus spread from person to person?
              </Text>
            </View>
            <View style={styles.listItemRow}>
              <Text style={styles.bulletPoint}>A</Text>
              <Text style={styles.answer}>
                The virus can spread from one person to another, mainly through
                droplets of saliva or mucus carried through the air for up to 1
                metre or so when an infected person coughs or sneezes. Viral
                particles may be breathed in, land on surfaces that people
                touch, or be transferred when shaking hands or sharing a drink
                with someone who has the virus.
              </Text>
            </View>
          </View>

          <View style={styles.listItem}>
            <View style={styles.listItemRow}>
              <Text style={styles.bulletPoint}>Q</Text>
              <Text style={styles.question}>
                What is the incubation period for the coronavirus?
              </Text>
            </View>
            <View style={styles.listItemRow}>
              <Text style={styles.bulletPoint}>A</Text>
              <Text style={styles.answer}>
                An incubation period is the time between being infected by a
                virus and showing symptoms of the illness. Current information
                suggests that symptoms of COVID-19 usually appear on average
                after five days from infection. However, the incubation period
                may be as short as two days or as long as 14 days before the
                infected person shows symptoms.
              </Text>
            </View>
          </View>

          <View style={styles.listItem}>
            <View style={styles.listItemRow}>
              <Text style={styles.bulletPoint}>Q</Text>
              <Text style={styles.question}>
                What are the symptoms of the new coronavirus?
              </Text>
            </View>
            <View style={styles.listItemRow}>
              <Text style={styles.bulletPoint}>A</Text>
              <Text style={styles.answer}>General symptoms:</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.left}>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Fever</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Dry Cough</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Shortness of breath</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Sore throat</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Body aches</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Chills</Text>
                </View>
              </View>

              <View style={[styles.left, { width: "40%" }]}>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Loss of taste or loss of smell</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Nausea</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Vomiting</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Diarrhea</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Fatigue</Text>
                </View>
                <View style={styles.listItemRowBullet}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      backgroundColor: "red",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text>Weakness</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.answer, { marginLeft: 15, marginTop: 15 }]}>
              Those who have the virus may have no obvious symptoms (be
              asymptomatic) or symptoms ranging from mild to severe. In some
              cases, the virus can cause pneumonia and be potentially
              life-threatening.
            </Text>
            <Text style={[styles.answer, { marginLeft: 15, marginTop: 15 }]}>
              <Text style={[styles.answer, { fontWeight: "bold" }]}>
                PLEASE NOTE:{" "}
              </Text>{" "}
              Most people who get sick will recover from COVID-19 – 80% of
              positive patients will have mild symptoms which are flu-like and
              will not require hospitalisation. Recovery time varies and, for
              people who are not severely ill, may be similar to a general
              flu-like episode. People with mild symptoms may recover within a
              few days. People who have pneumonia may take longer to recover
              (days to weeks). In cases of severe, life-threatening illness, it
              may take months for a person to recover. People who are already
              severely ill and contract the virus have the highest risk of being
              fatally affected.
            </Text>

            <View style={styles.listItem}>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>Q</Text>
                <Text style={styles.question}>
                  How is this new coronavirus confirmed?
                </Text>
              </View>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>A</Text>
                <Text style={styles.answer}>
                  A specialised test must be done to confirm that a person has
                  COVID-19.{" "}
                  <Text style={[styles.answer, { fontWeight: "bold" }]}>
                    However, it is important to note that only persons who show
                    symptoms or meet criteria as set out by the NICD will be
                    tested.{" "}
                  </Text>{" "}
                  If you or a loved one have suspected symptoms, please contact
                  your general practitioner first, who will liaise with the
                  necessary authorities to assist with tests. In cases of severe
                  respiratory distress, please go to your emergency unit.
                  However, inform them of your arrival prior to entering the
                  unit.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>Q</Text>
                <Text style={styles.question}>
                  Can people who are asymptomatic spread coronavirus?
                </Text>
              </View>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>A</Text>
                <Text style={styles.answer}>
                  A person who is asymptomatic may be spreading the virus and
                  could make others ill. How often this lasts if asymptomatic
                  transmission is occurring is unclear. The risk of catching the
                  virus from someone with no symptoms, is very low.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>Q</Text>
                <Text style={styles.question}>
                  Can the coronavirus live on surfaces such as fabrics and
                  carpets or hard surfaces?
                </Text>
              </View>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>A</Text>
                <Text style={styles.answer}>
                  How long the new coronavirus can live on a soft surface — and
                  more importantly, how easy or hard it is to spread this way —
                  isn’t clear yet. Available evidence suggests it can be
                  transmitted less easily from soft surfaces than
                  frequently-touched hard surfaces, such as a doorknob or the
                  elevator button.
                  {"\n"}
                  {"\n"}
                  According to WHO, coronaviruses may survive on surfaces for
                  just a few hours or several days. However, many factors will
                  influence this period, including the surface material and
                  weather.
                  {"\n"}
                  {"\n"}
                  This is the reason why taking personal hygiene steps such as
                  frequently washing your hands with soap and water or an
                  alcohol-based hand sanitiser, and wiping down often-touched
                  surfaces with disinfectants or a household cleaning spray, are
                  excellent infection prevention practices.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>Q</Text>
                <Text style={styles.question}>
                  Should my children and I wear a face mask to protect against
                  coronavirus?
                </Text>
              </View>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>A</Text>
                <Text style={styles.answer}>
                  Please follow public health recommendations. Currently, the
                  use of face masks are recommended for the general public. You
                  will be required to wear a face mask at all times when
                  entering any Life Healthcare facility as per current
                  legislation.
                  {"\n"}
                  {"\n"}
                  If you have respiratory symptoms like coughing or sneezing,
                  experts recommend wearing a mask to protect others. This may
                  help contain droplets containing any type of virus, including
                  the flu, and protect close contacts (anyone within 1 to 2
                  meters of the infected person).
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>Q</Text>
                <Text style={styles.question}>
                  Should someone who is immunocompromised wear a mask?
                </Text>
              </View>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>A</Text>
                <Text style={styles.answer}>
                  It is recommended that you wear a face mask if you are
                  immunocompromised as a result of an illness or treatment that
                  you are undergoing, as per current legislation. If your
                  healthcare practitioner advises you to wear a face mask
                  because you have a particularly vulnerable immune system or
                  for other reasons, follow that advice.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>Q</Text>
                <Text style={styles.question}>
                  Is there a vaccine available for coronavirus?
                </Text>
              </View>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>A</Text>
                <Text style={styles.answer}>
                  No vaccine is available, although scientists are working on
                  vaccines. In 2003, scientists tried to develop a vaccine to
                  prevent the SARS virus but the epidemic ended before the
                  vaccine could enter clinical trials
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>Q</Text>
                <Text style={styles.question}>
                  What is the treatment for coronavirus?
                </Text>
              </View>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>A</Text>
                <Text style={styles.answer}>
                  Treatment is based on supportive measures, which means giving
                  fluids, medicine to reduce fever, and, in severe cases,
                  supplemental oxygen. People who become critically ill from
                  COVID-19 may need a ventilator to help them breathe.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>Q</Text>
                <Text style={styles.question}>
                  What should I do if I think I or a loved one has contracted
                  the coronavirus?
                </Text>
              </View>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>A</Text>
                <Text style={styles.answer}>
                  If you have a general practitioner, call them first for
                  advice. It is far more likely to be the seasonal flu or
                  another viral illness.
                  {"\n"}
                  {"\n"}
                  If you do not have a doctor and you are concerned that you or
                  your child may have coronavirus, contact your local hospital
                  for assistance or advice.
                  {"\n"}
                  {"\n"}
                  Only people with symptoms of severe respiratory illness should
                  go to their nearest emergency unit. Severe symptoms are rapid
                  heart rate, low blood pressure, high or very low temperatures,
                  confusion, trouble breathing and severe dehydration. However,
                  inform them of your arrival prior to entering the unit.
                </Text>
              </View>
            </View>

            <View style={styles.listItem}>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>Q</Text>
                <Text style={styles.question}>
                  Can people who recover from the coronavirus still be carriers
                  and therefore spread it?
                </Text>
              </View>
              <View style={styles.listItemRow}>
                <Text style={styles.bulletPoint}>A</Text>
                <Text style={styles.answer}>
                  People who get COVID-19 need to work with providers and public
                  health authorities to determine when they are no longer
                  contagious.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: "white",
    flex: 1,
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
  listItemContainer: {
    padding: 10,
  },
  listItem: {
    marginVertical: 15,
  },
  listItemRow: {
    flexDirection: "row",
  },
  listItemRowBullet: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletPoint: {
    color: "red",
    marginRight: 10,
  },
  question: {
    color: "#093153",
    fontWeight: "bold",
    maxWidth: "95%",
  },
  answer: {
    color: "#093153",
    maxWidth: "95%",
  },
  left: {
    marginLeft: 20,
    width: "45%",
  },
});
