import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import OrdersScreen from "../../tabs/orders/OrdersScreen"

const Stack = createStackNavigator( );

const OrdersNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: true,
      ...TransitionPresets.SlideFromRightIOS,
      animationEnabled: true,
      gestureEnabled: true,
      gestureDirection: "horizontal",
     }}
     >
      <Stack.Screen name="OrderS" component={OrdersScreen}
        options={{
          headerLeft: () => null,
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium',  }}>
              My Orders
            </Text>
          ),
          headerTitleAlign: 'center'
        }}
      />
     </Stack.Navigator>
  )
}

export default OrdersNavigation