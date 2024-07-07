import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { LinearGradient } from 'expo-linear-gradient';

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

const TopUp = () => {
    const navigation = useNavigation();
    const [method, setMethod] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('');

    return(
        <LinearGradient colors={["#DA84FE", "#6079FE"]} style={styles.container}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={22} color="#fff" /> 
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Top-Up</Text>
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Payment Method</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                    <RadioButton
                        label="Metamask"
                        selected={selectedMethod === 'Metamask'}
                        onPress={() => setSelectedMethod('Metamask')}/>
                    <RadioButton
                        label="E-wallet"
                        selected={selectedMethod === 'E-wallet'}
                        onPress={() => setSelectedMethod('E-wallet')}/>
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
                        <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('TopUpReceipt')}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
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
        height: 'auto',
        alignItems: 'center',
        paddingBottom: 20,
        justifyContent: 'center',
        // backgroundColor: 'green'
    },
    innerContainer: {
        width: '90%',
        height: '80%',
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
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
        width: '100%',
        height: 50,
        alignItems: 'center',
        // backgroundColor: 'green'
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
    radioButtonContainer: {
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    radioButtonContainer2: {
        width: '90%',
        height: 60,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#f1f1f1'
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

export default TopUp;