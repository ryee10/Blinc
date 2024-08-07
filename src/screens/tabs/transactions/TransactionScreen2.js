import React, { useMemo, useState, useRef, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { useTabBarVisibility } from "../../navigation/TabBarVisibilityContext";
import Animated, { FadeInDown } from "react-native-reanimated";

const screenWidth = Dimensions.get("window").width;

export default function Transac() {
  const { setTextInputFocused } = useTabBarVisibility();
  const snapPoints = useMemo(() => ["60%", "100%"], []);
  const bottomSheetRef = useRef(null);
  const [isSheetVisible, setSheetVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const transactionsData = [
    {
      name: "Juan Dela Cruz",
      method: "Payment Method",
      amount: "$10.00",
      date: "01-07-2024",
    },
    {
      name: "Juan Dela Cruz",
      method: "Payment Method",
      amount: "$10.00",
      date: "01-07-2024",
    },
  ];

  const handleTransactionPress = useCallback((transaction) => {
    setSelectedTransaction(transaction);
    setSheetVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setSheetVisible(false);
  }, []);

  const handleEditPress = () => {
    Alert.alert("Edit", "Edit button pressed");
  };

  const handleDeletePress = () => {
    Alert.alert("Delete", "Delete button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#000000"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          onFocus={() => setTextInputFocused(true)}
          onBlur={() => setTextInputFocused(false)}
        />
        <TouchableOpacity onPress={handleTransactionPress}>
          <FontAwesome5
            name="filter"
            size={20}
            color="#999"
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {transactionsData.map((transaction, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTransactionPress(transaction)}
          >
            <Animated.View
              style={styles.transacContainer}
              entering={FadeInDown.duration(100).delay(100).springify()}
            >
              <View style={styles.icon}>
                <FontAwesome5 name="user" size={24} color="black" />
              </View>
              <View style={styles.itemContainer}>
                <View style={styles.detailsContainter2}>
                  <Text style={styles.Details}>{transaction.name}</Text>
                  <Text style={styles.Details2}>{transaction.method}</Text>
                </View>
                <View style={styles.detailsContainter3}>
                  <Text style={[styles.Details2, { fontWeight: "bold" }]}>
                    {transaction.amount}
                  </Text>
                  <Text style={styles.Details}>{transaction.date}</Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {isSheetVisible && selectedTransaction && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onClose={handleClose}
          enablePanDownToClose={true}
          backdropComponent={({ style }) => (
            <TouchableOpacity
              style={[style, styles.backdrop]}
              activeOpacity={1}
              onPress={handleClose}
            />
          )}
        >
          <View style={styles.bottomSheetContent}>
            <Text style={styles.sheetTitle}>Transaction Details</Text>
            <View style={styles.transactionDetailsContainer}>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionLabel}>Transaction ID:</Text>
                <Text style={styles.transactionValue}>TRNnluE40YcuurHj</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionLabel}>Type:</Text>
                <Text style={styles.transactionValue}>Receive Payment</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionLabel}>Amount:</Text>
                <Text style={styles.transactionValue}>{selectedTransaction.amount}</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionLabel}>From/To:</Text>
                <Text style={styles.transactionValue}>Juan Dela Cruz</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionLabel}>Description:</Text>
                <Text style={styles.transactionValue}>Payment for order no.</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionLabel}>Status:</Text>
                <Text style={styles.transactionValue}>Success</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionLabel}>Date Created:</Text>
                <Text style={styles.transactionValue}>July 7, 2024</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.shareButton}>
              <FontAwesome5 name="share-alt" size={20} color="#6079FE" />
              <Text style={styles.shareButtonText}> Share Transaction</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginVertical: 20,
    elevation: 3,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#999",
  },
  filterIcon: {
    marginHorizontal: 10,
  },
  transacContainer: {
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    elevation: 3,
    marginTop: 0.5,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 15,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    width: "75%",
    marginTop: 15,
    flexDirection: "row",
  },
  detailsContainter2: {
    width: "50%",
  },
  detailsContainter3: {
    width: "50%",
    alignItems: "flex-end",
  },
  Details: {
    fontSize: 16,
    fontFamily: "WorkSans-Regular",
  },
  Details2: {
    fontSize: 16,
    color: "#6079FE",
    fontFamily: "WorkSans-Regular",
  },
  bottomSheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 20,
    fontFamily: "WorkSans-Medium",
    textAlign: "center",
    marginBottom: 20,
  },
  transactionDetailsContainer: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 10,
    
  },
  transactionDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  transactionLabel: {
    fontFamily: "WorkSans-Medium",
    color: "#252525",
    fontSize: 16
  },
  transactionValue: {
    color: "#5E5E5E",
    fontFamily: "WorkSans-Regular"
  },
  shareButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  shareButtonText: {
    fontSize: 16,
    color: "#6079FE",
    marginLeft: 5,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  actionButtons: {
    backgroundColor: "#f44336",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

