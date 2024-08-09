// NotificationScreen.js
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const allNotifications = [
  {
    id: '1',
    type: 'Receive payment',
    description: 'Receive payment of $15.00 from...',
  },
  // Add more notifications if needed
];

const recentNotifications = [
  {
    id: '2',
    type: 'Receive payment',
    description: 'Receive payment of $15.00 from...',
  },
  // Add more recent notifications if needed
];

const NotificationScreen = () => {
  const [activeTab, setActiveTab] = useState('All');

  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <View style={styles.iconContainer}>
        
        <Ionicons name="reader-outline" size={24} color="#4769FE"/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.notificationType}>{item.type}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const notifications = activeTab === 'All' ? allNotifications : recentNotifications;

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('All')}>
          <Text style={[styles.tab, activeTab === 'All' && styles.activeTab]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Recent')}>
          <Text style={[styles.tab, activeTab === 'Recent' && styles.activeTab]}>Recent</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
   
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    fontSize: 16,
    color: '#B0B0B0',
    marginLeft:15,
    marginTop: 20
  },
  activeTab: {
    color: '#0F73EE',
    borderBottomWidth: 2,
    borderBottomColor: '#0F73EE',
    paddingBottom: 4,

  },
  notificationContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 0.2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  notificationType: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default NotificationScreen;
