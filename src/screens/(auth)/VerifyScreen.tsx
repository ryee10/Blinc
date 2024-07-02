import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

import Button from "@/src/components/Button";
const VerifyScreen = () => {
  const { navigate: navigateAuth }: NavigationProp<AuthNavigationType> =
    useNavigation();
  const navigation = useNavigation<NavigationProp<AuthNavigationType>>();
  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown.duration(100).delay(100).springify()}
    >
      <View style={styles.card}>
        <Text style={styles.headerText}>Verify your email address.</Text>
        <Text style={styles.subText}>
          We sent a verification code to your email address, please check your
          email. Enter the code below to confirm your email address.
        </Text>
        <Animated.View
          className="w-full justify-start"
          entering={FadeInDown.duration(200).delay(100).springify()}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter verification code"
            placeholderTextColor="#A0AEC0"
          />
        </Animated.View>
        <Animated.View
          className="w-full justify-start"
          entering={FadeInDown.duration(300).delay(200).springify()}
        >
          <View className="pb-6">
            <Button
              title="Verify Email"
              action={() => navigation.navigate("TabN")}
            />
          </View>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7FAFC",
  },
  card: {
    width: "90%",
    padding: 20,
    backgroundColor: "#F7FAFC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#7B61FF",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D3748",
    marginBottom: 10,
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#4A5568",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#CBD5E0",
    borderRadius: 25,
    marginBottom: 20,
    textAlign: "center",
    color: "#2D3748",
  },
  button: {
    width: "100%",
    borderRadius: 25,
    overflow: "hidden",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default VerifyScreen;
