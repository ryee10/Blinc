import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#DA84FE", "#6079FE"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0.9, y: 0.7 }}
      locations={[0.1, 0.9]}
      style={styles.container}
    >
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container2}>
            <LinearGradient colors={["#2b9fff", "#476afe"]} style={styles.card}>
              <View style={styles.leftContainer}>
                <View>
                  <Text style={styles.label1}>Wallet Balance</Text>
                  <Text style={styles.label2}>Balance</Text>
                  <Text style={styles.value1}>$ 100.00</Text>
                </View>
                <View style={styles.accountContainer}>
                  <Text style={styles.label2}>Account No.</Text>
                  <Text style={styles.value2}>123456789012</Text>
                </View>
              </View>
              <View style={styles.rightContainer}>
                <View style={styles.dotsContainer}>
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                </View>
                <View style={styles.chipContainer}>
                  <Image
                    source={require("../../../../assets/images/chip.png")}
                    style={styles.chip}
                  />
                </View>
              </View>
            </LinearGradient>
            <View style={styles.Box2}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Transfer")}
                >
                  <View style={styles.circleButton}>
                    <Ionicons
                      name="swap-horizontal-outline"
                      size={24}
                      color="#4769FE"
                    />
                  </View>
                  <Text style={styles.label3}>Transfer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("TopUp")}
                >
                  <View style={styles.circleButton}>
                    <Ionicons name="push-outline" size={24} color="#DB77FD" />
                  </View>
                  <Text style={styles.label3}>Top Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("TopUpReceipt")}
                >
                  <View style={styles.circleButton}>
                    <Ionicons name="wallet-outline" size={24} color="#F43F5E" />
                  </View>
                  <Text style={styles.label3}>Withdraw</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.countContainer}>
                <View style={styles.box2}>
                  <View style={styles.inner2}>
                    <MaterialCommunityIcons
                      name="cart-minus"
                      size={28}
                      color="#4769FE"
                    />
                    <Text style={styles.label4}>Total Orders:</Text>
                    <Text style={styles.label4value}>0</Text>
                  </View>
                </View>

                <View style={styles.box2}>
                  <View style={styles.inner2}>
                    <MaterialCommunityIcons
                      name="cart-check"
                      size={28}
                      color="#DB77FD"
                    />
                    <Text style={styles.label4}>Completed Orders:</Text>
                    <Text style={styles.label4value}>0</Text>
                  </View>
                </View>

                <View style={styles.box2}>
                  <View style={styles.inner2}>
                    <FontAwesome5
                      name="hand-holding-usd"
                      size={28}
                      color="#F43F5E"
                    />
                    <Text style={styles.label4}>Total Spent:</Text>
                    <Text style={styles.label4value}>0</Text>
                  </View>
                </View>
              </View>

              <View style={styles.recentContainer}>
                <Text style={styles.recent}>Recent Activity</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("RecentActivity")}
                >
                  <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.transactions}>
                <View style={styles.transactionItem}>
                  <View style={styles.circleIcon}>
                    <Ionicons name="card-outline" size={24} color="#4769FE" />
                  </View>
                  <View style={styles.transactionDetails}>
                    <Text style={styles.transactionTitle}>Order Payment</Text>
                    <Text style={styles.transactionDate}>07-04-24</Text>
                  </View>
                  <Text style={styles.transactionAmount}>+ $15</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
  },
  container1: {
    marginStart: 25,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 50,
    height: 50,
  },

  container2: {
    alignItems: "center",
  },

  card: {
    flexDirection: "row",
    width: "90%",
    height: 191,
    borderRadius: 10,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  rightContainer: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  label1: {
    color: "white",
    fontSize: 22,
    marginBottom: 10,
    fontFamily: "WorkSans-Regular",
  },

  label2: {
    color: "white",
    fontSize: 16,
    fontFamily: "WorkSans-Regular",
  },

  value1: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "WorkSans-Regular",
  },

  value2: {
    color: "white",
    fontSize: 16,
    fontFamily: "WorkSans-Regular",
  },

  accountContainer: {
    marginTop: 20,
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 60,
  },

  dot: {
    width: 7,
    height: 7,
    backgroundColor: "white",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  chipContainer: {
    alignItems: "flex-end",
  },
  chip: {
    width: 50,
    height: 50,
  },

  Box2: {
    width: screenWidth,
    height: screenHeight,
    marginTop: 40,
    backgroundColor: "#F0F4F7",
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    alignItems: "center",
    paddingBottom: 20,
  },

  label3: {
    color: "black",
    marginTop: 5,
    fontSize: 12,
    fontFamily: "WorkSans-Regular",
    textAlign: "center",
  },

  buttonContainer: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-around",
  },

  button: {
    alignItems: "center",
  },

  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circleIcon: {
    width: 38,
    height: 38,
    borderRadius: 50,
    backgroundColor: "#DAE1FF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: '3%'
  },

  countContainer: {
    height: "10%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  box2: {
    width: "32%",
    height: 100,
    padding: 2,
    borderRadius: 10,
  },

  inner2: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  label4: {
    color: "black",
    fontSize: 12,
    marginTop: 5,
    fontFamily: "WorkSans-Regular",
  },

  label4value: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "WorkSans-Regular",
  },

  recentContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#F0F4F7",
  },

  recent: {
    fontSize: 18,
    padding: 25,
    color: "#515151",
    fontFamily: "WorkSans-Regular",
  },

  viewAll: {
    fontSize: 18,
    color: "#4795FC",
    padding: 25,
    fontFamily: "WorkSans-Regular",
  },

  transactions: {
    width: "100%",
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
  },

  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  transactionDetails: {
    flex: 1,
    marginLeft: "3%",
    
  },

  transactionTitle: {
    fontFamily: "WorkSans-Regular",
    fontSize: 16,
  },

  transactionDate: {
    fontFamily: "WorkSans-Medium",
    color: "#949494",
    fontSize: 14,
  },

  transactionAmount: {
    fontSize: 16,
    fontFamily: "WorkSans-Medium",
    marginRight: "5%",
    color: "#17A34E",
  },
});

export default HomeScreen;
