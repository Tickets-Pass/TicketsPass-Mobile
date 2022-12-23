import { View, Text,TextInput ,StyleSheet,Alert, ImageBackground} from 'react-native'
import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import userActions from '../redux/actions/userAction'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-paper'

export default function SignIn({navigation}) {
    const {t} = useTranslation()
    let dispatch = useDispatch()
    let {signIn} = userActions
    let [email,setEmail] = useState([])
    let[pass,setPass] = useState([])
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
            Alert.alert(res.payload.message)
            navigation.navigate('TicketsPass')
          } else{
            if(Array.isArray(res.payload.response)){
                let text = res.payload.response.join('\n')
                Alert.alert(text)
            } else{
                Alert.alert(res.payload.response[0])
            }
          }
         })
         .catch(err => Alert.alert(err.message))
    }

    return (
    <View style={{backgroundColor:'#f5f5f5',flex:1}} >
        <View style={style.signInContainer}>
            <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold'}} >{t('sign_in')}</Text>
            <Text style={style.text1} >{t('email')}</Text>
            <TextInput keyboardType='email-address' value={email} onChangeText={item=>setEmail(item)} placeholder={t('user_e')} style={style.input} />
            <Text style={style.text1} >{t('pass')}</Text>
            <TextInput passwordRules={true} secureTextEntry={true} placeholder={t('user_pas')} value={pass} onChangeText={item=>setPass(item)} style={style.input} />
            <Button style={style.button} mode="contained" onPress={submit}>{t('sign_in')}</Button>
        </View>
        <View style={{flex: 1}}>
        <ImageBackground source={require("../../assets/backSign.jpg")} style={style.ImageBackground}>
            <Text style={style.text2} >{t('have_not_account')}</Text>
            <Button style={[style.button, style.buttonSignUp]} onPress={()=>navigation.navigate('Sign up')} mode="contained" ><Text style={style.blackText}>{t('log_her')}</Text></Button>
        </ImageBackground>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    signInContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    text1:{
        fontSize:16,
        padding:5,
        marginTop:10
    },
    input:{
        borderColor:'#c8c8c8',
        borderWidth: 2,
        padding:10,
        paddingHorizontal: 15,
        borderRadius:15,
        backgroundColor:'#fff'
    },
    text2:{
        borderBottomColor:'white',
        borderTopColor:'white',
        borderBottomWidth:3,
        borderTopWidth:3,
        margin:20,
        padding:10,
        textAlign:'center',
        fontSize:20,
        color: 'white',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 50
    },
    button:{
        width:200,
        borderRadius:25,
        alignSelf:'center',
        marginVertical: 30,
        padding:5,
    },
    buttonSignUp: {
        backgroundColor: 'white',
        marginBottom: 80
    },
    ImageBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        justifyContent: 'flex-end',
        resizeMode: 'cover'
    },
    blackText: {
        color: 'black'
    }
})