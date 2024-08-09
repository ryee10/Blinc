import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  TextComponent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Ionicons,
  Feather,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert("Successfully logged out!");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#6079FE", "#DA84FE"]} style={styles.header}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Juan Dela Cruz</Text>
            <View style={styles.userRoleContainer}>
              <Text style={styles.userRole}>Digital Worker</Text>
            </View>
            <Text style={styles.userBalance}>Bal: $100.00</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("PersonalS")}
        >
          <MaterialCommunityIcons
            name="shield-account-outline"
            size={24}
            color="black"
          />
          <Text style={styles.title}>Personal Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("AccountS")}
        >
          <FontAwesome5 name="user-circle" size={22} color="black" />
          <Text style={styles.title}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Password")}
        >
          <MaterialCommunityIcons name="lock-outline" size={22} color="black" />
          <Text style={styles.title}>Password Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("KYC")}
        >
          <FontAwesome6 name="check-circle" size={20} color="black" />
          <Text style={styles.title}>KYC Verified</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            styles.buttons
          } onPress={() => navigation.navigate('Team')}
        >
          <FontAwesome6 name="user-plus" size={20} color="black" />
          <Text style={styles.title}>Team</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={handleLogout}>
          <MaterialIcons name="logout" size={20} color="black" />
          <Text style={styles.title}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F7',
  },
  header: {
    height: 195,
  },
  arrowContainer: {
    marginStart: 20,
    marginTop: 50,
    marginEnd: 20,
  },
  profileInfo: {
    width: screenWidth,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  avatarText: {
    fontSize: 14,
    color: '#6a11cb',
    fontFamily:'WorkSans-Regular'
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#F0F4F7',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily:'WorkSans-Regular'
  },
  userRoleContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 5,
    width: 120,
    fontFamily:'WorkSans-Regular'
  },
  userRole: {
    color: '#6a11cb',
    fontSize: 14,
    fontFamily:'WorkSans-Regular'
  },
  userBalance: {
    color: '#F0F4F7',
    fontSize: 16,
    marginTop: 5,
    fontFamily:'WorkSans-Regular'
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttons: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "left",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#F0F4F7",
  },
  title: {
    marginStart: 20,
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
  },
});

export default ProfileScreen;
