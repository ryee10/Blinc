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
                    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
                    "WorkSans-BlackItalic": require("../assets/fonts/WorkSans-BlackItalic.ttf"),
                    "WorkSans-BoldItalic": require("../assets/fonts/WorkSans-BoldItalic.ttf"),
                    "WorkSans-Extra": require("../assets/fonts/WorkSans-ExtraBold.ttf"),
                    "WorkSans-ExtraI": require("../assets/fonts/WorkSans-ExtraBoldItalic.ttf"),
                    "WorkSans-ExtraL": require("../assets/fonts/WorkSans-ExtraLight.ttf"),
                    "WorkSans-ExtraLI": require("../assets/fonts/WorkSans-ExtraLightItalic.ttf"),
                    "WorkSans-Italic": require("../assets/fonts/WorkSans-Italic.ttf"),
                    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
                    "WorkSans-LightI": require("../assets/fonts/WorkSans-LightItalic.ttf"),
                    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
                    "WorkSans-MediumI": require("../assets/fonts/WorkSans-MediumItalic.ttf"),
                    "WorkSans-Regular": require("../assets/fonts/WorkSans-Regular.ttf"),
                    "WorkSans-SemiBold": require("../assets/fonts/WorkSans-SemiBold.ttf"),
                    "WorkSans-SemiBoldI": require("../assets/fonts/WorkSans-SemiBoldItalic.ttf"),
                    "WorkSans-Thin": require("../assets/fonts/WorkSans-Thin.ttf"),
                    "WorkSans-ThinI": require("../assets/fonts/WorkSans-ThinItalic.ttf"),
                    "WorkSans-Bold": require("../assets/fonts/WorkSans-Bold.ttf"),



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