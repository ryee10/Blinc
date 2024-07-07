import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextComponent} from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons, Entypo, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput } from 'react-native-paper';


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

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={22} color="black" /> 
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
   
            <View style={styles.inputContainer}>

                <View style={styles.titleContainer}>
                <MaterialCommunityIcons name="shield-account-outline" size={22} color="black" /> 
                <Text style={styles.title}>Account Settings</Text>
                </View>
                <View style={styles.line}></View>
        
                <View style={styles.inputContainer2}>

                <Text style={styles.label}>Skills</Text>
                <View style={styles.inputContainer4}>
                <TextInput 
                style={styles.skillsContainer}
                placeholder="Skills">
                </TextInput>
                </View>

                <Text style={styles.label}>Social Media</Text>
                <View style={styles.inputContainer4}>
                    <View style={styles.logoContainer}>
                    <FontAwesome name="facebook" size={24} color="black" />
                    </View>
                <TextInput 
                style={styles.inputContainer3}
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
                style={styles.inputContainer3}
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
                style={styles.inputContainer3}
                placeholder="LinkedIn Link"
                value={linkedin}
                onChangeText={setLinkedin}>
                </TextInput>
                </View>

                <View style={styles.inputContainer4}>
                    <View style={styles.logoContainer}>
                    <Foundation name="web" size={24} color="black" />
                    </View>
                <TextInput 
                style={styles.inputContainer3}
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
        height: 550,
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
    skillsContainer: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
    },
    inputContainer3: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F1F1F1',
    },
    inputContainer4: {
        width:'100%',
        flexDirection: 'row',
        marginTop: 20,
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
        width: 200,
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
        marginStart: 5,
        color: '#647CFF'

    }

})

export default AccountSettings;