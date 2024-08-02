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
import NotificationScreen from '../../tabs/home/Notification';
import DrawerNavigation2 from '../DrawerNavigation2';

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
        component={DrawerNavigation2}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Ionicons 
                name='menu-outline' 
                size={24} 
                color={'#252525'}
                style={{ width: 28, height: 28, marginLeft: 20 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
              <Ionicons 
                name='notifications-outline' 
                size={24} 
                color={'#252525'} 
                style={{ marginRight: 20 }}
              /> 
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image 
              source={require('../../../../assets/images/logo-default-title.png')}
              style={{ width: 150, height: 36, resizeMode: 'contain' }}
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
        }}/>
      <Stack.Screen name="Transfer" component={Transfer}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
              Transfer
            </Text>
          ),
          headerTitleAlign: 'center'
        }}/>
      <Stack.Screen name="Withdraw" component={Withdraw}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
              Withdraw
            </Text>
          ),
          headerTitleAlign: 'center'
        }}/>
      <Stack.Screen name="Receipt" component={TopUpReceipt}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
              Receipt
            </Text>
          ),
          headerTitleAlign: 'center'
        }}/>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} 
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontFamily: 'WorkSans-Medium'  }}>
              Notification
            </Text>
          ),
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;