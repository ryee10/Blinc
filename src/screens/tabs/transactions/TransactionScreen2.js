import React, { useMemo, useState, useRef, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Button from "@/src/components/Button";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";

const gigData = {
  title: "Filter Transaction",
};

const screenWidth = Dimensions.get("window").width;

export default function Transac() {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => [ "40%", "40%", "40%"], []);
  const bottomSheetRef = useRef(null);
  const [isSheetVisible, setSheetVisible] = useState(false);

  const handleGigPress = useCallback(() => {
    if (isSheetVisible) {
      bottomSheetRef.current?.close();
    } else {
      setSheetVisible(true);
    }
  }, [isSheetVisible]);

  const handleClose = useCallback(() => {
    setSheetVisible(false);
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      
      <View style={styles.container}>
      <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#000000" style={styles.searchIcon} />
          <TextInput placeholder="Search" style={styles.searchInput} />
          <TouchableOpacity onPress={handleGigPress}>
          <FontAwesome5 name="filter" size={20} color="#999" style={styles.filterIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>

          <View style={styles.transacContainer}> 
          <View style={styles.icon}>
          <FontAwesome5 name="user" size={24} color="black" /> 
          </View>
          <View style={styles.itemContainer}>
          <View style={styles.detailsContainter2}>
          <Text style = {styles.Details}>Juan Dela Cruz</Text>
          <Text style = {styles.Details2}>Payment Method</Text>
          </View>
          <View style={styles.detailsContainter3}>
          <Text style = {[styles.Details2, {fontWeight: 'bold'}]}>$10.00</Text>
          <Text style = {styles.Details}>01-07-2024</Text>
          </View>
          </View>
        </View>

        <View style={styles.transacContainer}> 
          <View style={styles.icon}>
          <FontAwesome5 name="user" size={24} color="black" /> 
          </View>
          <View style={styles.itemContainer}>
          <View style={styles.detailsContainter2}>
          <Text style = {styles.Details}>Juan Dela Cruz</Text>
          <Text style = {styles.Details2}>Payment Method</Text>
          </View>
          <View style={styles.detailsContainter3}>
          <Text style = {[styles.Details2, {fontWeight: 'bold'}]}>$10.00</Text>
          <Text style = {styles.Details}>01-07-2024</Text>
          </View>
          </View>
        </View>
        
       </View>


      </View>

      {isSheetVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onClose={handleClose}
          enablePanDownToClose={true}
          backdropComponent={({ style }) => (
            <TouchableOpacity
              style={[style, styles.backdrop]}
              activeOpacity={1}
              onPress={handleClose}/>
          )}>
          <View style={styles.bottomSheetContent}>
            <Text style={styles.sheetTitle}>{gigData.title}</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.leftContainer}>
                    <Text style={[styles.labelFilter, {fontWeight: 'bold'}]}>BY DATE</Text>
                </View>
  
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.labelFilter}>From</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.labelFilter}>To</Text>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.searchContainer2}>
                        <Ionicons name="calendar-outline" size={20} color="#000000" style={styles.searchIcon} />
                        <TextInput placeholder="Date" style={styles.searchInput} />
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.searchContainer2}>
                        <Ionicons name="calendar-outline" size={20} color="#000000" style={styles.searchIcon} />
                        <TextInput placeholder="Date" style={styles.searchInput} />
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <LinearGradient colors={['#6079FE','#DA84FE']} start={[0, 3]} end={[1, 1]}  style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
  
          </View>
        </BottomSheet>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    width: screenWidth,
    height: 106,
    backgroundColor: '#6079FE',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'WorkSans-Regular'
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    color: "#fff",
    textAlign: 'center',
    fontFamily: 'WorkSans-SemiBold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    marginVertical: 20,
    elevation: 3,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#999',
  },
  filterIcon: {
    marginHorizontal: 10,
  },
  contentContainer: {
    width: screenWidth,
    height: 'auto',
    marginEnd: 10,
    // backgroundColor: 'green',
    marginStart: 10,
    alignItems: 'center',
  },
  transacContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 3,
    marginTop: 0.5,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 15,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer:{
    width: '75%',
    // backgroundColor: 'red',
    marginTop: 15,
    flexDirection: 'row',

  },
  detailsContainter2: {
    width: '50%',
    height: 'auto',
    // backgroundColor: 'green'
  },
  detailsContainter3: {
    width: '50%',
    height: 'auto',
    alignItems: 'flex-end',
    // backgroundColor: 'blue'
  },
  Details: {
    fontSize: 16,
    fontFamily:'WorkSans-Regular'
  },
  Details2: {
    fontSize: 16,
    color: '#6079FE',
    fontFamily:'WorkSans-Regular',
  },
  detailsContainer: {
    // backgroundColor: 'green',
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
  leftContainer: {
    width: '50%',
    height: 'auto',
    padding: 10,
    // backgroundColor: 'yellow'
  },
  rightContainer: {
    width: '50%',
    height: 'auto',
    // backgroundColor: 'yellow',
    padding: 10,
  },
  searchContainer2: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  labelFilter: {
    fontSize: 14,
  },
  buttonContainer: {
    height: 60,
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  button: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
},
  bottomSheetContent: {
    padding: 20,
  },
  sheetTitle: {
    width:'100%',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'WorkSans-SemiBold'
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
