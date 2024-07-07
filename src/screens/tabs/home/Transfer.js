
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Transfer = () => {
    const navigation = useNavigation();

    return(
        <LinearGradient colors={["#DA84FE", "#6079FE"]} style={styles.container}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={22} color="#fff" /> 
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Transfer</Text>
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Send To:</Text>
                    </View>
                    <View style={styles.inputContainer1}>
                        <TextInput 
                            style={styles.inputContainer2}
                            placeholder='Account No.'
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Enter Amount:</Text>
                    </View>
                    <View style={styles.inputContainer1}>
                        <TextInput 
                            style={styles.inputContainer2}
                            placeholder='Amount'
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.sendButton}>
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
    arrowContainer: {
        marginStart: 20,
        marginTop: 50,
        marginBottom: 30,
    },
    titleContainer: {
        width: screenWidth,
        height: 'auto',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    outerContainer: {
        width: screenWidth,
        height: '90%',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingBottom: 20,
    },
    innerContainer: {
        width: '90%',
        margin: 50,
        backgroundColor: '#FFF',
    },
    labelContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    label: {
        fontSize: 14,
        marginStart: 5,
    },
    inputContainer1: {
        width: '100%',
        height: 50,
        alignItems: 'center',
    },
    inputContainer2: {
        width: '90%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
    },
    sendButton: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(218, 132, 254, 0.7)',
    },
    buttonText: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default Transfer;
