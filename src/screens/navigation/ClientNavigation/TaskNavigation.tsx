import { View, Text } from 'react-native'
import React from 'react'
import TaskScreen from '../../ClientTabs/task/TaskScreen'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator( );
const TaskNavigation = () => {
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
      <Stack.Screen name="Task" component={TaskScreen}
        options={{
          headerLeft: () => null,
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
              Task
            </Text>
          ),
          headerTitleAlign: 'center'
        }}
      />
     </Stack.Navigator>
  )
}

export default TaskNavigation