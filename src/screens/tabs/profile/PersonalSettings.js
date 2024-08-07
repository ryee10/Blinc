import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
  
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import { useTabBarVisibility } from "../../navigation/TabBarVisibilityContext"; 

const screenWidth = Dimensions.get("window").width;

const PersonalSettings = () => {
  const navigation = useNavigation();
  const { setTextInputFocused } = useTabBarVisibility();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShow(Platform.OS === "ios");
    setBirthdate(currentDate);
  };

  return (
    <View style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.outerContainer}>
              <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                  <MaterialCommunityIcons
                    name="shield-account-outline"
                    size={22}
                    color="#647CFF"
                  />
                  <Text style={styles.title}>Personal Settings</Text>
                </View>
                <View style={styles.line}></View>

                <View style={styles.labelContainer}>
                  <Text style={styles.label}>First Name</Text>
                </View>
                <View style={styles.inputContainer1}>
                  <TextInput
                    style={styles.inputContainer2}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    onFocus={() => setTextInputFocused(true)}
                    onBlur={() => setTextInputFocused(false)}
                  />
                </View>

                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Last Name</Text>
                </View>
                <View style={styles.inputContainer1}>
                  <TextInput
                    style={styles.inputContainer2}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                    onFocus={() => setTextInputFocused(true)}
                    onBlur={() => setTextInputFocused(false)}
                  />
                </View>

                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Username</Text>
                </View>
                <View style={styles.inputContainer1}>
                  <TextInput
                    style={styles.inputContainer2}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    onFocus={() => setTextInputFocused(true)}
                    onBlur={() => setTextInputFocused(false)}
                  />
                </View>

                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Phone Number</Text>
                </View>
                <View style={styles.inputContainer1}>
                  <TextInput
                    style={styles.inputContainer2}
                    placeholder="+01 234-567-890"
                    keyboardType="phone-pad"
                    value={phoneNo}
                    onChangeText={setPhoneNo}
                    onFocus={() => setTextInputFocused(true)}
                    onBlur={() => setTextInputFocused(false)}
                  />
                </View>

                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Date of Birth</Text>
                </View>
                <View style={styles.inputContainer1}>
                  <TouchableOpacity
                    style={styles.inputContainer3}
                    onPress={() => setShow(true)}
                  >
                    <Text style={styles.dateLabel}>{birthdate.toDateString()}</Text>
                  </TouchableOpacity>
                  {show && (
                    <DateTimePicker
                      testID="DatePicker"
                      value={birthdate}
                      mode="date"
                      display="default"
                      onChange={onChange}
                      onFocus={() => setTextInputFocused(true)}
                      onBlur={() => setTextInputFocused(false)}
                    />
                  )}
                </View>

                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Gender</Text>
                </View>
                <View style={styles.inputContainer1}>
                  <RNPickerSelect
                    onValueChange={(value) => setGender(value)}
                    items={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                    ]}
                    style={pickerSelectStyles}
                    value={gender}
                  />
                </View>

                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Bio</Text>
                </View>
                <View style={styles.inputContainer1}>
                  <TextInput
                    style={styles.inputContainer2}
                    placeholder="Bio"
                    value={bio}
                    onChangeText={setBio}
                    onFocus={() => setTextInputFocused(true)}
                    onBlur={() => setTextInputFocused(false)}
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.updateButton}>
                  <MaterialCommunityIcons
                    name="update"
                    size={30}
                    color="#647CFF"
                  />
                  <Text
                    style={styles.updateText}
                    onPress={() => navigation.navigate("Personal")}
                  >
                    Update Information
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginStart: 5,
    fontWeight: "bold",
    color: "#647CFF",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#CCC",
  },
  outerContainer: {
    width: screenWidth,
    alignItems: "center",
    paddingBottom: 20,
  },
  innerContainer: {
    width: "95%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingBottom: 20,
  },
  labelContainer: {
    flexDirection: "row",
    paddingStart: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  label: {
    fontSize: 14,
    marginStart: 10,
  },
  inputContainer1: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  inputContainer2: {
    width: "80%",
    height: 50,
    borderRadius: 3,
    borderWidth: 0.2,
    paddingHorizontal: 10,
  },
  inputContainer3: {
    width: "80%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "#F1F1F1",
  },
  buttonContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  updateButton: {
    width: 200,
    height: 50,
    marginBottom: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#CBD3FF",
  },
  updateText: {
    fontSize: 15,
    marginStart: 5,
    color: "#647CFF",
  },
  dateLabel: {
    fontSize: 14,
    margin: 12,
    color: "#CCC",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    margin: 35,
    width: "80%",
    backgroundColor: "#f1f1f1",
  },
  inputAndroid: {
    margin: 35,
    width: "80%",
    backgroundColor: "#f1f1f1",
  },
});

export default PersonalSettings;
