
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Tab4 = () => {
  const [activeTab, setActiveTab] = useState('Team');

  const renderContent = () => {
    if (activeTab === 'All Tasks') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>You don't have any task.</Text>
        </View>
      );
    } else if (activeTab === 'New Tasks') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>You don't have any task.</Text>
        </View>
      );
    } else if (activeTab === 'In Progress') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>You don't have any task.</Text>
        </View>
      );
    } else if (activeTab === 'On Review') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>You don't have any task.</Text>
        </View>
      );
    } else if (activeTab === 'Approved') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>You don't have any task.</Text>
        </View>
      );
    }
    
  };
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tasks</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ScrollView horizontal = {true}>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'All Tasks' && styles.activeButton]}
        onPress={() => setActiveTab('All Tasks')}>
          <Text style={activeTab === 'All Tasks' ? styles.activeButtonText : styles.buttonText}>All Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'New Tasks' && styles.activeButton]}
        onPress={() => setActiveTab('New Tasks')}>
          <Text style={activeTab === 'New Tasks' ? styles .activeButtonText : styles.buttonText}>New Task</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'In Progress' && styles.activeButton]}
        onPress={() => setActiveTab('In Progress')}>
          <Text style={activeTab === 'In Progress' ? styles.activeButtonText : styles.buttonText}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'On Review' && styles.activeButton]}
        onPress={() => setActiveTab('On Review')}>
          <Text style={activeTab === 'On Review' ? styles .activeButtonText : styles.buttonText}>On Review</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'Approved' && styles.activeButton]}
        onPress={() => setActiveTab('Approved')}>
          <Text style={activeTab === 'Approved' ? styles .activeButtonText : styles.buttonText}>Approved</Text>
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
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    marginTop: 30,
    color: "black",
   
    
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
    padding: 60,
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

export default Tab4;
