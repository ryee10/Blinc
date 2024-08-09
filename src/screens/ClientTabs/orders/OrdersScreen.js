import React, { useState, useRef, useMemo, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Button from "@/src/components/Button";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const OrderScreen = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [isSheetVisible, setSheetVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["50%", "75%", "100%"], []);
  const bottomSheetRef = useRef(null);

  const ordersData = [
    {
      title: "Custom Logo",
      date: "July 13, 2024",
      client: "Juan Dela Cruz",
      price: "$15",
      status: "Active",
    },
    {
      title: "Logo Branding",
      date: "July 12, 2024",
      client: "Anita Break",
      price: "$15",
      status: "Active",
    },
    {
      title: "Branding",
      date: "July 7, 2024",
      client: "Juan Dela Cruz",
      price: "$15",
      status: "For Approval",
    },
    {
      title: "Branding",
      date: "July 8, 2024",
      client: "Anita Break",
      price: "$15",
      status: "For Approval",
    },
  ];

  const handleOrderPress = useCallback((order) => {
    setSelectedOrder(order);
    setSheetVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setSheetVisible(false);
  }, []);

  const renderContent = () => {
    const filteredOrders = ordersData.filter(
      (order) => order.status === activeTab
    );

    return filteredOrders.length ? (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.contentContainer}>
          {filteredOrders.map((order, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOrderPress(order)}
            >
              <Animated.View
                style={styles.orderItem}
                entering={FadeInDown.duration(100).delay(100).springify()}
              >
                <View style={styles.circleIcon}>
                  <Ionicons name="reader-outline" size={24} color="#4769FE" />
                </View>
                <View style={styles.orderDetails}>
                  <Text style={styles.orderTitle}>{order.title}</Text>
                  <Text style={styles.orderDate}>{order.date}</Text>
                  <Text style={styles.orderDate}>{order.client}</Text>
                </View>
                <Text style={styles.orderAmount}>Price:</Text>
                <Text style={styles.orderAmounts}>{order.price}</Text>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    ) : (
      <View style={styles.contentContainer2}>
        <Text style={styles.contentText}>No orders available</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ScrollView horizontal={true}>
          {["Active", "For Approval", "Completed", "Cancelled"].map(
            (tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.button,
                  activeTab === tab && styles.activeButton,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={
                    activeTab === tab
                      ? styles.activeButtonText
                      : styles.buttonText
                  }
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      </View>
      {renderContent()}
      {isSheetVisible && selectedOrder && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          initialSnapIndex={2}
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
          <BottomSheetScrollView contentContainerStyle={styles.bottomSheetContent}>
            <View style={styles.imageContainer}>
              <Image source={require("../../../../assets/images/Order.png")} style={styles.gigImageb} />
            </View>
            <Text style={styles.sheetTitle}>{selectedOrder.title}</Text>
            <Text style={styles.sheetDescription}>
              Date: {selectedOrder.date}
            </Text>
            <Text style={styles.sheetPrice}>Client: {selectedOrder.client}</Text>
            <Text style={styles.sheetStatus}>Price: {selectedOrder.price}</Text>
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    width: screenWidth,
    height: 50,
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
    alignItems: "center",
  },
  contentContainer2: {
    width: screenWidth,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    fontSize: 18,
    textAlign: "center",
    color: "#515151",
    fontFamily: "WorkSans-Medium",
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginHorizontal: 20,
    marginBottom: 1,
    padding: 14,
    backgroundColor: "#fff",
  },
  orderDetails: {
    flex: 1,
    marginLeft: "3%",
  },
  orderTitle: {
    fontFamily: "WorkSans-Medium",
    fontSize: 20,
  },
  orderDate: {
    fontFamily: "WorkSans-Medium",
    color: "#949494",
    fontSize: 14,
  },
  orderAmount: {
    fontSize: 20,
    fontFamily: "WorkSans-Medium",
    marginRight: "5%",
    color: "#252525",
  },
  orderAmounts: {
    fontSize: 16,
    fontFamily: "WorkSans-Medium",
    marginRight: "5%",
    color: "#5E5E5E",
  },
  bottomSheetContent: {
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  gigImageb: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  sheetTitle: {
    fontSize: 20,
    fontFamily: "WorkSans-Medium",
  },
  sheetDescription: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "WorkSans-Regular",
  },
  sheetPrice: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "WorkSans-Medium",
  },
  sheetStatus: {
    marginTop: 10,
    fontSize: 16,
    color: "green",
    fontFamily: "WorkSans-Medium",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
});

export default OrderScreen;
