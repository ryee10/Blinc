import React, {useState}from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextComponent} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const PersonalSettings = () => {
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');

    const onChange = (bdate, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setBirthdate(currentDate)
    }

    const handleSave = () => {

    }

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
                <MaterialCommunityIcons name="shield-account-outline" size={22} color="black" /> 
                <Text style={styles.title}>Personal Settings</Text>
                </View>
                <View style={styles.line}></View>
            
                <View style={styles.inputContainer2}>
                <Text style={styles.label}>First Name</Text>
                <TextInput 
                style={styles.inputContainer3}
                placeholder='First Name'
                value={firstName}
                onChangeText={setFirstName}>
                </TextInput>
                <Text style={styles.label}>Last Name</Text>
                <TextInput style={styles.inputContainer3}
                 placeholder='Last Name'
                 value={lastName}
                 onChangeText={setLastName}>
                </TextInput>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.inputContainer3}
                 placeholder='Username'
                 value={username}
                 onChangeText={setUsername}>
                </TextInput>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput style={styles.inputContainer3}
                 placeholder='+01 234-567-890'
                 value={phoneNo}
                 keyboardType='phone-pad'
                 onChangeText={setPhoneNo}>
                </TextInput>
                <Text style={styles.label}>Date of Birth</Text>
                <TouchableOpacity
                style={styles.inputContainer3}
                onPress={() => setShow(true)}>
                <Text style={styles.dateLabel}>{birthdate.toDateString()}</Text>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                    testID="DatePicker"
                    value={birthdate}
                    mode="date"
                    display="default"
                    onChange={onChange}/>
                )}
                <Text style={styles.label}>Gender</Text>
                <RNPickerSelect
                onValueChange={(value) => setGender (value)}
                items={[
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'},
                ]}
                style={pickerSelectStyles}
                value={gender}>

                </RNPickerSelect>
                <Text style={styles.label}>Bio</Text>
                <TextInput style={styles.inputContainer3}
                 placeholder='Bio'
                 value={bio}
                 onChangeText={setBio}>
                </TextInput>
                
                </View>
                
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.updateButton}>
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
        height: 920,
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

    },
    dateLabel: {
        fontSize: 16,
        margin: 12,
        color: '#CCC'
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      color: 'black',
      paddingRight: 30,
      backgroundColor: 'white',
      textAlign: 'center',
    },
    inputAndroid: {
      fontSize: 16,
      borderColor: '#ccc',
      borderRadius: 10,
      marginTop: 20,
      color: 'black',
      backgroundColor: '#f1f1f1',
      textAlign: 'center',
    },
  });

export default PersonalSettings;