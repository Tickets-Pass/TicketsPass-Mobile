import { StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Card, Divider, Title } from 'react-native-paper'

export default function ArtistCard({item, navigation}) {
  return (
    <Pressable onPress={() => navigation.navigate("Artist", {id: item._id})}>
    <Card style={styles.card}>
      <Image style={styles.image} source={{uri: item.photo}} />
      <Card.Content>
      <Title style={styles.title}>{item.name}</Title>
      <Divider style={styles.divider} />
      </Card.Content>
    </Card>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    resizeMode: 'cover',
    height: 200,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 100,
    borderColor: 'darkviolet',
    borderStyle: 'double',
    borderWidth: 3,
  },
  title: {
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  divider: {
    marginVertical: 5
  },
})