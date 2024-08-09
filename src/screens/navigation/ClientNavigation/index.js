import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";
import OrdersNavigation from "./OrdersNavigation";
import TaskNavigation from "./TaskNavigation";
import TransactionNavigation from "./TransactionNavigation";
import TeamNavigation from "./TeamNavigation";
import { TransitionPresets } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useTabBarVisibility } from "../TabBarVisibilityContext";

const Tab = createBottomTabNavigator();

const getTabBarStyle = (route, isTextInputFocused) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home" ;
  if (
    routeName === "TopUp" ||
    routeName === "Transfer" ||
    routeName === "Withdraw" ||
    routeName === "Receipt" ||
    routeName === "NotificationScreen" ||
    isTextInputFocused
  ) {
    return { display: "none" };
  }
  return { height: 55 };
};

const TabNavigation = () => {
  const { isTextInputFocused } = useTabBarVisibility();

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
          } else if (route.name === "Team") {
            iconName = "people-outline";
          } else if (route.name === "Task") {
            iconName = "list-outline";
          } else if (route.name === "Transaction") {
            iconName = "receipt-outline";
          }
          const customizeSize = 28;
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
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 0,
          fontFamily: 'WorkSans-Medium',
        },
        tabBarStyle: getTabBarStyle(route, isTextInputFocused),
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Order" component={OrdersNavigation} />
      <Tab.Screen name="Team" component={TeamNavigation} />
      <Tab.Screen name="Task" component={TaskNavigation} />
      <Tab.Screen name="Transaction" component={TransactionNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
