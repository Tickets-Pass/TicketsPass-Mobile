import { Image, Text , TouchableOpacity , View } from 'react-native'
import React from 'react'
import { createDrawerNavigator , DrawerContentScrollView} from '@react-navigation/drawer'
import Home from '../views/Home'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'


const DrawerNav = createDrawerNavigator()

export default function Drawer() {
  return (
    <DrawerNav.Navigator  screenOptions={{headerStyle:{backgroundColor:'purple'},headerTintColor:'#fff'}}  name='root'  drawerContent = {(props)=><MenuItems {...props} />} >
        <DrawerNav.Screen  name='Home' component={Home}/>
        <DrawerNav.Screen  name='My Profile' component={Home}/>
        <DrawerNav.Screen  name='Sign In' component={SignIn}/>
        <DrawerNav.Screen  name='Sign Up' component={SignUp}/>
        <DrawerNav.Screen  name='Sign Out' component={Home}/>
    </DrawerNav.Navigator>
  )
}

const MenuItems = ({navigation})=>{
    return (
        <DrawerContentScrollView  style={{backgroundColor:'#aaa'}} >
        <View  style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',backgroundColor:'#252525',borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/ticketlogorotado.png')} style={{width:50,height:50}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff'}} >Ticket Pass  </Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'purple',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/hogar.png')} style={{width:30,height:30,marginLeft:10}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >Home </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'purple',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/usuario.png')} style={{width:30,height:30,marginLeft:10}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >My Profile  </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Sign Up')} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'purple',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/agregar-usuario.png')} style={{width:30,height:30,marginLeft:10}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >Sign Up  </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Sign In')} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'purple',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/ingresar.png')} style={{width:30,height:30,marginLeft:10}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >Sign In </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'purple',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/salida.png')} style={{width:30,height:30,marginLeft:10}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >Sign Out  </Text>
        </TouchableOpacity>
        
        
        
        
        </DrawerContentScrollView>
    )
}