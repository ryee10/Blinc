import { View, Text } from 'react-native'
import React from 'react'
import TaskScreen from '../../DwTabs/task/TaskScreen'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import TeamScreen from '../../DwTabs/team/TeamScreen'
const Stack = createStackNavigator( );

const TeamNavigation = () => {
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
    <Stack.Screen name="TeamS" component={TeamScreen}/>
    </Stack.Navigator>
  )
}

export default TeamNavigation