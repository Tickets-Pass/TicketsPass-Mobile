import { View, Text, ImageBackground ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <View  >
    <ImageBackground source={{uri:'https://media4.giphy.com/media/lmjzmEcZLkcMLtVrWi/giphy.gif'}} style={{height:400,width:400,alignItems:'center'}} >
      <Image  source={require('../../assets/ticketlogorotado.png')} style={{width:150,height:150}} />
      <LinearGradient end={{x: 0.7, y: 0.5 }} style={{borderRadius:25,transform:[{rotate:'10deg'}],padding:5}}  colors={['#647DEE','#B621FE']}>
    <Text style={style.text} >Tickets Pass</Text>
      </LinearGradient>
    </ImageBackground>
    
    </View>
  )
}

const style = StyleSheet.create({
  text:{
    fontSize:40,
    color:'#FFFFFF',
    fontFamily:'monospace',
    paddingLeft:30,
    paddingRight:50,
    textShadowColor:'#fff',
    textShadowOffset:{width: 10, height: 10},
    textShadowRadius:40,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius:25,
    textAlign:'center'
  }
})