import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Tab4 = () => {
  const [activeTab, setActiveTab] = useState('Team');

  const renderContent = () => {
    if (activeTab === 'All Tasks') {
      return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.contentContainer}>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Short Description</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Status:</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'},  {color: '#6079FE'}]}>In Progress</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Short Description</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Status:</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}, {color: 'green'} ]}>Approved</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Short Description</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Status:</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}, {color: '#DA0000'}]}>On Review</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Short Description</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Status:</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}, {color: '#DA0000'}]}>On Review</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Short Description</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Status:</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}, {color: '#DA0000'}]}>On Review</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Short Description</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Status:</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}, {color: '#DA0000'}]}>On Review</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Short Description</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Status:</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}, {color: '#DA0000'}]}>On Review</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Short Description</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Status:</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}, {color: '#DA0000'}]}>On Review</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Short Description</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Status:</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}, {color: '#DA0000'}]}>On Review</Text>
            </View>
          </View>

        </View>
        </ScrollView>
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
    <View style={styles.container}>
      <LinearGradient colors={['#6079FE','#DA84FE']} start={[0, 3]} end={[1, 1]} style={styles.titleContainer}>
        <Text style={styles.title}>Tasks</Text>
      </LinearGradient>
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
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  }, 
  contentText: {
    fontSize: 18,
    textAlign:'center',
    color: '#515151'
  },
  itemContainer: {
    width: '95%',
    height: 100,
    elevation: 3,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 0.5,
  },

  item1: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems:'center',
    // backgroundColor: 'yellow',
  },
  item2: {
    width: '40%',
    height: 100,
    borderRadius: 5,
    marginStart: 10,
    marginTop: 10,
    
    // backgroundColor: 'green',
  },
  item3: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    marginTop: 10,
    // backgroundColor: 'yellow',
  },
  itemLabel:{
    fontSize: 14,
    marginTop: 5,
    color: '#515151'

  },
  imageHolder: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor:'gray',
  }

});

export default Tab4;
