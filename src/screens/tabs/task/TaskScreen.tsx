import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const TaskScreen = () => {
    const [selectedTab, setSelectedTab] = useState('All Tasks');

    const renderContent = () => {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.noTasksText}>You don't have any tasks.</Text>
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>From:</Text>
          <TouchableOpacity style={styles.dropdownButton}>
            <Text style={styles.dropdownText}>All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabs}>
          {['All Tasks', 'New Task', 'In Progress', 'On Review', 'Approved'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, selectedTab === tab && styles.selectedTab]}
              onPress={() => setSelectedTab(tab)}
            >
              <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderContent()}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8ff',
      paddingTop: 50,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    headerText: {
      fontSize: 18,
      marginRight: 10,
    },
    dropdownButton: {
      backgroundColor: '#fff',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      borderColor: '#ccc',
      borderWidth: 1,
    },
    dropdownText: {
      fontSize: 16,
    },
    tabs: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 15,
    },
    tab: {
      paddingVertical: 10,
      paddingHorizontal: 8,
      borderRadius: 15,
    },
    selectedTab: {
      backgroundColor: '#7B61FF',
    },
    tabText: {
      fontSize: 16,
      color: 'gray',
    },
    selectedTabText: {
      color: '#fff',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noTasksText: {
      fontSize: 20,
      color: 'gray',
    },
  });
  

export default TaskScreen