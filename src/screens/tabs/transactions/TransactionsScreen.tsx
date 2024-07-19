// screens/AnimationTab1.js
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Tab5 = () => {
 
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <LinearGradient colors={['#6079FE','#DA84FE']} start={[0, 3]} end={[1, 1]}  style={styles.titleContainer}>
        <Text style={styles.title}>Transactions List</Text>
      </LinearGradient>

      <View style={styles.contentContainer}>
          <View style={styles.transacContainer}> 
          <View style={styles.icon}>
          <FontAwesome5 name="user" size={24} color="black" /> 
          </View>
          <View style={styles.detailsContainer}>
          <View style={styles.detailsContainter2}>
          <Text style = {styles.Details}>Juan Dela Cruz</Text>
          <Text style = {styles.Details2}>Payment Method</Text>
          </View>
          <View style={styles.detailsContainter3}>
          <Text style = {[styles.Details2, {fontWeight: 'bold'}]}>10,000 Php</Text>
          <Text style = {styles.Details}>01-07-2024</Text>
          </View>
          </View>
        </View>
       </View>

       <View style={styles.contentContainer}>
          <View style={styles.transacContainer}>
          <View style={styles.icon}>
          <FontAwesome5 name="user" size={24} color="black" /> 
          </View>
          <View style={styles.detailsContainer}>
          <View style={styles.detailsContainter2}>
          <Text style = {styles.Details}>Juan Dela Cruz</Text>
          <Text style = {styles.Details2}>Payment Method</Text>
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
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    color: "#fff",
    fontFamily:'WorkSans-SemiBold'
    // backgroundColor: 'green'
  },
  contentContainer: {
    width: screenWidth,
    height: 'auto',
    marginEnd: 10,
    // backgroundColor: 'green',
    marginStart: 10,
    alignItems: 'center',
  },
  transacContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 3,
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
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
  },
  Details2: {
    fontSize: 16,
    color: '#6079FE',
    fontFamily:'WorkSans-Regular'
  },
 
});

export default Tab5;
