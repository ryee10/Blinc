import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import HomeNavigation from "./HomeNavigation";
import OrdersNavigation from "./OrdersNavigation";
import TaskNavigation from "./TaskNavigation";
import TransactionNavigation from "./TransactionNavigation";
import TeamNavigation from "./TeamNavigation";
import { TransitionPresets } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Team') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Tasks') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Transaction') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarLabel: ({ focused, color }) => {
          let label;
          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Orders') {
            label = 'Orders';
          } else if (route.name === 'Team') {
            label = 'Team';
          } else if (route.name === 'Tasks') {
            label = 'Tasks';
          } else if (route.name === 'Transaction') {
            label = 'Transaction';
          }
          return <Text style={{ color, fontSize: 0, fontWeight: focused ? 'light' : 'normal' }}>{label}</Text>;
        },

        tabBarActiveTintColor: "#6079FE",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: 'WorkSans-Medium',
        },
        tabBarStyle: {
          backgroundColor: '#FFFF',
          height: 55,
        },
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Orders" component={OrdersNavigation} />
      <Tab.Screen name="Team" component={TeamNavigation} />
      <Tab.Screen name="Tasks" component={TaskNavigation} />
      <Tab.Screen name="Transaction" component={TransactionNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
