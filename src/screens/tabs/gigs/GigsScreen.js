import React, { useMemo, useState, useRef, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "@/src/components/Button";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const gigsData = [
  {
    title: "Branding",
    price: "$15.00",
    status: "Active",
    description: "Craft exquisite vexel artwork tailored to your specific needs, whether for commercial endeavors or personal indulgence. Utilizing cutting-edge digital software, we specialize in creating visually captivating pieces that elevate your brand or enhance your personal space.",
    image: require("../../../../assets/images/Order.png"),
    item: "Vexel Art",
    revision: 3,
    features: [
      "Inventory Management",
      "SEO Optimization Tools",
      "User-friendly Interface",
      "Data Security",
      "Drag-and-Drop Builder",
      "Template Marketplace",
      "Collaboration Studio"
    ]
  },
  {
    title: "Graphic Design",
    price: "$20.00",
    status: "Active",
    description: "Create stunning graphic designs for your business or personal projects. Our team of expert designers will work with you to bring your vision to life.",
    image: require("../../../../assets/images/design.jpg"),
    item: "Graphic Design",
    revision: 2,
    features: [
      "Logo Design",
      "Brochure Design",
      "Business Cards",
      "Flyers",
      "Social Media Graphics"
    ]
  }
];

const screenWidth = Dimensions.get("window").width;

export default function GigsScreen() {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["50%", "75%", "100%"], []);
  const bottomSheetRef = useRef(null);
  const [isSheetVisible, setSheetVisible] = useState(false);
  const [selectedGig, setSelectedGig] = useState(null);
  const [message, setMessage] = useState("");

  const handleGigPress = useCallback((gig) => {
    setSelectedGig(gig);
    setSheetVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setSheetVisible(false);
    setMessage("");
  }, []);

  const handleEditPress = () => {
    Alert.alert("Edit", "Edit button pressed");
  };

  const handleDeletePress = () => {
    Alert.alert("Delete", "Delete button pressed");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {gigsData.map((gig, index) => (
          <TouchableOpacity key={index} onPress={() => handleGigPress(gig)}>
            <Animated.View
              style={styles.gigCard}
              entering={FadeInDown.duration(100).delay(100).springify()}>
              <Image source={gig.image} style={styles.gigImage} />
              <View style={styles.gigDetails}>
                <Text style={styles.gigTitle}>{gig.title}</Text>
                <Text style={styles.gigPrice}>{gig.price}</Text>
              </View>
              <View style={{ marginRight: 15 }}>
                <Text style={styles.gigStatus}>
                  Status:{" "}
                  <Text style={styles.activeStatus}>{gig.status}</Text>
                </Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
      <Animated.View
        entering={FadeInDown.duration(100).delay(300).springify()}
        style={{ marginLeft: 16, marginRight: 16 }}
        className="pb-5">
        <Button
          title="Add new gig"
          action={() => navigation.navigate("AddG")} />
      </Animated.View>
      {isSheetVisible && selectedGig && (
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.actionButton} onPress={handleEditPress}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButtons} onPress={handleDeletePress}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
            {message && <Text style={styles.messageText}>{message}</Text>}
            <View style={styles.imageContainer}>
              <Image source={selectedGig.image} style={styles.gigImageb} />
            </View>
            <Text style={styles.sheetTitle}>{selectedGig.title}</Text>
            <Text style={styles.sheetDescription}>
              Description: {selectedGig.description}
            </Text>
            <Text style={styles.sheetPrice}>Price: {selectedGig.price}</Text>
            <Text style={styles.sheetStatus}>Status: {selectedGig.status}</Text>
            <View style={styles.bottomSheetContent}>
              <Text style={styles.sheetTitle}>Set Order</Text>
              <View style={styles.sheetRow}>
                <Text style={styles.sheetLabel}>Item</Text>
                <Text style={styles.sheetValue}>{selectedGig.item}</Text>
              </View>
              <View style={styles.sheetRow}>
                <Text style={styles.sheetLabel}>Revision</Text>
                <Text style={styles.sheetValue}>{selectedGig.revision}</Text>
              </View>
              <Text style={styles.sheetSubTitle}>Features</Text>
              {selectedGig.features.map((feature, index) => (
                <View key={index} style={styles.sheetFeature}>
                  <FontAwesome5 name="check" size={14} color="green" />
                  <Text style={styles.sheetFeatureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    width: screenWidth,
    height: 106,
    backgroundColor: '#6079FE',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'WorkSans-Regular'
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    color: "#fff",
    textAlign: 'center',
    fontFamily: 'WorkSans-Medium',
  },
  gigCard: {
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  gigImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  gigDetails: {
    flex: 1,
    justifyContent: "center",
    fontFamily: 'WorkSans-Regular'
  },
  gigTitle: {
    fontSize: 18,
    fontFamily: 'WorkSans-Medium'
  },
  gigPrice: {
    fontSize: 16,
    color: "#252525",
    fontFamily: 'WorkSans-Regular'
  },
  gigStatus: {
    fontSize: 16,
    fontFamily: 'WorkSans-Regular'
  },
  activeStatus: {
    color: "green",
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
    fontFamily: 'WorkSans-Medium'
  },
  sheetDescription: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular'
  },
  sheetPrice: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'WorkSans-Medium'
  },
  sheetStatus: {
    marginTop: 10,
    fontSize: 16,
    color: "green",
    fontFamily: 'WorkSans-Regular'
  },
  sheetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sheetLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'WorkSans-Regular'
  },
  sheetValue: {
    fontSize: 16,
    fontFamily: 'WorkSans-Regular'
  },
  sheetSubTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'WorkSans-Regular'
  },
  sheetFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  sheetFeatureText: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: "#4769FE",
    paddingVertical: 12,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 5,
    borderRadius: 35,
    marginBottom: 15
  },
  actionButtons: {
    backgroundColor: "#EB4335",
    paddingVertical: 12,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    marginLeft: 5,
    borderRadius: 35,
    marginBottom: 15
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: 'WorkSans-Regular',
  },
  messageText: {
    marginTop: 10,
    color: "red",
    fontFamily: 'WorkSans-Regular',
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
