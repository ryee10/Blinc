import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { MaterialCommunityIcons, FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../ClientTabs/home/HomeScreen";
import AccountSettings from "../ClientTabs/profile/AccountSettings";
import PasswordSettings from "../ClientTabs/profile/Password";
import KycVerified from "../ClientTabs/profile/KYC";
import TeamScreen from "../ClientTabs/team/TeamScreen";
import PersonalSettings from "../ClientTabs/profile/PersonalSettings";
import { LinearGradient } from "expo-linear-gradient";
import LoginScreen from "../(auth)/LoginScreen";
import { useNavigation } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Log Out",
          onPress: () => {
            navigation.navigate("Login");
          }
        }
      ]
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View style={styles.drawerContent}>
          <LinearGradient colors={['#6079FE','#DA84FE']} start={[0, 3]} end={[1, 1]} style={styles.headerContainer}>
            <View style={styles.profileInfo}>
              <View style={styles.leftContainer}>
                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.avatarText}>MK</Text>
                </View>
              </View>
              <View style={styles.rightContainer}>
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>Marvie King</Text>
                  <View style={styles.userRoleContainer}>
                    <Text style={styles.userRole}>Client</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          <DrawerItemList {...props} />
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Ionicons
              name="log-out-outline"
              size={24}
              color="black"
              style={styles.logoutIcon}
            />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f0f4f7',
          width: '65%',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          headerShadowVisible: false,
          headerShown: false,
          drawerIcon: () => (
            <Ionicons
              name="home-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PersonalSettings"
        component={PersonalSettings}
        options={{
          drawerLabel: 'Personal Settings',
          title: 'Personal Settings',
          headerShown: false, 
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="shield-account-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{
          drawerLabel: 'Account Settings',
          title: 'Account Settings',
          headerShadowVisible: false,
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome5
              name="user-circle"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PasswordSettings"
        component={PasswordSettings}
        options={{
          drawerLabel: 'Password Settings',
          title: 'Password Settings',
          headerShadowVisible: false,
          headerShown: false,
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="lock-outline"
              size={22}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="KycVerified"
        component={KycVerified}
        options={{
          drawerLabel: 'KYC Verify',
          title: 'KYC Verify',
          headerShadowVisible: false,
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome
              name="check-circle"
              size={22}
              color="black"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  headerContainer: {
    width: 'auto',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  leftContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: '70%',
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    color: '#6a11cb',
    fontFamily: 'WorkSans-Regular',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#F0F4F7',
    fontSize: 18,
    fontFamily: 'WorkSans-Semibold',
  },
  userRoleContainer: {
    width: 70,
    height: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },
  userRole: {
    color: '#6a11cb',
    fontSize: 15,
    fontFamily: 'WorkSans-Regular',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'WorkSans-Regular',
  },
});

export default DrawerNavigation;
