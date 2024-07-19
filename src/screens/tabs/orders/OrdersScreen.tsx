import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from '@expo/vector-icons';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const data = [
  { id: '1', title: 'Item 1' },
  { id: '1', title: 'Item 2' },
];


const OrderScreen = () => {
  const [activeTab, setActiveTab] = useState('Team');

  const renderContent = () => {
    if (activeTab === 'Active') {
      return (
        <View style={styles.contentContainer}>
  
        </View>
      );
    } else if (activeTab === 'For Approval') {
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
              <Text style={styles.itemLabel}>Alwyne Paglingayen</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Price</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]}>$1,000.00 </Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Alwyne Paglingayen</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Price</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]}>$1,000.00 </Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Alwyne Paglingayen</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Price</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]}>$1,000.00 </Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Alwyne Paglingayen</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Price</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]}>$1,000.00 </Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Alwyne Paglingayen</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Price</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]}>$1,000.00 </Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Alwyne Paglingayen</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Price</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]}>$1,000.00 </Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Alwyne Paglingayen</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Price</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]}>$1,000.00 </Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.item1}>
              <View style={styles.imageHolder}/>
            </View>
            <View style={styles.item2}>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]} >Title(Branding)</Text>
              <Text style={styles.itemLabel}>July 12, 2024</Text>
              <Text style={styles.itemLabel}>Alwyne Paglingayen</Text>
            </View>
            <View style={styles.item3}>
              <Text style={styles.itemLabel}>Price</Text>
              <Text style={[styles.itemLabel, {fontWeight: 'bold'}]}>$1,000.00 </Text>
            </View>
          </View>

        </View>
        </ScrollView>

      );
    } else if (activeTab === 'Completed') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>No orders available</Text>
        </View>
      );
    } else if (activeTab === 'Cancelled') {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>No orders available</Text>
        </View>
      );
    }
    
  };
  
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#6079FE','#DA84FE']} start={[0, 3]} end={[1, 1]}  style={styles.titleContainer}>
        <Text style={styles.title}>My Orders</Text>
      </LinearGradient>
      <View style={styles.buttonContainer}>
        <ScrollView horizontal = {true}>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'Active' && styles.activeButton]}
        onPress={() => setActiveTab('Active')}>
          <Text style={activeTab === 'Active' ? styles.activeButtonText : styles.buttonText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'For Approval' && styles.activeButton]}
        onPress={() => setActiveTab('For Approval')}>
          <Text style={activeTab === 'For Approval' ? styles .activeButtonText : styles.buttonText}>For Approval</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'Completed' && styles.activeButton]}
        onPress={() => setActiveTab('Completed')}>
          <Text style={activeTab === 'Completed' ? styles.activeButtonText : styles.buttonText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, activeTab === 'Cancelled' && styles.activeButton]}
        onPress={() => setActiveTab('Cancelled')}>
          <Text style={activeTab === 'Cancelled' ? styles .activeButtonText : styles.buttonText}>Cancelled</Text>
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
    backgroundColor: '#6079FE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
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
    height: '100%',
    alignItems: 'center',
    // backgroundColor: 'green'
  }, 
  contentText: {
    fontSize: 18,
    textAlign:'center',
    color: '#515151'
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
    alignItems:'center',
    // backgroundColor: 'yellow',
  },
  item2: {
    width: '40%',
    height: 90,
    borderRadius: 5,
    marginStart: 10,
    marginTop: 10,
    // backgroundColor: 'green',
  },
  item3: {
    width: '30%',
    height: 90,
    marginTop: 10,
    borderRadius: 5,
    // backgroundColor: 'yellow',
  },
  itemLabel:{
    fontSize: 14,
    marginTop: 5,
    color: '#515151'

  },
  desc: {
    fontSize: 14,
  },
  imageHolder: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor:'gray',
  }
});

export default OrderScreen;
