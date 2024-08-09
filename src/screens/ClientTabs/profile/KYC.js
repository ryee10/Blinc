import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, PermissionsAndroid, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Entypo, Foundation, FontAwesome6 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'react-native-image-picker';
import { useTabBarVisibility } from "../../navigation/TabBarVisibilityContext"; 



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const KycVerified = () => {
    const navigation = useNavigation();
    const { setTextInputFocused } = useTabBarVisibility();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZCode] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [firstPageUri, setFirstPageUri] = useState(null);
    const [secondPageUri, setSecondPageUri] = useState(null);

    useEffect(() => {
        requestPermissions();
    }, []);

    const requestPermissions = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                ]);
                if (
                    granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
                    granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED &&
                    granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED
                ) {
                    console.log('You can use the camera and storage');
                } else {
                    console.log('Camera or storage permission denied');
                }
            } catch (err) {
                console.warn(err);
                Alert.alert('Permission Error', 'Failed to request permissions');
            }
        }
    };

    const handleChoosePhoto = async (setImageUri) => {
        try {
            const result = await ImagePicker.launchImageLibrary({
                mediaType: 'photo',
                includeBase64: false,
            });
            if (result.didCancel) {
                console.log('User cancelled image picker');
            } else if (result.error) {
                console.log('ImagePicker Error: ', result.error);
                Alert.alert('Image Picker Error', 'Failed to pick an image');
            } else {
                setImageUri(result.assets[0].uri);
            }
        } catch (error) {
            console.error('ImagePicker Error: ', error);
            Alert.alert('Image Picker Error', 'An unexpected error occurred while picking an image');
        }
    };
   
    const handleSave = () => {
        console.log('Address:', address);
        console.log('City:', city);
        console.log('Country:', country);
        console.log('State:', state);
        console.log('ZIP Code:', zipCode);
       
    }

    const countries = [
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'United Kingdom', value: 'GB' },
        { label: 'Australia', value: 'AU' },
        // Add more countries here
      ];

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.titleContainer}>
                        <FontAwesome6 name="check-circle" size={18} color="#647CFF" /> 
                        <Text style={styles.title}>KYC Verified</Text>
                        </View>
                        <View style={styles.line}></View>
                        
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Address:</Text>
                        </View>
                        <View style={styles.inputContainer1}>
                            <TextInput 
                                onFocus={() => setTextInputFocused(true)}
                                onBlur={() => setTextInputFocused(false)}
                                style={styles.inputContainer2}
                                placeholder='Address'
                                value={address}
                                onChangeText={setAddress}
                            />
                        </View>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>City:</Text>
                        </View>
                        <View style={styles.inputContainer1}>
                            <TextInput 
                                style={styles.inputContainer2}
                                placeholder='City'
                                value={city}
                                onChangeText={setCity}
                                onFocus={() => setTextInputFocused(true)}
                                onBlur={() => setTextInputFocused(false)}/>
                        </View>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Country:</Text>
                        </View>
                            <View style={styles.inputContainer1}>
                            <RNPickerSelect
                                onValueChange={(value) => setCountry(value)}
                                items={countries}
                                style={pickerSelectStyles}
                                value={country}
                                placeholder={{ label: 'Select a country...', value: null }}/>
                            </View>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>State:</Text>
                        </View>
                        <View style={styles.inputContainer1}>
                            <TextInput 
                                style={styles.inputContainer2}
                                placeholder='State'
                                value={state}
                                onChangeText={setState}
                                onFocus={() => setTextInputFocused(true)}
                                onBlur={() => setTextInputFocused(false)}/>
                        </View>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>ZIP Code:</Text>
                        </View>
                        <View style={styles.inputContainer1}>
                            <TextInput 
                                style={styles.inputContainer2}
                                placeholder='ZIP Code'
                                keyboardType='phone-pad'
                                value={zipCode}
                                onChangeText={setZCode}
                                onFocus={() => setTextInputFocused(true)}
                                onBlur={() => setTextInputFocused(false)}/>
                        </View>

            

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Select Document Type:</Text>
                        </View>
                        <View style={styles.inputContainer1}>
                        <RNPickerSelect
                        onValueChange={(value) => setDocumentType (value)}
                        items={[
                            {label: 'Passport', value: 'Passport'},
                            {label: 'National ID', value: 'National ID'},
                            {label: "Driver's License", value: "Driver's License"},
                        ]}
                        style={pickerSelectStyles}
                        value={documentType}>

                        </RNPickerSelect>
                        </View>

                        <View style={styles.outerIDContainer}>
                            <TouchableOpacity onPress={() => handleChoosePhoto(setFirstPageUri)}>
                            <View style={styles.idContainer}>
                                    <Text style={{fontFamily:'WorkSans-Regular', color:'#949494', fontSize:16}}>Upload Front Page</Text>
                                </View>
                            </TouchableOpacity>
                            {/* {firstPageUri && (
                                <Image source={{ uri: firstPageUri }} style={styles.image} />
                            )} */}
                        </View>

                        <View style={styles.outerIDContainer}>
                            <TouchableOpacity onPress={() => handleChoosePhoto(setFirstPageUri)}>
                                <View style={styles.idContainer}>
                                    <Text style={{fontFamily:'WorkSans-Regular', color:'#949494', fontSize:16}}>Upload Back Page</Text>
                                </View>
                            </TouchableOpacity>
                            {/* {firstPageUri && (
                                <Image source={{ uri: firstPageUri }} style={styles.image} />
                            )} */}
                        </View>
                </View>

                <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.updateButton} onPress={handleSave}>
                <Text style={styles.updateText}>Submit</Text>
            </TouchableOpacity>
            </View>
        

            </View>
            
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    arrowContainer: {
        marginStart: 20,
        marginTop: 50,
        marginBottom: 20
    },
    titleContainer: {
        width: 'auto',
        height: 'auto',
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
    },
    title: {
        fontSize: 18,
        marginStart: 5,
        fontWeight: 'bold',
        color: '#647CFF'
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#CCC',
    },
    outerContainer: {
        width: screenWidth,
        height: 'auto',
        alignItems: 'center',
        paddingBottom: 20,
        // justifyContent: 'center',
        // backgroundColor: 'green'
    },
    innerContainer: {
        width: '95%',
        height: 950,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
    },
    labelContainer: {
        flexDirection: 'row',
        paddingStart: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    label: {
        fontSize: 14,
        marginStart: 10,
    },
    container2: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    inputContainer1: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green'
    },
    inputContainer2: {
        width: '80%',
        height: 50,
        borderRadius: 3,
        borderWidth: 0.2,
        paddingHorizontal: 10,
    },
    inputContainer3: {
        width: '70%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
    },
    inputContainer4: {
        width:'80%',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
    buttonContainer: {
        width: '90%',
        height: 'auto',
        marginTop: 10,
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
        marginStart: 5,
        color: '#647CFF'

    },
    dateLabel: {
        fontSize: 14,
        margin: 12,
        color: '#CCC'
    },
    outerIDContainer: {
        width: '100%',
        height: 100,
        marginTop:25,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    idContainer: {
        width: 300,
        height: 100,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#c8c8c8',
        borderStyle: 'dashed',
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      margin: 35,
      width: '80%',
      height: 'auto',
      backgroundColor: '#f1f1f1',
    },
    inputAndroid: {
      margin: 35,
      width: '80%',
      height: 'auto',
      backgroundColor: '#f1f1f1',
    },
  });

export default KycVerified;
