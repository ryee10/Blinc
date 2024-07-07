import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../tabs/home/HomeScreen'
import ProfileScreen from '../../tabs/profile/ProfileScreen'
import TopUp from '../../tabs/home/TopUp'
import TopUpReceipt from '../../tabs/home/TopUpReceipt'
import Transfer from '../../tabs/home/Transfer'
import PersonalSettings from '../../tabs/profile/PersonalSettings';
import AccountSettings from '../../tabs/profile/AccountSettings'
import Password from '../../tabs/profile/Password'
import KYC from '../../tabs/profile/KYC'

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
      <Stack.Screen name="ProfileS"component={ProfileScreen}/>
      <Stack.Screen name="TopUp" component={TopUp}/>
      <Stack.Screen name="TopUpReceipt" component={TopUpReceipt}/>
      <Stack.Screen name="Transfer" component={Transfer}/>
      <Stack.Screen name="PersonalS" component={PersonalSettings}/>
      <Stack.Screen name="AccountS" component={AccountSettings}/>
      <Stack.Screen name="Password" component={Password}/>
      <Stack.Screen name="KYC" component={KYC}/>
      
    </Stack.Navigator>
  )
}

export default HomeNavigation