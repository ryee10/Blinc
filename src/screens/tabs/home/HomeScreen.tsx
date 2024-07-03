import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome5, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <LinearGradient
      colors={['#DA84FE', '#6079FE']}
      style={styles.container}
     >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ProfileS')}> 
          <FontAwesome5 name="user" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.greetings}>
            <Text style={styles.g1}>Hello</Text>
            <Text style={styles.g2}>Juan Dela Cruz</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <LinearGradient
            colors={['#2b9fff', '#476afe']}
            style={styles.card}>
            <View style={styles.leftContainer}>
              <View>
                <Text style={styles.label1}>Wallet Balance</Text>
                <Text style={styles.label2}>Balance</Text>
                <Text style={styles.value1}>Php 100,000.00</Text>
              </View>
              <View style={styles.accountContainer}>
                <Text style={styles.label2}>Account No.</Text>
                <Text style={styles.value2}>123456789012</Text>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.dotsContainer}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
              <View style={styles.chipContainer}>
                <Image source={require('../../../../assets/images/chip.png')} style={styles.chip} />
              </View>
            </View>
          </LinearGradient>
          <View style={styles.Box2}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.box}>
                <View style={styles.inner}>
                  <AntDesign name="totop" size={24} color="white" />
                  <Text style={styles.label3}>TOP UP</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <View style={styles.inner}>
                  <FontAwesome6 name="money-bill-transfer" size={24} color="white" />
                  <Text style={styles.label3}>TRANSFER</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.countContainer}>
            <View style={styles.box2}>
                <View style={styles.inner2}>
                 <MaterialCommunityIcons name="cart-minus" size={28} color="blue"/>
                  <Text style={styles.label4}>Total Orders:</Text>
                  <Text style={styles.label4value}>0</Text>
                </View>
              </View>

              <View style={styles.box2}>
                <View style={styles.inner2}>
                  <MaterialCommunityIcons name="cart-check"  size={28} color="green" />
                  <Text style={styles.label4}>Completed Orders:</Text>
                  <Text style={styles.label4value}>0</Text>
                </View>
              </View>

              <View style={styles.box2}>
                <View style={styles.inner2}>
                  <FontAwesome5 name="hand-holding-usd"  size={28} color="red" />
                  <Text style={styles.label4}>Total Spent:</Text>
                  <Text style={styles.label4value}>0</Text>
                </View>
              </View>
            </View>

            <View style={styles.container3}>
              <Text style={styles.recent}>Recent Activity</Text>
            </View>

          </View>
        </View>
      </ScrollView>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
  },
  container1: {
    padding: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  greetings: {
    color: 'white',
    justifyContent: 'center',
    marginTop: 15,
    padding: 10
  },

  g1: {
    color: 'white',
  },

  g2: {
    color: 'white',
    fontWeight: 'bold'
  },

  container2: {
    alignItems: 'center'
  },

  card: {
    flexDirection: 'row',
    width: '90%',
    height: 180,
    borderRadius: 10,
    padding: 20, 
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  rightContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  label1: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },

  label2: {
    color: 'white',
    fontSize: 14,
  },

  value1: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  value2: {
    color: 'white',
    fontSize: 18,
    // fontWeight: 'bold',
  },

  accountContainer: {
    marginTop: 20,
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 60,
  },

  dot: {
    width: 7,
    height: 7,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  chipContainer: {
    alignItems: 'flex-end',
  },
  chip: {
    width: 40,
    height: 30,
  },

  Box2: {
    width: screenWidth,
    height: screenHeight,
    marginTop: 40,
    backgroundColor: '#F1F1F1',
    borderRadius: 50,
    alignItems: 'center',
    paddingBottom: 20,
  },

  label3: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },

  buttonContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    // backgroundColor: '#000'
  },

  box: {
    width: '45%',
    height: 60,
    borderRadius: 10,
  },

  inner: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#6079FE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  countContainer: {
    height: '10%',
    width: '90%',
    // backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  box2: {
    width: '32%',
    height: 100,
    padding: 2,
    borderRadius: 10,
  },

  inner2: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  label4: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
  },

  label4value: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',

  },

  container3: {
    width: screenWidth,
    height: '30%',
    marginTop: 20,
    // backgroundColor: 'green'
  },
  recent: {
    fontSize: 14,
    padding: 25,
    color: '#515151'
  }

});

export default Home;