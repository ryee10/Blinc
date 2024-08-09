import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import SplashScreen from '../(auth)/SplashScreen';
import WelcomeScreen from '../(auth)/WelcomeScreen';
import LoginScreen from '../(auth)/LoginScreen';
import RegisterScreen from '../(auth)/RegisterScreen';
import VerifyScreen from '../(auth)/VerifyScreen';
import DwNavigation from './DwNavigation';
import UserOption from '../(auth)/userOption';
import ClientNav from './ClientNavigation';




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
      <Stack.Screen name="UserOpt" component={UserOption} />
      <Stack.Screen name="Client" component={ClientNav} />
      <Stack.Screen name="DigitalWorker" component={DwNavigation} />
      

   </Stack.Navigator>
  )
}

export default AuthNavigation