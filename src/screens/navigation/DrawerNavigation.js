import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons, FontAwesome6, Ionicons, } from '@expo/vector-icons';
import HomeNavigation from './TabNavigation/HomeNavigation';
import AccountSettings from '../tabs/profile/AccountSettings';
import PasswordSettings from '../tabs/profile/Password';
import TabNavigation from './TabNavigation';
import HomeScreen from '../tabs/home/HomeScreen';
import KycVerified from '../tabs/profile/KYC';
import TeamScreen from '../tabs/team/TeamScreen'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={
        (props)=>{
          return (
            <SafeAreaView>
              <LinearGradient colors={['#6079FE', '#DA84FE']}
                start={{ x: 0, y: 0 }}
                end={{ x: .90, y: .7 }}
                >
                <View style={
                  styles.profileInfo
                  }
                >
                  {/* <Image 
                    source={require('../../../assets/images/avatar.png')}
                    style={{
                      height:100,
                      width:100,
                      borderRadius: 50
                    }}
                  />
                  <Text style={{
                    fontFamily:'WorkSans-Medium',
                    fontSize: 16,
                    color: '#ffff'
                  }}>Anita Break</Text> */}
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
              <DrawerItemList {...props}/> 
            </SafeAreaView>
          )
        }
      }

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
        name="AccountSettings"
        component={AccountSettings}
        options={{
          drawerLabel: 'Account Settings',
          title: 'Account Settings',
          headerShadowVisible: false,
          headerShown: false,
          drawerIcon: () => (
            <Ionicons
              name="shield-outline"
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
            <Ionicons
              name="lock-closed-outline"
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
            <Ionicons name="checkmark-circle-outline"
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
            <Ionicons name="people-outline"
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
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom:40
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 14,
  },
  avatarText: {
    fontSize: 24,
    color: '#6a11cb',
    fontFamily:'WorkSans-Regular'
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#F0F4F7',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'WorkSans-Regular'
  },
  userRoleContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    width: 95,
    fontFamily:'WorkSans-Regular'
  },
  userRole: {
    color: '#6a11cb',
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
  },
  userBalance: {
    color: '#F0F4F7',
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
  },

})
export default DrawerNavigation;

