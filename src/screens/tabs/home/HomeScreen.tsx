import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2b9fff', '#476afe']}
        style={styles.walletBalance}
      >
        <Text style={styles.walletTitle}>Wallet Balance</Text>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>PHP 0.00</Text>
        <Text style={styles.accountLabel}>Account No:</Text>
        <Text style={styles.accountNumber}>508375019859</Text>
        <Image source={require('../../../../assets/images/chip.png')} style={styles.cardImage} />
        </LinearGradient>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
  },
  walletBalance: {
    backgroundColor: '#4A90E2',
    padding: 20,
    width: 300,
    borderRadius: 10,
    position: 'relative',
  },
  walletTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
  },
  balanceLabel: {
    color: 'white',
    fontSize: 14,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  accountLabel: {
    color: 'white',
    fontSize: 14,
  },
  accountNumber: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  cardImage: {
    position: 'absolute',
    bottom: 45,
    right: 40,
    width: 45,
    height: 45,
  },
});
