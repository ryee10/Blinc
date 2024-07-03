
// screens/AnimationTab1.js
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Tab5 = () => {
 
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Transactions List</Text>
      </View>
      <View style={styles.contentContainer}>
          <View style={styles.transacContainer}>
          <View style={styles.icon}>
          <FontAwesome5 name="user" size={24} color="black" /> 
          </View>
          <View style={styles.detailsContainer}>
          <View style={styles.detailsContainter2}>
          <Text style = {styles.Details}>Juan Dela Cruz</Text>
          <Text style = {styles.Details2}>Sent Money</Text>
          </View>
          <View style={styles.detailsContainter3}>
          <Text style = {[styles.Details2, {fontWeight: 'bold'}]}>10,000 Php</Text>
          <Text style = {styles.Details}>01-07-2024</Text>
          </View>
          </View>
        </View>
       </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    width: screenWidth,
    height: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6079FE',
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    color: "#fff",
    fontWeight: 'bold',
    // backgroundColor: 'green'
  },
  contentContainer: {
    width: screenWidth,
    height: 'auto',
    marginEnd: 10,
    // backgroundColor: 'green',
    marginTop: 30,
    marginStart: 10,
    alignItems: 'center',
  },
  transacContainer: {
    width: '90%',
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 15,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer:{
    width: '70%',
    // backgroundColor: 'red',
    flexDirection: 'row',

  },
  detailsContainter2: {
    width: '50%',
    height: 'auto',
    marginTop: 20,
    // backgroundColor: 'green'
  },
  detailsContainter3: {
    width: '50%',
    height: 'auto',
    marginTop: 20,
    alignItems: 'flex-end',
    // backgroundColor: 'blue'
  },
  Details: {
    fontSize: 15,
  },
  Details2: {
    fontSize: 15,
    color: '#6079FE'
  }
});

export default Tab5;
