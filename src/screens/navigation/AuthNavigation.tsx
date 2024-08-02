import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import SplashScreen from '../(auth)/SplashScreen';
import WelcomeScreen from '../(auth)/WelcomeScreen';
import LoginScreen from '../(auth)/LoginScreen';
import RegisterScreen from '../(auth)/RegisterScreen';
import VerifyScreen from '../(auth)/VerifyScreen';
import TabNavigation from './TabNavigation';
import TabNavigation2 from './TabNavigation2';
import TopUpReceipt from '../clientTabs/home/TopUpReceipt';



const Stack = createStackNavigator();
const AuthNavigation = () => {
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
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
      <Stack.Screen name="TabN" component={TabNavigation} />
      <Stack.Screen name="Client" component={TabNavigation2}/>
      

   </Stack.Navigator>
  )
}

export default AuthNavigation