import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; // For Ant Design icons
import { Ionicons } from '@expo/vector-icons';

const TopUpScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState('Metamask');

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>MY FAVORITES</Text>
        <Text style={styles.subtitle}>Complete a transaction to add it to your favorites</Text>
        <View style={styles.favoritesContainer}>
          {Array(4).fill(null).map((_, index) => (
            <TouchableOpacity key={index} style={styles.favoritePlaceholder}>
              <AntDesignIcon name="plus" size={15} color="#5977FD " />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Top-up Methods</Text>
        {topUpMethods.map((method, index) => (
          <TouchableOpacity
            key={index}
            style={styles.methodContainer}
            onPress={() => handleSelectMethod(method.name)}
          >
            <View style={styles.methodInfo}>
              <Icon name={method.icon} size={24} color="#000" />
              <Text style={styles.methodText}>{method.name}</Text>
            </View>
            {selectedMethod === method.name && (
              <Ionicons name="checkmark-circle" size={24} color="#4769FE" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const topUpMethods = [
  { name: 'Metamask', icon: 'account-balance-wallet' },
  { name: 'E-wallet', icon: 'account-balance-wallet' },
  { name: 'Linked Bank Account', icon: 'account-balance' },
  { name: 'Debit or Credit Card', icon: 'credit-card' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F7',

  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#EBEBEB',
    margin: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'WorkSans-Medium',
    marginBottom: 5,
  },
  subtitle: {
    color: '#949494',
    fontFamily: 'WorkSans-Regular',
    marginBottom: 18,
  },
  favoritesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  favoritePlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5977FD',
    borderStyle: 'dashed'
  },
  methodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 25,
    borderColor: '#ddd',
    width: '100%'
  },
  methodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  methodText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default TopUpScreen;
