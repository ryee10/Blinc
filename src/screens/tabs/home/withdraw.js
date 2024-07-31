import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "@/src/components/Button";

const WithdrawScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.sectionHeader}>E-wallet</Text>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Ionicons name="wallet-outline" size={24} color="#4769FE" />
              <Text style={styles.cardText}>Gcash</Text>
              <Text style={styles.cardText}>********0345</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add-circle-outline" size={24} color="#4769FE" />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionHeader}>Bank Account</Text>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Ionicons name="home-outline" size={24} color="#4769FE" />
              <Text style={styles.cardText}>Banco De Oro</Text>
              <Text style={styles.cardText}>********3456</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add-circle-outline" size={24} color="#4769FE" />
            </TouchableOpacity>
          </View>

          <Text style={styles.walletText}>You have $100.00 in your wallet.</Text>
          
          <Text style={styles.inputLabel}>Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
          />
          
          <Button style={styles.button} title="Withdraw" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F0F4F7",
  },
  sectionHeader: {
    fontSize: 16,
    color: "#515151",
    marginBottom: 10,
    marginTop: 20,
    fontWeight: "bold"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    fontSize: 16,
    color: "#515151",
    marginLeft: 10,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  walletText: {
    fontSize: 14,
    color: "#949494",
    marginBottom: 10,
    textAlign: "center",
  },
  inputLabel: {
    fontSize: 14,
    color: "#515151",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4769FE",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  }
});

export default WithdrawScreen;
