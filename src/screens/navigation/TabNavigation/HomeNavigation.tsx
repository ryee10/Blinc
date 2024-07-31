import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DrawerNavigation from '../DrawerNavigation';
import TopUp from '../../tabs/home/TopUp';
import TopUpReceipt from '../../tabs/home/TopUpReceipt';
import Transfer from '../../tabs/home/Transfer';
import AccountSettings from '../../tabs/profile/AccountSettings';
import { DrawerActions } from '@react-navigation/native';
import Withdraw from '../../tabs/home/withdraw';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  const navigation = useNavigation();

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
      <Stack.Screen 
        name="Drawer" 
        component={DrawerNavigation}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Ionicons 
                name='menu-outline' 
                size={24} 
                color={'#252525'}
                style={{ width: 24, height: 24, marginLeft: 17 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Ionicons 
              name='notifications-outline' 
              size={24} 
              color={'#252525'} 
              style={{ marginRight: 17 }}
            /> 
          ),
          headerTitle: () => (
            <Image 
              source={require('../../../../assets/images/logo-default-title.png')}
              style={{ width: 144, height: 36, resizeMode: 'contain' }}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="TopUp" component={TopUp} 
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
               Top Up
            </Text>
          ),
          headerTitleAlign: 'center'
        }}  
      />
      <Stack.Screen name="Withdraw" component={Withdraw}
      options={{ 
        headerTitle: () => (
          <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
             Withdraw
          </Text>
        ),
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name="Transfer" component={Transfer} 
        options={{ 
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
               Transfer
            </Text>
          ),
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
