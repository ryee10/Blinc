import { View, Text } from 'react-native'
import React from 'react'
import TaskScreen from '../../tabs/task/TaskScreen'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator( );
const TaskNavigation = () => {
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
      <Stack.Screen name="TaskS" component={TaskScreen}/>
     </Stack.Navigator>
  )
}

export default TaskNavigation