import React from 'react';
import { View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

import { Image } from "expo-image";
import { NavigationProp, useNavigation } from '@react-navigation/native';

import Button from '@/src/components/Button';


const blurhash = "LQF6YZt7Kio#Xrsqs*WG$]j0Vsi~";

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthNavigationType>>();

  return (
    <SafeAreaView className='flex-1 justify-between items-center bg-white'>
      <StatusBar style='auto' />

      <View className="w-full px-3 items-center justify-center space-y-5 h-full">
        <View className="w-full px-7 items-center">
          <Animated.View
            entering={FadeInRight.duration(100).springify()}
            className="flex-row justify-center items-center"
          >
            <View className='w-full h-20 overflow-hidden'>
              <Image
                source={require("../../../assets/images/logo-default.png")}
                placeholder={blurhash}
                contentFit='cover'
                transition={1000}
                className='w-full h-full flex-1'
              />
            </View>
          </Animated.View>
        </View>

        <View className="justify-center items-center">
          <Animated.Text 
            entering={FadeInDown.duration(100).delay(100).springify()}
            className="text-neutral-500 text-3xl font-medium leading-[60px]"
            style={{
              fontFamily: "Poppins-SemiBold",
              alignItems: 'center',
              justifyContent: 'center',

            }}
          >
            Where Businesses
          </Animated.Text>
          <Animated.Text 
            entering={FadeInDown.duration(100).delay(150).springify()}
            className="text-neutral-500 text-3xl font-medium leading-[60px]"
            style={{
              fontFamily: "Poppins-SemiBold",
              alignItems: 'center',
              justifyContent: 'center',

            }}
          >
            & Digital Workers Flourish
          </Animated.Text>
        </View>

        <View className="w-full justify-start">
          <Animated.View
            entering={FadeInDown.duration(100).delay(300).springify()}
            className="pb-6"
          >
            <Button title="Get Started!" action={() => navigation.navigate("Register")} />
          </Animated.View>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
