import { View, Text } from 'react-native'
import React from 'react'
import TaskScreen from '../../tabs/task/TaskScreen'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import TeamScreen from '../../tabs/team/TeamScreen'
const Stack = createStackNavigator( );

const TeamNavigation = () => {
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
      <Stack.Screen name="TaskS" component={TeamScreen}
        options={{
          headerLeft: () => null,
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
              Team
            </Text>
          ),
          headerTitleAlign: 'center'
        }}
      />
     </Stack.Navigator>
  )
}

export default TeamNavigation