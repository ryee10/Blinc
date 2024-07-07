import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextComponent} from 'react-native';
import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput } from 'react-native-paper';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const KycVerified = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
   
            <View style={styles.inputContainer}>
                <View style={styles.titleContainer}>
                <FontAwesome6 name="check-circle" size={22} color="black" /> 
                <Text style={styles.title}>KYC</Text>
                </View>
                <View style={styles.line}></View>
            
                <View style={styles.inputContainer2}>
                <Text style={styles.label}>Address</Text>
                <TextInput style={styles.inputContainer3}
                placeholder='Address'>
                </TextInput>
                <Text style={styles.label}>City</Text>
                <TextInput style={styles.inputContainer3}
                placeholder='City'>
                </TextInput>
                <Text style={styles.label}>Country</Text>
                <TextInput style={styles.inputContainer3}>
                </TextInput>
                <Text style={styles.label}>State</Text>
                <TextInput style={styles.inputContainer3}
                placeholder='State'>
                </TextInput>
                <Text style={styles.label}>Zip Code</Text>
                <TextInput style={styles.inputContainer3}
                placeholder='Zip Code'
                keyboardType='phone-pad'>
                </TextInput>
                              
                </View>
                
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.updateButton}>
                <Text style={styles.updateText}>Next</Text>
                <MaterialIcons name="navigate-next" size={24} color="#647CFF" /> 
            </TouchableOpacity>
            </View>
            </View>
        </View>
        </ScrollView>

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
        // backgroundColor: 'green'
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
        height: 680,
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
        width: '90%',
        height: 'auto',
        marginTop: 50,
        alignItems: 'flex-end',
        // backgroundColor: 'green'
    },
    updateButton: {
        width: 100,
        height: 50,
        marginBottom: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#CBD3FF'
    },
    updateText: {
        fontSize: 15,
        color: '#647CFF'

    }

})

export default KycVerified;