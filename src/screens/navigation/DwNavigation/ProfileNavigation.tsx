import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'

import ProfileScreen from '../../DwTabs/profile/ProfileScreen';
import PersonalSettings from '../../DwTabs/profile/PersonalSettings';

const Stack = createStackNavigator( );

const ProfileNavigation = () => {
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
      <Stack.Screen name="ProfileS" component={ProfileScreen}/>
      <Stack.Screen name="PersonalS" component={PersonalSettings}/>

     </Stack.Navigator>
  )
}

export default ProfileNavigation