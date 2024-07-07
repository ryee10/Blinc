import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { AntDesign, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import Button from "@/src/components/Button";
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { useNavigation } from "@react-navigation/native";

const gigData = {
  title: "Branding",
  price: "$15.00",
  status: "Active",
  image: require("../../../../assets/images/avatar.png"),
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function App() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Orders</Text>
        </View>
        <Animated.View style={styles.gigCard}
          entering={FadeInDown.duration(100).delay(100).springify()}
        >
          <Image source={gigData.image} style={styles.gigImage} />
          <View style={styles.gigDetails}>
            <Text style={styles.gigTitle}>{gigData.title}</Text>
            <Text style={styles.gigPrice}>{gigData.price}</Text>
            <Text style={styles.gigStatus}>
              Status: <Text style={styles.activeStatus}>{gigData.status}</Text>
            </Text>
          </View>
          <View style={styles.userIconWrapper}>
            <FontAwesome5 name="user" size={30} color="black" />
          </View>
        </Animated.View>
      </View>
      <Animated.View
            entering={FadeInDown.duration(100).delay(300).springify()}
            style={{ marginLeft: 16, marginRight: 16 }}
            className="pb-5" 
          >
            <Button title="Add new gig" action={() => navigation.navigate("AddG")}  />
      </Animated.View>
    </ScrollView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    width: screenWidth,
    height: '13%',
    justifyContent: 'center',
    backgroundColor: '#6079FE',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gigCard: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
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
  },
  gigTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  gigPrice: {
    fontSize: 16,
    color: "gray",
  },
  gigStatus: {
    fontSize: 16,
  },
  activeStatus: {
    color: "green",
  },
  userIconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    position: "absolute",
    right: 15,
    top: "70%",
    transform: [{ translateY: -25 }],
  },

});
