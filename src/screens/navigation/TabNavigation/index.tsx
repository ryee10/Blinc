import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";
import OrdersNavigation from "./OrdersNavigation";
import TaskNavigation from "./TaskNavigation";
import TransactionNavigation from "./TransactionNavigation";
import GigsNavigation from "./GigsNavigation";
import TeamNavigation from "./TeamNavigation";

import { TransitionPresets } from "@react-navigation/stack"

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Order") {
            iconName = "cart-outline";
          } else if (route.name === "Gigs") {
            iconName = "rocket-outline";
          } else if (route.name === "Task") {
            iconName = "newspaper-outline";
          } else if (route.name === "Transaction") {
            iconName = "reader-outline";
          } 
          const customizeSize = 27;
          return (
            <Ionicons
              name={iconName}
              size={customizeSize}
              color={focused ? "#6079FE" : "#CDCDE0"}
            />
          );
        },
        tabBarActiveTintColor: "#6079FE",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Order" component={OrdersNavigation} />
      <Tab.Screen name="Gigs" component={GigsNavigation} />
      <Tab.Screen name="Task" component={TaskNavigation} />
      <Tab.Screen name="Transaction" component={TransactionNavigation} />
      
    </Tab.Navigator>
  );
};

export default TabNavigation;
