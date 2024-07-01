import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../tabs/home/HomeScreen'

const Stack = createStackNavigator( );


const HomeNavigation = () => {
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
      <Stack.Screen name="HomeS" component={HomeScreen}/>
    
    </Stack.Navigator>
  )
}

export default HomeNavigation