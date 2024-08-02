import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



const OrderScreen = () => {
  const [activeTab, setActiveTab] = useState("Active");
  

  const renderContent = () => {
    if (activeTab === "Active") {
      return <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.contentContainer}>
        <View style={styles.transactions}>
          <View style={styles.transactionItem}>
            <View style={styles.circleIcon}>
              <Ionicons name="reader-outline" size={24} color="#4769FE" />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>Custom Logo</Text>
              <Text style={styles.transactionDate}>July 13, 2024</Text>
              <Text style={styles.transactionDate}>Juan Dela Cruz</Text>
            </View>
            <Text style={styles.transactionAmounts}>Price:</Text>
            <Text style={styles.transactionAmount}>$15</Text>
          </View>
        </View>
        <View style={styles.transactions}>
          <View style={styles.transactionItem}>
            <View style={styles.circleIcon}>
              <Ionicons name="reader-outline" size={24} color="#4769FE" />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>Logo Branding</Text>
              <Text style={styles.transactionDate}>July 12, 2024</Text>
              <Text style={styles.transactionDate}>Anita Break</Text>
            </View>
            <Text style={styles.transactionAmounts}>Price:</Text>
            <Text style={styles.transactionAmount}>$15</Text>
          </View>
        </View>
      </View>
      
    </ScrollView>
    } else if (activeTab === "For Approval") {
      return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.contentContainer}>
            <View style={styles.transactions}>
              <View style={styles.transactionItem}>
                <View style={styles.circleIcon}>
                  <Ionicons name="reader-outline" size={24} color="#4769FE" />
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionTitle}>Branding</Text>
                  <Text style={styles.transactionDate}>July 7, 2024</Text>
                  <Text style={styles.transactionDate}>Juan Dela Cruz</Text>
                </View>
                <Text style={styles.transactionAmounts}>Price:</Text>
                <Text style={styles.transactionAmount}>$15</Text>
              </View>
            </View>
            <View style={styles.transactions}>
              <View style={styles.transactionItem}>
                <View style={styles.circleIcon}>
                  <Ionicons name="reader-outline" size={24} color="#4769FE" />
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionTitle}>Branding</Text>
                  <Text style={styles.transactionDate}>July 8, 2024</Text>
                  <Text style={styles.transactionDate}>Anita Break</Text>
                </View>
                <Text style={styles.transactionAmounts}>Price:</Text>
                <Text style={styles.transactionAmount}>$15</Text>
              </View>
            </View>
          </View>
          
        </ScrollView>
      );
    } else if (activeTab === "Completed") {
      return (
        <View style={styles.contentContainer2}>
          <Text style={styles.contentText}>No orders available</Text>
        </View>
      );
    } else if (activeTab === "Cancelled") {
      return (
        <View style={styles.contentContainer2}>
          <Text style={styles.contentText}>No orders available</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ScrollView horizontal={true}>
          <TouchableOpacity
            style={[
              styles.button,
              activeTab === "Active" && styles.activeButton,
            ]}
            onPress={() => setActiveTab("Active")}
          >
            <Text
              style={
                activeTab === "Active"
                  ? styles.activeButtonText
                  : styles.buttonText
              }
            >
              Active
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeTab === "For Approval" && styles.activeButton,
            ]}
            onPress={() => setActiveTab("For Approval")}
          >
            <Text
              style={
                activeTab === "For Approval"
                  ? styles.activeButtonText
                  : styles.buttonText
              }
            >
              For Approval
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeTab === "Completed" && styles.activeButton,
            ]}
            onPress={() => setActiveTab("Completed")}
          >
            <Text
              style={
                activeTab === "Completed"
                  ? styles.activeButtonText
                  : styles.buttonText
              }
            >
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeTab === "Cancelled" && styles.activeButton,
            ]}
            onPress={() => setActiveTab("Cancelled")}
          >
            <Text
              style={
                activeTab === "Cancelled"
                  ? styles.activeButtonText
                  : styles.buttonText
              }
            >
              Cancelled
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    width: screenWidth,
    height: "13%",
    backgroundColor: "#6079FE",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    color: "#fff",
    textAlign: "center",
    fontFamily: "WorkSans-Medium",
  },
  buttonContainer: {
    width: screenWidth,
    height: 50,
    // backgroundColor: 'green',
    margin: 10,
    alignItems: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  circleIcon: {
    width: 38,
    height: 38,
    borderRadius: 50,
    backgroundColor: "#DAE1FF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "3%",
  },
  button: {
    width: 100,
    height: 40,
    margin: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
  },
  activeButton: {
    backgroundColor: "#4769FE",
  },
  buttonText: {
    color: "#000",
    fontSize: 12,
    fontFamily: "WorkSans-Regular",
  },
  activeButtonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "WorkSans-Regular",
  },
  contentContainer: {
    width: screenWidth,
    height: "100%",
    alignItems: "center",
    // backgroundColor: 'green'
  },
  contentContainer2: {
    width: screenWidth,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'green'
  },
  contentText: {
    fontSize: 18,
    textAlign: "center",
    color: "#515151",
    fontFamily: "WorkSans-Medium",
  },

  itemContainer: {
    width: "100%",
    height: 100,
    elevation: 3,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginBottom: 0.5,
  },

  item1: {
    width: "30%",
    height: 100,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'yellow',
  },
  item2: {
    width: "40%",
    height: 90,
    borderRadius: 5,
    marginStart: 10,
    marginTop: 10,
    // backgroundColor: 'green',
  },
  item3: {
    width: "30%",
    height: 90,
    marginTop: 10,
    borderRadius: 5,
    // backgroundColor: 'yellow',
  },
  itemLabel: {
    fontSize: 14,
    fontFamily: "WorkSans-Medium",
    marginTop: 5,
    color: "#515151",
  },
  desc: {
    fontSize: 14,
  },
  imageHolder: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: "gray",
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
    fontFamily: "WorkSans-Medium",
    fontSize: 20,
  },

  transactionDate: {
    fontFamily: "WorkSans-Medium",
    color: "#949494",
    fontSize: 14,
  },

  transactionAmount: {
    fontSize: 20,
    fontFamily: "WorkSans-Medium",
    marginRight: "5%",
    color: "#252525",
  },
  transactionAmounts: {
    fontSize: 16,
    fontFamily: "WorkSans-Medium",
    marginRight: "5%",
    color: "#5E5E5E",
  },
});

export default OrderScreen;
