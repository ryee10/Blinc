import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RadioButton = ({ label, selected, onPress }) => {
    return (
        <TouchableOpacity style={styles.radioButtonContainer2} onPress={onPress}>
            <View style={styles.leftContainer}>
                <Text style={styles.radioButtonLabel}>{label}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.radioButton}>
                {selected ? <View style={styles.radioButtonSelected} /> : null}
            </View>
            </View>
        </TouchableOpacity>
    );
};

const Transfer = () => {
    const navigation = useNavigation();
    const [method, setMethod] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('');

    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <View style={styles.arrowContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={28} color="#FFF" /> 
                    </TouchableOpacity>
                    <Text style={styles.title}>Transfer</Text>
                </View>
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Send To</Text>
                    </View>
                    <View style={styles.inputContainer1}>
                        <TextInput 
                        style={styles.inputContainer2}
                        placeholder='Account No.'
                        keyboardType="phone-pad"/>
                    </View>

                    <View style={styles.inputContainer1}>
                        <TextInput 
                        style={styles.inputContainer2}
                        placeholder='Full Name'/>
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
                                <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('TransferReceipt')}>
                                    <LinearGradient colors={['#6079FE','#DA84FE']} start={[0, 3]} end={[1, 1]}  style={styles.sendButton}>
                                    <Text style={styles.buttonText}>Confirm</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                
                            </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperContainer: {
        width: screenWidth,
        height: 'auto',
        backgroundColor: '#6079FE',

    },
    arrowContainer: {
        marginStart: 20,
        marginTop: 70,
        marginEnd: 20,
        marginBottom: 30,
        flexDirection: 'row',
        // backgroundColor: 'red'
    },
    title: {
        fontSize: 20,
        marginStart: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    outerContainer: {
        width: screenWidth,
        height: screenHeight,
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: '#F1F1F1'
    },
    labelContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    label: {
        fontSize: 14,
        marginStart: 10,
        marginTop: 20,
    },
    inputContainer1: {
        width: screenWidth,
        height: 'auto',
        marginTop: 1.5,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    inputContainer2: {
        width: '90%',
        height: 70,
        borderRadius: 5,
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: screenWidth,
        alignItems: 'center',
        marginTop: '50%',
    },
    sendButton: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold',
    },
    radioButtonContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 2,
        flexDirection: 'row'
    },
    radioButtonContainer2: {
        width: '80%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    leftContainer: {
        width: '80%',
        height: 'auto',
        // backgroundColor: 'white'
    },
    rightContainer: {
        width: '20%',
        height: 'auto',
        // backgroundColor: 'white'
    },
    radioButton: {
        height: 20,
        width: 20,
        marginStart: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#4b9fa5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonSelected: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#4b9fa5',
    },
    radioButtonLabel: {
        margin: 10,
        fontSize: 14,
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconContainer: {
        width: 40,
        height: 40,
        margin: 20,
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        width: '90%',
        borderColor: '#ccc',
        borderRadius: 5,
        color: 'black',
        paddingHorizontal: 10,
        marginStart: 20,
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
    },
  });

export default Transfer;
