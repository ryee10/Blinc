import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RadioButton = ({ label, desc, selected, onPress }) => {
    return (
        <TouchableOpacity style={styles.radioButtonContainer2} onPress={onPress}>
            <View style={styles.radioButtonContainer3}>
            <View style={styles.leftContainer}>
            <View style={styles.radioButton}>
                {selected ? <View style={styles.radioButtonSelected} /> : null}
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.radioButtonLabel}>{label}</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionLabel}>{desc}</Text>
            </View>
            
        </TouchableOpacity>
    );
};

const UserOption = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  return (
    <LinearGradient colors={['#DA84FE', '#6079FE']} 
    start={{ x: 1, y: 0 }}
    end={{ x: .90, y: .7 }}
    locations={[0.1, 0.90]} 
    style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Are you a Client or a Digital Worker?</Text>
        <Text style={styles.title2}>Please choose to proceed:</Text>
        <View style={styles.radioButtonContainer}>
            <RadioButton
                label="Hire a Talent"
                desc="You are a business owner that yearns for time freedom so that you can go back to what truly matters. 
                    Hiring a digital worker is the best thing you can do for your business. Boost productivity by lightening your 
                    load-team up with a virtual assistant today."
                selected={selectedMethod === 'Hire'}
                onPress={() => setSelectedMethod('Hire')}/>
        </View>
        <View style={styles.radioButtonContainer}>
            <RadioButton
            label="Apply as a Talent"
            desc="A digital worker can streamline operations, handle routine tasks, and free up your valuable time so you can focus on what truly matters. 
                Enhance your productivity and achieve a better work-life balance by integrating a digital worker into your team today."
            selected={selectedMethod === 'Apply'}
            onPress={() => setSelectedMethod('Apply')}/>
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate(' ')}>
            <LinearGradient colors={['#6079FE','#DA84FE']} start={[0, 3]} end={[1, 1]}  style={styles.sendButton}>
            <Text style={styles.buttonText}>Confirm</Text>
            </LinearGradient>
        </TouchableOpacity>
       
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 220,
    fontSize: 22,
    marginBottom: 20,
    color: '#424242',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 14,
    marginBottom: 20,
    color: '#424242',
  },
  overlay: {
    width: 350,
    height: 570,
    padding: 20,
    // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
    backgroundColor: '#FFF',
    borderRadius: 20, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center',
  },
  radioButtonContainer: {
    height: 170,
    // backgroundColor: 'green',
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000',
},
radioButtonContainer3: {
    width: 280,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'green'
},
radioButtonContainer2: {
    width: '95%',
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: 'green'
},
descriptionContainer: {
    // backgroundColor: 'green',
    marginStart: 15,
    marginEnd: 15,
},
descriptionLabel: {
    fontSize: 13,
},
leftContainer: {
    marginStart: 5,
    width: '10%',
    height: 'auto',
    // backgroundColor: 'green'
},
rightContainer: {
    width: '70%',
    height: 'auto',
    // backgroundColor: 'green'
},
radioButton: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6079FE',
    alignItems: 'center',
    justifyContent: 'center',
},
radioButtonSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#6079FE',
},
radioButtonLabel: {
    marginStart: 5,
    fontSize: 14,
    fontWeight: 'bold',
},
sendButton: {
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText: {
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold',
},
});

export default UserOption;
