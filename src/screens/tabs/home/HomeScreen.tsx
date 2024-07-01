import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Image } from "expo-image";


const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='relative'>
        {/* Header */}
        <View className='w-full flex-row justify-between items-center px-4'>
          <View className='w-3/4 flex-row space-x-2'>
            <View className='justify-center items-center'>
              <View className="h-12 w-12 rounded-3xl overflow-hidden">
                <Image
                  source= {require("../../../../assets/images/avatar.png")}
                  className="w-full h-full flex-1"
                />
            
              </View>

            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}



export default HomeScreen