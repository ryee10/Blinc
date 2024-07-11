import { View, Text, ActivityIndicator, Dimensions } from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

import { LinearGradient } from "expo-linear-gradient";

import Button from "@/src/components/Button";
import Breaker from "@/src/components/Breaker";
import ButtonOutline from "@/src/components/ButtonOutline";
import { Pressable } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoding] = useState(false);

  const { navigate: navigateAuth }: NavigationProp<AuthNavigationType> =
    useNavigation();
  const navigation = useNavigation<NavigationProp<AuthNavigationType>>();
  return (
    <LinearGradient
      colors={['#DA84FE', '#6079FE']}
      style={{ flex: 1 }}
    >
      <View className="flex-1 bg-white">
        {isLoading && (
          <View className="absolute z-50 h-full w-full justify-center items-center">
            <View className="h-full w-full justify-center items-center bg-black opacity-[0.45]"></View>

            <View className="absolute">
              <ActivityIndicator size="large" color="white" />
            </View>
          </View>
        )}

        <View className="justify-center items-center relative flex-1">
          <View
            className="justify-center w-full px-4 space-y-4"
            style={{
              height: height * 0.75,
            }}
          >
            <Animated.View
              className="justify-center items-center"
              entering={FadeInDown.duration(100).springify()}
            >
              <Text
                className="text-neutral-600 text-2xl leading-[60px]"
                style={{
                  fontFamily: "Poppins-Bold",
                }}
              >
                Login
              </Text>
            </Animated.View>
            <Animated.View
              className="flex-row justify-center items-center"
              entering={FadeInDown.duration(100).delay(200).springify()}
            >
              <Text
                className="text-neutral-500 text-lg font-medium leading-[38px] text-center"
                style={{
                  fontFamily: "Poppins-Medium",
                }}
              >
                Dont have an account yet?{" "}
              </Text>
              <Pressable onPress={() => navigateAuth("Register")}>
                <Text
                  className="text-[#6079FE] text-lg font-medium leading-[38px] text-center"
                  style={{
                    fontFamily: "Poppins-Bold",
                  }}
                >
                  {" "}
                  Sign up
                </Text>
              </Pressable>
            </Animated.View>
            <View className="w-full justify-normal">
              <Animated.View
                entering={FadeInDown.duration(100).delay(300).springify()}
                className="border-white pb-4"
              >
                <ButtonOutline title="Login with Google">
                  <AntDesign name="google" size={20} color="gray" />
                </ButtonOutline>
              </Animated.View>
            </View>
            <View>
              <Breaker />
            </View>
            <Animated.View
              className="py-8 space-y-8"
              entering={FadeInDown.duration(100).delay(400).springify()}
            >
              <View className="border-2 border-gray-400 rounded-lg">
                <TextInput
                  className="p-4 text-gray"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  placeholder="Email or mobile number"
                  placeholderTextColor="#888888"
                  autoCapitalize="none"
                />
              </View>
              <View className="border-2 border-gray-400 rounded-lg">
                <TextInput
                  className="p-4 text-gray"
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#888888"
                  autoCapitalize="none"
                />
              </View>
            </Animated.View>
            <Animated.View
              className="w-full justify-start"
              entering={FadeInDown.duration(100).delay(500).springify()}
            >
              <View className="pb-6">
                <Button
                  title="Login"
                  action={() => navigation.navigate("TabN")}
                />
              </View>
            </Animated.View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
