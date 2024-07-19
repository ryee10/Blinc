import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome5, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <LinearGradient colors={['#DA84FE', '#6079FE']} 
    start={{ x: 1, y: 0 }}
    end={{ x: .90, y: .7 }}
    locations={[0.1, 0.90]} 
    style={styles.container}>
      <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ProfileS')}> 
          <FontAwesome5 name="bars" size={24} color="#252525" />
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <LinearGradient colors={["#2b9fff", "#476afe"]} style={styles.card}>
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
              <TouchableOpacity style={styles.box} onPress = {() => navigation.navigate('TopUp')}>
                <View style={styles.inner}>
                  <AntDesign name="totop" size={24} color="white" />
                  <Text style={styles.label3}>Top Up</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}  onPress = {() => navigation.navigate('TransferReceipt')}>
                <View style={styles.inner}>
                  <FontAwesome6 name="money-bill-transfer" size={24} color="white" />
                  <Text style={styles.label3}>Transfer</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}  onPress = {() => navigation.navigate('Transfer')}>
                <View style={styles.inner}>
                  <MaterialIcons name="money-off" size={24} color="white" />
                  <Text style={styles.label3}>Withdraw</Text>
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
                  <FontAwesome5 name="hand-holding-usd"  size={28} color="#DA0000" />
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
      </SafeAreaView>
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
    marginStart: 25,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  icon: {
    width: 50,
    height: 50,
  },

  container2: {
    alignItems: 'center',
  },

  card: {
    flexDirection: 'row',
    width: '90%',
    height: 180,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#466DFE', 
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
    fontFamily:'WorkSans-Regular'
  },

  label2: {
    color: 'white',
    fontSize: 14,
    fontFamily:'WorkSans-Regular'
  },

  value1: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily:'WorkSans-Regular'
  },

  value2: {
    color: 'white',
    fontSize: 18,
    fontFamily:'WorkSans-Regular'
    
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
    marginTop: 3,
    fontSize: 12,
    fontFamily:'WorkSans-Regular'
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
    width: '30%',
    height: 60,
    borderRadius: 10,
  },

  inner: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#6079FE',
    // flexDirection: 'row',
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
    fontFamily:'WorkSans-Regular'
  },

  label4value: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily:'WorkSans-Regular'
  },

  container3: {
    width: screenWidth,
    height: screenHeight,
    marginTop: 20,
    backgroundColor: '#f1f1f1'
  },
  recent: {
    fontSize: 18,
    padding: 25,
    color: '#515151',
    fontFamily:'WorkSans-Regular'
  }

});

export default HomeScreen;
