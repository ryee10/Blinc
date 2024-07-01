import { View, Text } from 'react-native'
import React from 'react'


const cardDetails = [
    {
      id: 1,
      cardNumber: '5355 0348 1256 1234',
      expiry: '12/24',
      balance: '$2345.67',
      cardImage: require('../../assets/images/visa.png'),
      
    },
]
const Card = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  )
}

export default Card