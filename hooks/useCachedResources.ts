import * as Font from 'expo-font'

import { useState, useEffect } from 'react'
import { FontAwesome } from "@expo/vector-icons"
import * as SplashScreen from "expo-splash-screen"
import { Ionicons } from '@expo/vector-icons'

export default function useCachedResources(){
    const [isLoadingComplete, setIsLoadingComplete] = useState(false)

    useEffect (() => {
         async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
                    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
                    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
                    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
                    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
                    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
                    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
                    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
                    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),

                    ...FontAwesome.font,
                    }
                );
            }
            catch(e) {
                alert(e)
            }
            finally {
                setIsLoadingComplete(true)
                SplashScreen.hideAsync();
            }
         }
         loadResourcesAndDataAsync();

    }, [])
    return isLoadingComplete;
}