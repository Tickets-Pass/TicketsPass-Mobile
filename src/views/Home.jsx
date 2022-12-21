import { View, Text, ImageBackground ,Image,StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-paper';
import CartButton from '../components/CartButton';
import { useTranslation } from 'react-i18next';

export default function Home({navigation}) {
  const {t} = useTranslation()
  return (
    <View style={style.container}>
    <ImageBackground source={{uri:'https://media4.giphy.com/media/lmjzmEcZLkcMLtVrWi/giphy.gif'}} style={style.imageContainer} >
      <Image  source={require('../../assets/ticketlogorotado.png')} style={style.logo} />
      <LinearGradient end={{x: 0.7, y: 0.5 }} style={style.gradient}  colors={['#647DEE','#B621FE']}>
    <Text style={style.text} >Tickets Pass</Text>
      </LinearGradient>
    </ImageBackground>
    <View style={style.content}>
      <Button mode="contained" icon="account-music" style={style.button} onPress={() => navigation.navigate(t('artist'))}>
        <Text style={style.buttonText}>{t('artist')}</Text>
      </Button>
      <Button mode="contained" icon="music-note" style={style.button} onPress={() => navigation.navigate(t('concert'))}>
        <Text style={style.buttonText}>{t('concert')}</Text>
      </Button>
    </View>
    <CartButton />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems:'center'
  },
  logo: {
    width:150,
    height:150
  },
  gradient: {
    borderRadius:25,
    transform:[{rotate:'10deg'}],
    padding:5
  },
  text:{
    fontSize:40,
    color:'#FFFFFF',
    fontFamily:'monospace',
    paddingHorizontal:50,
    textShadowColor:'#fff',
    textShadowOffset:{width: 10, height: 10},
    textShadowRadius:40,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius:25,
    textAlign:'center'
  },
  content: {
    flex:  1,
    backgroundColor: '#000',
    justifyContent: 'space-around',
    padding: 20
  },
  button: {
    paddingVertical: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
})