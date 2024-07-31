import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const tasks = [
  {
    title: "Title(Branding)",
    date: "July 12, 2024",
    description: "Short Description",
    status: "In Progress",
    statusColor: "#6079FE",
  },
  {
    title: "Title(Branding)",
    date: "July 12, 2024",
    description: "Short Description",
    status: "Approved",
    statusColor: "green",
  },
  {
    title: "Title(Branding)",
    date: "July 12, 2024",
    description: "Short Description",
    status: "On Review",
    statusColor: "#DA0000",
  },
  
];

const TaskScreen = () => {
  const [activeTab, setActiveTab] = useState('All Tasks');

  const filterTasks = () => {
    if (activeTab === 'All Tasks') {
      return tasks;
    }
    return tasks.filter(task => task.status === activeTab);
  };

  const renderContent = () => {
    const filteredTasks = filterTasks();

    if (filteredTasks.length === 0) {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>You don't have any task.</Text>
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.contentContainer}>
          {filteredTasks.map((task, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.item1}>
                <View style={styles.imageHolder} />
              </View>
              <View style={styles.item2}>
                <Text style={[styles.itemLabel, { fontWeight: 'bold' }]}>{task.title}</Text>
                <Text style={styles.itemLabel}>{task.date}</Text>
                <Text style={styles.itemLabel}>{task.description}</Text>
              </View>
              <View style={styles.item3}>
                <Text style={styles.itemLabel}>Status:</Text>
                <Text style={[styles.itemLabel, { fontWeight: 'bold', color: task.statusColor }]}>{task.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ScrollView horizontal={true}>
          <TouchableOpacity
            style={[styles.button, activeTab === 'All Tasks' && styles.activeButton]}
            onPress={() => setActiveTab('All Tasks')}
          >
            <Text style={activeTab === 'All Tasks' ? styles.activeButtonText : styles.buttonText}>All Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, activeTab === 'In Progress' && styles.activeButton]}
            onPress={() => setActiveTab('In Progress')}
          >
            <Text style={activeTab === 'In Progress' ? styles.activeButtonText : styles.buttonText}>In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, activeTab === 'On Review' && styles.activeButton]}
            onPress={() => setActiveTab('On Review')}
          >
            <Text style={activeTab === 'On Review' ? styles.activeButtonText : styles.buttonText}>On Review</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, activeTab === 'Approved' && styles.activeButton]}
            onPress={() => setActiveTab('Approved')}
          >
            <Text style={activeTab === 'Approved' ? styles.activeButtonText : styles.buttonText}>Approved</Text>
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
    fontFamily: 'WorkSans-SemiBold'
  },
  buttonContainer: {
    width: screenWidth,
    height: 50,
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
    backgroundColor: '#E2E8F0'
  },
  activeButton: {
    backgroundColor: '#4769FE',
  },
  buttonText: {
    color: '#000',
    fontFamily: 'WorkSans-Regular'
  },
  activeButtonText: {
    color: '#fff',
    fontFamily: 'WorkSans-Regular'
  },
  contentContainer: {
    width: screenWidth,
    height: '50%',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#515151',
    fontFamily: 'WorkSans-Regular'
  },
  itemContainer: {
    width: '100%',
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
    alignItems: 'center',
  },
  item2: {
    width: '40%',
    height: 100,
    borderRadius: 5,
    marginStart: 10,
    marginTop: 10,
  },
  item3: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    marginTop: 10,
  },
  itemLabel: {
    fontSize: 14,
    marginTop: 5,
    color: '#515151',
    fontFamily: 'WorkSans-Regular'
  },
  imageHolder: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: 'gray',
  }
});

export default TaskScreen;
