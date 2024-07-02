import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import OrdersScreen from "../../tabs/orders/OrdersScreen"

const Stack = createStackNavigator( );

const OrdersNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
      animationEnabled: true,
      gestureEnabled: true,
      gestureDirection: "horizontal",
     }}
     >
      <Stack.Screen name="OrderS" component={OrdersScreen}/>
     </Stack.Navigator>
  )
}

export default OrdersNavigation