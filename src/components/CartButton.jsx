import React from 'react'
import { IconButton, Portal } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native';

export default function CartButton() {
  const navigation = useNavigation();
  return (
    <Portal>
      <IconButton icon="cart" size={30} mode="contained" iconColor='white' onPress={() => navigation.navigate('Cart')} style={styles.position}/>
    </Portal>
  )
}

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: "#1BA305"
  }
})