import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const OrderScreen = () => {
  const [activeTab, setActiveTab] = useState('Team');

  const renderContent = () => {
    if (activeTab === 'Active') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>No orders available</Text>
        </View>
      );
    } else if (activeTab === 'For Approval') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>No orders available</Text>
        </View>
      );
    } else if (activeTab === 'Completed') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>No orders available</Text>
        </View>
      );
    } else if (activeTab === 'Cancelled') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>No orders available</Text>
        </View>
      );
    }
    
  };
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Orders</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ScrollView horizontal = {true}>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'Active' && styles.activeButton]}
        onPress={() => setActiveTab('Active')}>
          <Text style={activeTab === 'Active' ? styles.activeButtonText : styles.buttonText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'For Approval' && styles.activeButton]}
        onPress={() => setActiveTab('For Approval')}>
          <Text style={activeTab === 'For Approval' ? styles .activeButtonText : styles.buttonText}>For Approval</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'Completed' && styles.activeButton]}
        onPress={() => setActiveTab('Completed')}>
          <Text style={activeTab === 'Completed' ? styles.activeButtonText : styles.buttonText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'Cancelled' && styles.activeButton]}
        onPress={() => setActiveTab('Cancelled')}>
          <Text style={activeTab === 'Cancelled' ? styles .activeButtonText : styles.buttonText}>Cancelled</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
      {renderContent()}
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
    backgroundColor: '#6079FE',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    width: screenWidth,
    height: 50,
    // backgroundColor: 'green',
    margin: 10,
    alignItems: 'flex-start',
    flexDirection: 'row'

  },
  button: {
    width: 100,
    height: 40,
    margin: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBD3FF'
  },
  activeButton: {
    backgroundColor: '#6079FE',
  },
  buttonText: {
    color: '#000'
  },
  activeButtonText: {
    color: '#fff'
  },
  contentContainer: {
    width: screenWidth,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  }, 
  contentText: {
    fontSize: 18,
    textAlign:'center',
    color: '#515151'
  }
});

export default OrderScreen;