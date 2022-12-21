import { Image, Text , TouchableOpacity , View } from 'react-native'
import React, {useState} from 'react'
import { createDrawerNavigator , DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import SignOut from '../views/SignOut'
import { useSelector } from 'react-redux'
import Profile from '../views/Profile'
import Stack from './Stack'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'



const DrawerNav = createDrawerNavigator()

export default function Drawer() {
    let {id} = useSelector(store => store.userReducer)
    

  return (
    <DrawerNav.Navigator  screenOptions={{headerStyle:{backgroundColor:'purple'},headerTintColor:'#fff'}}  name='root'  drawerContent = {(props)=><MenuItems {...props} />} >
        <DrawerNav.Screen  name='TicketsPass' component={Stack}/>
        <DrawerNav.Screen name={t('profile')} initialParams={{id: id}} component={Profile}/>
        <DrawerNav.Screen  name={t('sign_in')} component={SignIn}/>
        <DrawerNav.Screen  name={t('sign_up')} component={SignUp}/>
        <DrawerNav.Screen  name={t('log_out')} component={SignOut}/>
    </DrawerNav.Navigator>
  )
}

const MenuItems = ({navigation})=>{
    let { logged,photo,name,lastName} = useSelector(state => state.userReducer)
    const {i18n,t} = useTranslation()
    let [open,setOpen] = useState(false)
    let [lan,setLan] = useState(false)
    return (
        <DrawerContentScrollView  style={{backgroundColor:'purple'}} >
        <View  style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',backgroundColor:'#252525',borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/ticketlogorotado.png')} style={{width:50,height:50}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff'}} >Ticket Pass  </Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate(t('home'))} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/hogar.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('home')} </Text>
        </TouchableOpacity>
        {logged &&
        <TouchableOpacity onPress={()=> navigation.navigate(t('profile'))} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={{uri:photo}} style={{width:40,height:40,borderRadius:25}}/>
            <View>
                <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('profile')}</Text>
                <Text style={{fontSize:20,color:'#fff',marginLeft:10}}>{name+ ' ' +lastName}</Text>
            </View>
        </TouchableOpacity>}
        <TouchableOpacity onPress={()=> navigation.navigate(t('sign_up'))} style={logged?{display:'none'}:{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/agregar-usuario.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('sign_up')}  </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate(t('sign_in'))} style={logged?{display:'none'}:{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/ingresar.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('sign_in')} </Text>
        </TouchableOpacity>
        {logged &&
        <TouchableOpacity onPress={()=> navigation.navigate(t('log_out'))} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/salida.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('log_out')}  </Text>
        </TouchableOpacity>}
        <TouchableOpacity onPress={()=>  {setOpen(!open);setLan(false)}} style={{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5}}>
            <Image source={require('../../assets/ajustes-deslizadores.png')} style={{width:30,height:30}}/>
            <View style={{justifyContent:'space-between',flexDirection:'row',width:'90%'}}>
                <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('settin')}</Text>
            {!open ? <Image source={require('../../assets/angulo-pequeno-derecho.png')} style={{width:35,height:35,backgroundColor:'#aaa',borderRadius:30}}/>:
            <Image source={require('../../assets/angulo-pequeno-hacia-abajo.png')} style={{width:35,height:35,backgroundColor:'#aaa',borderRadius:30}}/>}
            </View>
            
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>  setLan(!lan)} style={!open?{display:'none'}:{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:5,padding:5,margin:5,backgroundColor:'#C570E1'}}>
            <Image source={require('../../assets/globo.png')} style={{width:30,height:30}}/>
            <View style={{justifyContent:'space-between',flexDirection:'row',width:'90%'}}>
                <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('lang')}</Text>
            {!lan ? <Image source={require('../../assets/angulo-pequeno-derecho.png')} style={{width:35,height:35,marginLeft:5,backgroundColor:'#aaa',borderRadius:30}}/>:
            <Image source={require('../../assets/angulo-pequeno-hacia-abajo.png')} style={{width:35,height:35,marginLeft:5,backgroundColor:'#aaa',borderRadius:30}}/>}
            </View>
            
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {i18n.changeLanguage('es');setOpen(false);setLan(false)} } style={!lan || !open?{display:'none'}:{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5,backgroundColor:'#9A14D3'}}>
            <Image source={require('../../assets/espana.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('español')} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {i18n.changeLanguage('en');setOpen(false);setLan(false)} } style={!lan || !open?{display:'none'}:{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5,backgroundColor:'#9A14D3'}}>
            <Image source={require('../../assets/reino-unido.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('ingles')} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {i18n.changeLanguage('fr');setOpen(false);setLan(false)} } style={!lan || !open?{display:'none'}:{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5,backgroundColor:'#9A14D3'}}>
            <Image source={require('../../assets/francia.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('french')} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {i18n.changeLanguage('de');setOpen(false);setLan(false)} } style={!lan || !open?{display:'none'}:{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5,backgroundColor:'#9A14D3'}}>
            <Image source={require('../../assets/alemania.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('german')} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {i18n.changeLanguage('pt');setOpen(false);setLan(false)} } style={!lan || !open?{display:'none'}:{flexDirection:'row',alignItems:'center',borderBottomColor:'#000',borderStyle:'solid',borderBottomWidth:4,borderRadius:25,padding:5,margin:5,backgroundColor:'#9A14D3'}}>
            <Image source={require('../../assets/portugal.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}} >{t('portugues')} </Text>
        </TouchableOpacity>
        </DrawerContentScrollView>
    )
}