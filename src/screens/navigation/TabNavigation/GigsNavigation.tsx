import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import GigsScreen from '../../tabs/gigs/GigsScreen';
import AddGigs from '../../tabs/gigs/AddGigs';

const Stack = createStackNavigator( );

const GigsNavigation = () => {
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
        <Stack.Screen name="GigsS" component={GigsScreen}/>
        <Stack.Screen name="AddG" component={AddGigs}/>
      
    </Stack.Navigator>
  )
}

export default GigsNavigation