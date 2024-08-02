import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Entypo, Foundation } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AccountSettings = () => {
    const navigation = useNavigation();

    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [website, setWebsite] = useState('');

    const handleSave = () => {
        console.log('Facebook:', facebook);
        console.log('Twitter:', twitter);
        console.log('LinkedIn:', linkedin);
        console.log('Website:', website);
    }

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.titleContainer}>
                        <FontAwesome5 name="user-circle" size={22} color="#647CFF" /> 
                        <Text style={styles.title}>Account Settings</Text>
                        </View>
                        <View style={styles.line}></View>
                        
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Skills</Text>
                        </View>
                        <View style={styles.inputContainer1}>
                            <TextInput 
                                style={styles.inputContainer2}
                                placeholder='Skills'
                            />
                        </View>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Social Media</Text>
                        </View>

                        <View style={styles.container2}>
                        
                        <View style={styles.inputContainer4}>
                            <View style={styles.logoContainer}>
                                <FontAwesome name="facebook" size={24} color="black" />
                            </View>
                            <TextInput 
                                style={styles.inputContainer2}
                                placeholder="Facebook Link"
                                value={facebook}
                                onChangeText={setFacebook}>
                            </TextInput>
                            </View>

                            <View style={styles.inputContainer4}>
                            <View style={styles.logoContainer}>
                                <FontAwesome name="twitter" size={24} color="black" />
                            </View>
                            <TextInput 
                                style={styles.inputContainer2}
                                placeholder="Twitter Link"
                                value={twitter}
                                onChangeText={setTwitter}>
                            </TextInput>
                            </View>

                            <View style={styles.inputContainer4}>
                            <View style={styles.logoContainer}>
                                <Entypo name="linkedin" size={24} color="black" />
                            </View>
                            <TextInput 
                                style={styles.inputContainer2}
                                placeholder="Linkedin Link"
                                value={linkedin}
                                onChangeText={setLinkedin}>
                            </TextInput>
                            </View>

                            <View style={styles.inputContainer4}>
                            <View style={styles.logoContainer}>
                                <Foundation name="web" size={24} color="black" />
                            </View>
                            <TextInput 
                                style={styles.inputContainer2}
                                placeholder="Website Link"
                                value={website}
                                onChangeText={setWebsite}>
                            </TextInput>
                            </View>

                            </View>

                </View>

                <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.updateButton} onPress={handleSave}>
                <MaterialCommunityIcons name="update" size={30} color="#647CFF" /> 
                <Text style={styles.updateText}>Update Information</Text>
            </TouchableOpacity>
            </View>

            </View>
            
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    arrowContainer: {
        marginStart: 20,
        marginTop: 50,
        marginBottom: 20
    },
    titleContainer: {
        width: 'auto',
        height: 'auto',
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
    },
    title: {
        fontSize: 18,
        marginStart: 5,
        fontWeight: 'bold',
        color: '#647CFF'
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#CCC',
    },
    outerContainer: {
        width: screenWidth,
        height: 'auto',
        alignItems: 'center',
        paddingBottom: 20,
        // justifyContent: 'center',
        // backgroundColor: 'green'
    },
    innerContainer: {
        width: '95%',
        height: 550,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
    },
    labelContainer: {
        flexDirection: 'row',
        paddingStart: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    label: {
        fontSize: 14,
        marginStart: 10,
    },
    container2: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    inputContainer1: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green'
    },
    inputContainer2: {
        width: '80%',
        height: 50,
        borderRadius: 3,
        borderWidth: 0.2,
        paddingHorizontal: 10,
    },
    inputContainer3: {
        width: '70%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
    },
    inputContainer4: {
        width:'80%',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green'
    },
    logoContainer: {
        width: 50,
        height: 50,
        marginEnd: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F1F1F1'
    },
    buttonContainer: {
        width: '90%',
        height: 'auto',
        marginTop: 10,
        alignItems: 'flex-end',
        // backgroundColor: 'green'
    },
    updateButton: {
        width: 200,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#CBD3FF'
    },
    updateText: {
        fontSize: 15,
        marginStart: 5,
        color: '#647CFF'

    },
    dateLabel: {
        fontSize: 14,
        margin: 12,
        color: '#CCC'
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        margin: 35,
        width: '80%',
        height: 'auto',
        backgroundColor: '#f1f1f1'
     
    },
    inputAndroid: {
        margin: 35,
        width: '80%',
        height: 'auto',
        backgroundColor: '#f1f1f1'
    },
  });

export default AccountSettings;
