import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from "nativewind"
import Animated, { FadeInRight } from "react-native-reanimated"
import {NavigationProp, useNavigation } from '@react-navigation/native'
import { Image } from "expo-image"
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import tailwindConfig from '../../../tailwind.config'


const SplashScreen = () => {
  const { colorScheme, toggleColorScheme} = useColorScheme()

  const { navigate }: NavigationProp<SplashNavigationType> = useNavigation();

  const blurhash = "LLGl=3+*8yvz=3w6ozOxxPX3bww3"

  useEffect(() => {
    setTimeout(() =>{
      navigate("Welcome"); 
    }, 2000);
  }, []);
  return (
    <SafeAreaView className = "flex-1 justify-center items-center bg-whi">
      <StatusBar style="auto" />
      <View className = "w-ful px-4 items-center">
        <Animated.View className="flex-row justify-center items-center">
          <View className="pr-2">
            <View className="w-20 h-20 overflow-hidden">
              <Image 
                source={require("../../../assets/images/logo-icon-default.png")}
                placeholder={blurhash}
                contentFit='cover'
                transition={1000}
                className="w-full h-full flex-1"
              />
            </View>
          </View>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  footerText: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    color: '#4A5568',
    fontSize: 12,
  }
});

export default SplashScreen