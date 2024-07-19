import React, { useMemo, useState, useRef, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "@/src/components/Button";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";

const gigData = {
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
};

const screenWidth = Dimensions.get("window").width;

export default function App() {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["35%", "50%", "75%", "100%", ], []);
  const bottomSheetRef = useRef(null);
  const [isSheetVisible, setSheetVisible] = useState(false);

  const handleGigPress = useCallback(() => {
    if (isSheetVisible) {
      bottomSheetRef.current?.close();
    } else {
      setSheetVisible(true);
    }
  }, [isSheetVisible]);

  const handleClose = useCallback(() => {
    setSheetVisible(false);
    
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
      <LinearGradient colors={['#6079FE','#DA84FE']} start={[0, 3]} end={[1, 1]}  style={styles.titleContainer}>
        <Text style={styles.title}>Gigs</Text>
      </LinearGradient>
        <TouchableOpacity onPress={handleGigPress}>
          <Animated.View
            style={styles.gigCard}
            entering={FadeInDown.duration(100).delay(100).springify()}
          >
            <Image source={gigData.image} style={styles.gigImage} />
            <View style={styles.gigDetails}>
              <Text style={styles.gigTitle}>{gigData.title}</Text>
              <Text style={styles.gigPrice}>{gigData.price}</Text>
              <Text style={styles.gigStatus}>
                Status:{" "}
                <Text style={styles.activeStatus}>{gigData.status}</Text>
              </Text>
            </View>
            
          </Animated.View>
        </TouchableOpacity>
      </View>
      <Animated.View
        entering={FadeInDown.duration(100).delay(300).springify()}
        style={{ marginLeft: 16, marginRight: 16 }}
        className="pb-5"
      >
        <Button
          title="Add new gig"
          action={() => navigation.navigate("AddG")}
        />
      </Animated.View>
      {isSheetVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onClose={handleClose}
        >
          
          <View style={styles.bottomSheetContent}>
            <View style={styles.imageContainer}>
              <Image source={gigData.image} style={styles.gigImageb} />
            </View>
            <Text style={styles.sheetTitle}>{gigData.title}</Text>
            <Text style={styles.sheetDescription}>
              Description: {gigData.description}
            </Text>
            <Text style={styles.sheetPrice}>Price: {gigData.price}</Text>
            <Text style={styles.sheetStatus}>Status: {gigData.status}</Text>
          </View>
          <View style={styles.bottomSheetContent}>
            <Text style={styles.sheetTitle}>Set Order</Text>
            <View style={styles.sheetRow}>
              <Text style={styles.sheetLabel}>Item</Text>
              <Text style={styles.sheetValue}>{gigData.item}</Text>
            </View>
            <View style={styles.sheetRow}>
              <Text style={styles.sheetLabel}>Revision</Text>
              <Text style={styles.sheetValue}>{gigData.revision}</Text>
            </View>
            <Text style={styles.sheetSubTitle}>Features</Text>
            {gigData.features.map((feature, index) => (
              <View key={index} style={styles.sheetFeature}>
                <FontAwesome5 name="check" size={14} color="green" />
                <Text style={styles.sheetFeatureText}>{feature}</Text>
              </View>
            ))}
            <View style={styles.sheetTotalRow}>
              <Text style={styles.sheetTotalLabel}>Total</Text>
              <Text style={styles.sheetTotalValue}>{gigData.price}</Text>
            </View>
            <Text style={styles.sheetFooter}>Any Issue Regarding Product ? <Text style={styles.reportText}>Report</Text></Text>
          </View>
          
        </BottomSheet>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: 'green'
  },
  titleContainer: {
    width: screenWidth,
    height: 106,
    backgroundColor: '#6079FE',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'WorkSans-Regular'
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    color: "#fff",
    textAlign: 'center',
    fontFamily:'WorkSans-SemiBold',
  },
  
  gigCard: {
    marginTop: 20,
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
    fontFamily:'WorkSans-Regular'
  },
  gigTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily:'WorkSans-Regular'
  },
  gigPrice: {
    fontSize: 16,
    color: "gray",
    fontFamily:'WorkSans-Regular'
  },
  gigStatus: {
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
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
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily:'WorkSans-Regular'
  },
  sheetDescription: {
    marginTop: 10,
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
  },
  sheetPrice: {
    marginTop: 10,
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
  },
  sheetStatus: {
    marginTop: 10,
    fontSize: 16,
    color: "green",
    fontFamily:'WorkSans-Regular'
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily:'WorkSans-Regular'
  },
  sheetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sheetLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:'WorkSans-Regular'
  },
  sheetValue: {
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
  },
  sheetSubTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    fontFamily:'WorkSans-Regular'
  },
  sheetFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  sheetFeatureText: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
  },
  sheetTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  sheetTotalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:'WorkSans-Regular'
  },
  sheetTotalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6079FE',
    fontFamily:'WorkSans-Regular'
  },
  sheetFooter: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily:'WorkSans-Regular'
  },
  reportText: {
    color: '#6079FE',
  },
});
