import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import TransactionsScreen
 from '../../tabs/transactions/TransactionsScreen'

 const Stack = createStackNavigator( );
 
const TransactionNavigation = () => {
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
      <Stack.Screen name="TransS" component={TransactionsScreen}/>
     </Stack.Navigator>
  )
}

export default TransactionNavigation