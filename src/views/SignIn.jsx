import { View, Text,TextInput ,TouchableOpacity,StyleSheet,Alert} from 'react-native'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../redux/actions/userAction'
import { useTranslation } from 'react-i18next'

export default function SignIn({navigation}) {
    const {t} = useTranslation()
    let dispatch = useDispatch()
    let {signIn} = userActions
    let {logged} = useSelector(store=>store.userReducer)
    let [email,setEmail] = useState([])
    let[pass,setPass] = useState([])
    console.log(logged)
    let dato ={
        email:email,
        password:pass
    }

    let submit = ()=>{
        dispatch(signIn(dato))
         .then(res => {
          if(res.payload.success){
            setEmail('')
            setPass('')
            Alert.alert('succesful')
            navigation.navigate('Home')
          } else{
            Alert.alert('wrong user or password')
          }
         })
         .catch(err => console.log(err))
    }




    return (
    <View style={{backgroundColor:'#f5f5f5',flex:1,padding:10}} >
        <Text style={{fontSize:25,textAlign:'center',fontWeight:'900'}} >{t('sign_in')}</Text>
        <Text style={style.text1} >{t('email')}</Text>
        <TextInput keyboardType='email-address' value={email} onChangeText={item=>setEmail(item)} placeholder={t('user_e')} style={style.input} />
        <Text style={style.text1} >{t('pass')}</Text>
        <TextInput passwordRules={true} secureTextEntry={true} placeholder={t('user_pas')} value={pass} onChangeText={item=>setPass(item)} style={style.input} />
        <TouchableOpacity style={style.buton2} ><Text style={style.textbtn} onPress={submit} >{t('sign_in')}</Text></TouchableOpacity>
        <Text style={style.text2} >{t('have_not_account')}</Text>
        <TouchableOpacity style={style.buton1} ><Text style={style.textbtn} onPress={()=>navigation.navigate(t('sign_up'))} >{t('log_her')}</Text></TouchableOpacity>
    </View>
    )
}

const style = StyleSheet.create({
    text1:{
        fontSize:18,
        padding:5,
        borderBottomWidth:2,
        borderColor:'purple',
        marginBottom:10
    },
    input:{
        borderColor:'#000',
        borderWidth:3,
        padding:10,
        borderRadius:25,
        backgroundColor:'#fff'
    },
    text2:{
        borderBottomColor:'purple',
        borderTopColor:'purple',
        borderBottomWidth:3,
        borderTopWidth:3,
        margin:20,
        padding:10,
        textAlign:'center',
        fontSize:20
    },
    textbtn:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'500',
        color:'#fff'
    },
    buton1:{
        backgroundColor:'purple',
        height:60,
        width:250,
        borderRadius:25,
        alignSelf:'center',
        marginTop:20,
        borderColor:'#aaa',
        borderWidth:3,
        padding:5
    },
    buton2:{
        backgroundColor:'purple',
        width:200,
        height:60,
        borderRadius:25,
        alignSelf:'center',
        marginTop:50,
        borderColor:'#aaa',
        borderWidth:3,
        padding:5,
        marginBottom:10
    }
})