import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TopUpReceipt = () => {
    const navigation = useNavigation();

    return(
        <LinearGradient colors={['#DA84FE', '#6079FE']} 
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.90]} 
            style={styles.container}>
            <ImageBackground  source={require('../../../../assets/images/checkMark2.png')} style={styles.checkMark}/>
            <ImageBackground  source={require('../../../../assets/images/Receipt2.png')} style={styles.receipt}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.label1}>Top Up Success!</Text>
                    <Text style={styles.label2}>Your top up has been successfully done.</Text>
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.leftLabel}>Reference No.</Text>
                    <Text style={styles.leftLabel}>Date</Text>
                    <Text style={styles.leftLabel}>Time</Text>
                    <Text style={styles.leftLabel}>Payment Method</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.rightLabel}>BLNC123456789</Text>
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
                    {/* <Text style={styles.leftLabel}>Fee</Text> */}
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.rightLabel}>PHP 100,000.00</Text>
                    {/* <Text style={styles.rightLabel}>PHP 10.00</Text> */}
                </View>
            </View>
      
            </ImageBackground>

            <View style={styles.optionContainer}>
                <View style={styles.leftOption}>
                    <Entypo name='download' size={24} color={'white'}/>
                    <Text style={styles.optionLabel}>Download</Text>
                </View>
                <View style={styles.rightOption}>
                    <AntDesign name='sharealt' size={24} color={'white'}/>
                    <Text style={styles.optionLabel}>Share</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
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
        width: 340,
        height: 500,
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
        width: 300,
        height: 'auto',
        borderRadius: 10,
        padding: 20,
        marginTop: 80,
        // backgroundColor: 'green'
    }, 
    line: {
        width: '100%',
        height: 0.8,
        backgroundColor: '#515151'
    },
    lineContainer: {
        width: 300,
        height: 'auto',
    },
    label1: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000'
    },
    label2: {
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
        color: '#515151'
    },
    detailsContainer:{
        width: 280,
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
        fontSize: 14,
        margin: 5,
        color: '#515151',
    },
    rightContainer: {
        width: '50%',
        height: '100%',
        alignItems: 'flex-end',
        // backgroundColor: 'red',
    },
    rightLabel: {
        fontSize: 14,
        margin: 5,
        fontWeight: '500',
    },
    optionContainer: {
        width: '70%',
        height: 40,
        flexDirection: 'row',
    },
    leftOption: {
        width:' 50%',
        height: 'auto',
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    rightOption: {
        width: '50%',
        height: 'auto',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    optionLabel: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '600',
        margin: 10,

    },
    buttonContainer: {
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
    },
    sendButton: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgba(218, 132, 254, 0.7)',
        backgroundColor: '#DA84FE',
        elevation: 5,
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TopUpReceipt;