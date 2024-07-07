import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TopUpReceipt = () => {
    const navigation = useNavigation();

    return(
        <LinearGradient
            colors={['#DA84FE', '#6079FE']} 
            style={styles.container}>
            <ImageBackground  source={require('../../../../assets/images/Receipt.png')}  style={styles.receipt}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.label1}>Top Up Success!</Text>
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.leftLabel}>Ref Number</Text>
                    <Text style={styles.leftLabel}>Date</Text>
                    <Text style={styles.leftLabel}>Time</Text>
                    <Text style={styles.leftLabel}>Payment Method</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.rightLabel}>123456789012</Text>
                    <Text style={styles.rightLabel}>July 05, 2024</Text>
                    <Text style={styles.rightLabel}>2:55 PM</Text>
                    <Text style={styles.rightLabel}>Metamask</Text>
                </View>
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.leftLabel}>Ammount</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.rightLabel}>PHP 100,000.00</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('HomeS')}>
                    <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </LinearGradient>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    receipt: {
        width: 400,
        height: 600,
        alignItems: 'center'
    },
    container2: {
        width: 300,
        height: 'auto',
        borderRadius: 10,
        // backgroundColor: 'green',
        alignItems: 'center'
    },
    container3: {
        width: 200,
        height: 'auto',
        borderRadius: 10,
        padding: 20,
        marginTop: 80,
        // backgroundColor: 'green'
    }, 
    line: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#515151'
    },
    lineContainer: {
        width: 300,
        height: 'auto',
    },
    label1: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    detailsContainer:{
        width: 300,
        height: 'auto',
        // backgroundColor: 'green',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
    },
    leftContainer: {
        width: '50%',
        height: '100%',
        alignItems: 'flex-start',
        // backgroundColor: 'yellow',
    },
    leftLabel: {
        fontSize: 16,
        margin: 10,
        color: '#515151',
    },
    rightContainer: {
        width: '50%',
        height: '100%',
        alignItems: 'flex-end',
        // backgroundColor: 'red',
    },
    rightLabel: {
        fontSize: 16,
        margin: 10,
        fontWeight: '500',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 30,
        alignItems: 'center',
        
    },
    sendButton: {
        width: '60%',
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

export default TopUpReceipt;