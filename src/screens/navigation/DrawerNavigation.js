import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  FontAwesome6,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import HomeScreen from "../tabs/home/HomeScreen";
import AccountSettings from "../tabs/profile/AccountSettings";
import PasswordSettings from "../tabs/profile/Password";
import KycVerified from "../tabs/profile/KYC";
import TeamScreen from "../tabs/team/TeamScreen";
import PersonalSettings from "../tabs/profile/PersonalSettings";
import { LinearGradient } from "expo-linear-gradient";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View style={styles.drawerContent}>
          <LinearGradient colors={['#6079FE','#DA84FE']} start={[0, 3]} end={[1, 1]} style={styles.headerContainer}>
          <View style={styles.profileInfo}>
            <View style={styles.leftContainer}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            </View>
            <View style={styles.rightContainer}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Juan Dela Cruz</Text>
              <View style={styles.userRoleContainer}>
                <Text style={styles.userRole}>Digital Worker</Text>
              </View>
            </View>
            </View>
          </View>
          </LinearGradient>
          <DrawerItemList {...props} />
        </View>
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: '65%',
        },
      }}
    >
      <Drawer.Screen
        name="HomeS"
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
          title: 'Account Settings',
          headerShadowVisible: false,
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
        name="KYF"
        component={KycVerified}
        options={{
          drawerLabel: 'KYF Verify',
          title: 'KYF Verify',
          headerShadowVisible: false,
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome6
              name="check-circle"
              size={22}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Team"
        component={TeamScreen}
        options={{
          drawerLabel: 'Team',
          title: 'Team',
          headerShadowVisible: false,
          headerShown: false,
          drawerIcon: () => (
            <Ionicons
              name="people-outline"
              size={22}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="LogOut"
        component={TeamScreen}
        options={{
          drawerLabel: 'Log out',
          title: 'Log out',
          headerShadowVisible: false,
          headerShown: false,
          drawerIcon: () => (
            <Ionicons
              name="log-out-outline"
              size={24}
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
    marginTop: 5
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow'
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
    marginBottom: 5,
  },
  userRoleContainer: {
    width: 130,
    height: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userRole: {
    color: '#6a11cb',
    fontSize: 15,
    fontFamily: 'WorkSans-Regular',
  },
  userBalance: {
    color: '#F0F4F7',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
  },
});

export default DrawerNavigation;
