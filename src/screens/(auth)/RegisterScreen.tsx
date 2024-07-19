import { View, Text, ActivityIndicator, Dimensions } from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import Button from "@/src/components/Button";
import Breaker from "@/src/components/Breaker";
import ButtonOutline from "@/src/components/ButtonOutline";
import { Pressable } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
 
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [isLoading, setIsLoding] = useState(false);

  const { navigate: navigateAuth }: NavigationProp<AuthNavigationType> =
    useNavigation();
  const navigation = useNavigation<NavigationProp<AuthNavigationType>>();
  return (
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
          className="justify-center w-full px-4 space-y-2"
          style={{
            height: height * 0.75,
          }}
        >
          <Animated.View
            className="justify-center items-center"
            entering={FadeInDown.duration(100).springify()}
          >
            <Text
              className="text-neutral-600 text-2xl leading-[60px] "
              style={{
                fontFamily:'WorkSans-Medium',
              }}
            >
              Sign Up
            </Text>

            <Animated.View
              className="flex-row justify-center items-center"
              entering={FadeInDown.duration(100).delay(100).springify()}
            >
              <Text
                className="text-neutral-500 text-lg font-medium leading-[38px] text-center"
                style={{
                  fontFamily: "WorkSans-Medium",
                }}
              >
                Already have an account?{" "}
              </Text>
              <Pressable onPress={() => navigateAuth("Login")}>
                <Text
                  className="text-[#6079FE] text-lg font-medium leading-[38px] text-center"
                  style={{
                    fontFamily: 'WorkSans-Medium',
                  }}
                >
                  {" "}
                  Login here
                </Text>
              </Pressable>
            </Animated.View>
          </Animated.View>

          <View className="w-full justify-normal">
            <Animated.View
              entering={FadeInDown.duration(100).delay(200).springify()}
              className="border-white pb-4"
            >
              <ButtonOutline title="Sign in with Google">
                <AntDesign name="google" size={20} color="gray" />
              </ButtonOutline>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.duration(100).delay(700).springify()}
              className="border-white pb-4"
            ></Animated.View>
          </View>

          <View>
            <Breaker />
          </View>

          <Animated.View
            className="py-8 space-y-8"
            entering={FadeInDown.duration(100).delay(200).springify()}
          >
            <View className="border-2 border-gray-400 rounded-lg">
              <TextInput
                className="p-4 "
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email address"
                placeholderTextColor="#888888"
                autoCapitalize="none"
              />
            </View>
            <View className="border-2 border-gray-400 rounded-lg">
              <TextInput
                className="p-4 "
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#888888"
                autoCapitalize="none"
              />
            </View>
            <View className="border-2 border-gray-400 rounded-lg">
              <TextInput
                className="p-4 "
                onChangeText={(text) => setCPassword(text)}
                value={cpassword}
                placeholder="Confirm Password"
                placeholderTextColor="#888888"
                autoCapitalize="none"
              />
            </View>
          </Animated.View>
          <Animated.View
            className="w-full justify-start"
            entering={FadeInDown.duration(100).delay(300).springify()}
          >
            <View className="pb-6">
              <Button title="Continue" action={() => navigation.navigate("Verify")}/>
            </View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
