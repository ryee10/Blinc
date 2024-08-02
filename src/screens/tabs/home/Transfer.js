import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/src/components/Button";

const TransferScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Ionicons name="qr-code-outline" size={24} color="#4769FE" />
            <Text style={styles.scanText}>Scan/Upload QR</Text>
            <Text style={styles.descriptionText}>
              Transfer by scanning or uploading a QR code.
            </Text>
          </View>
          <Text style={styles.headerText}>MY FAVORITES</Text>
          <View style={styles.favoritesCard}>
            <Ionicons name="person-outline" size={24} color="#4769FE" />
            <Text style={styles.favoritesText}>
              Complete a transaction to add it to your favorites
            </Text>
          </View>
          <Text style={styles.inputLabel}>Recipient</Text>
          <TextInput
            style={styles.input}
            placeholder="ex. Juan, @juan, or 091505503..."
          />
          <Text style={styles.inputLabel}>Amount</Text>
          <TextInput style={styles.input} placeholder="Enter Amount" />
          <Text style={styles.walletText}>You have $100.00 in your wallet.</Text>
          <Text style={styles.inputLabel}>Note (Optional)</Text>
          <TextInput
            style={[styles.input, styles.noteInput]}
            placeholder="Add a note"
          />
          <Button  title="Continue" 
          /* action={() => navigation.navigate("TopUpReceipt")} *//>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  scanText: {
    fontSize: 18,
    color: "#4769FE",
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: "#949494",
    marginTop: 5,
    textAlign: "center",
  },
  headerText: {
    fontSize: 16,
    color: "#515151",
    marginVertical: 10,
  },
  favoritesCard: {
    backgroundColor: "#F0F4F7",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    borderStyle: 'dashed'
  },
  favoritesText: {
    fontSize: 14,
    color: "#949494",
    marginTop: 10,
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
    marginBottom: 10,
    fontSize: 14,
  },
  noteInput: {
    marginBottom: 20, 
  },
  walletText: {
    fontSize: 12,
    color: "#949494",
    marginBottom: 20,
  },
  

});

export default TransferScreen;
