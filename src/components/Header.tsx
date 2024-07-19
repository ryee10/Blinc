import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Header = () => {
  return (
    <View style={[styles.container]}>
        <TouchableOpacity style={[styles.roundBtn]}>
            <Text style={[]}>
            JD
            </Text>
        </TouchableOpacity>
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        gap: 10,
    },
    roundBtn: {
        width: 40,
        height: 40,
        borderRadius:20,
        backgroundColor: '#cccccc'
    }
})
export default Header