import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const TeamScreen = () => {
  const [activeTab, setActiveTab] = useState('Team');

  const renderContent = () => {
    if (activeTab === 'Team') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.noTeamText}>Oops, looks like you don't have any team!</Text>
        </View>
      );
    } else if (activeTab === 'Pending') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.noTeamText}>No pending requests</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, activeTab === 'Team' && styles.activeButton]}
          onPress={() => setActiveTab('Team')}
        >
          <Text style={activeTab === 'Team' ? styles.activeButtonText : styles.buttonText}>Team</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeTab === 'Pending' && styles.activeButton]}
          onPress={() => setActiveTab('Pending')}
        >
          <Text style={activeTab === 'Pending' ? styles.activeButtonText : styles.buttonText}>Pending</Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:15,
    backgroundColor: '#F0F4F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    width: screenWidth * 0.4,
    height: 40,
    margin: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2E8F0',
  },
  activeButton: {
    backgroundColor: '#4769FE',
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
  },
  activeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTeamText: {
    color: '#949494',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
  },
});

export default TeamScreen;
