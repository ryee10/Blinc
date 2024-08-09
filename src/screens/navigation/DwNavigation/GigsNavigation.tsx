import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import GigsScreen from '../../DwTabs/gigs/GigsScreen';
import AddGigs from '../../DwTabs/gigs/AddGigs';

const Stack = createStackNavigator( );

const GigsNavigation = () => {
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
        <Stack.Screen name="GigsS" component={GigsScreen}
        options={{
          headerLeft: () => null,
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
              Gigs
            </Text>
          ),
          headerTitleAlign: 'center'
        }}/>        
        <Stack.Screen name="AddG" component={AddGigs}
        options={{
          headerLeft: () => null,
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
               Add Gigs
            </Text>
          ),
          headerTitleAlign: 'center'
        }}/>
      
    </Stack.Navigator>
  )
}

export default GigsNavigation