import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextComponent} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput } from 'react-native-paper';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const PasswordSettings = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={22} color="black" /> 
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
   
            <View style={styles.inputContainer}>
                <View style={styles.titleContainer}>
                <MaterialCommunityIcons name="lock-outline" size={22} color="black" /> 
                <Text style={styles.title}>Password Settings</Text>
                </View>
                <View style={styles.line}></View>
            
                <View style={styles.inputContainer2}>
                <Text style={styles.label}>New Password</Text>
                <TextInput style={styles.inputContainer3}
                placeholder='New Password'>
                </TextInput>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput style={styles.inputContainer3}
                placeholder='Confirm Password'>
                </TextInput>
                </View>
                
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.updateButton}>
                <MaterialCommunityIcons name="update" size={30} color="#647CFF" /> 
                <Text style={styles.updateText}>Update Password</Text>
            </TouchableOpacity>
            </View>
            </View>
           
        </View>

    );

};

const styles=StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
    arrowContainer: {
        marginStart: 20,
        marginTop: 50,
        marginBottom: 40
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center'
        // backgroundColor: 'green',
    },
    titleContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    title: {
        fontSize: 18,
        marginStart: 5,
        fontWeight: 'bold'
    },
    inputContainer: {
        width: '90%',
        height: '60%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#CCC',
    },
    inputContainer2: {
        width: '80%',
        height: '40%',
        marginTop: 20,
        // backgroundColor: 'green',
    },
    inputContainer3: {
        width: 'auto',
        height: 50,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
    },
    label: {
        marginTop: 20,
    },
    buttonContainer: {
        width: '80%',
        height: 'auto',
        marginTop: 50,
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

    }

})

export default PasswordSettings;