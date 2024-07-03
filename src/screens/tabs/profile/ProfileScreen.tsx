import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image, Alert, TouchableOpacity, ScrollView, TextComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather, FontAwesome5, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Profile = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert('Successfully logged out!');
        /* navigation.navigate('Login') */;
    }

    return (
        <View style={styles.container}>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left-circle" size={40} color="#647CFF" />
          </TouchableOpacity>
          </View>
          <View style={styles.outerContainer}>
          <View style={styles.iconContainer}>
          <View style={styles.icon}>
          <FontAwesome5 name="user" size={24} color="black" /> 
          </View>
          </View>
          </View>
          <View style={styles.outerContainer2}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.buttons} /* onPress={() => navigation.navigate('Profile')} */>
                <MaterialCommunityIcons name="shield-account-outline" size={24} color="black" /> 
                <Text style={styles.title}>Personal Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} /* onPress={() => navigation.navigate('Account')} */>
                <FontAwesome5 name="user-circle" size={22} color="black" /> 
                <Text style={styles.title}>Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} /* onPress={() => navigation.navigate('Password')} */>
                <MaterialCommunityIcons name="lock-outline" size={22} color="black" /> 
                <Text style={styles.title}>Password Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} /* onPress={() => navigation.navigate('KYC')} */>
                <FontAwesome6 name="check-circle" size={20} color="black" /> 
                <Text style={styles.title}>KYC Verified</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={handleLogout}>
                <MaterialIcons name="logout" size={20} color="black" /> 
                <Text style={styles.title}>Logout</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
        
    
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1'
    },
    arrowContainer: {
        margin: 50,
        // backgroundColor: 'green'

    },
    outerContainer: {
        alignItems: 'center',
    },
    iconContainer: {
        width: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFF'
    },
    icon: {
        width: 150,
        height: 150,
        borderRadius: 125,
        backgroundColor: '#F1F1F1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerContainer2: {
        alignItems: 'center',
    },
    buttonContainer: {
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
    },
    buttons: {
        width: '90%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#F1F1F1',
    },
    title: {
        marginStart: 10,
    }
})
    
    export default Profile;