import {View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Image , Alert ,LogBox,ActivityIndicator, ImageBackground} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import userAction from "../redux/actions/userAction";
import { useTranslation } from "react-i18next";
import { getApps, initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uuidv4 } from "@firebase/util";
import { Button } from "react-native-paper";

export default function SignUp({navigation}) {
    let [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [image, setImage] = useState(null)
    const [load,setLoad] = useState(false)
    let [fName, setFName] = useState('')
    let [lName, setLName] = useState('')
    let [email, setEmail] = useState('')
    let [pass, setPass] = useState('')
    let dispatch = useDispatch()
    let {signUp} = userAction
    const {t} = useTranslation()

    const firebaseConfig = {
        apiKey: "AIzaSyDq1DascG1WxTIe9s9Lzef73wXeIwrUb1E",
        authDomain: "photos-app-ticketspasss.firebaseapp.com",
        databaseURL: "https://photos-app-ticketspasss-default-rtdb.firebaseio.com",
        projectId: "photos-app-ticketspasss",
        storageBucket: "photos-app-ticketspasss.appspot.com",
        messagingSenderId: "318770758454",
        appId: "1:318770758454:web:17394e505a19a5c6452997"
    };
    if (!getApps().length) {
        initializeApp(firebaseConfig);
      }
      LogBox.ignoreLogs([`Setting a timer for a long period`]);
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    
    const pickImage = async () => {
        setLoad(true)
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        if (!result.canceled) {
            const uploadUrl = await uploadImageAsync(result.assets[0].uri);
            setImage(uploadUrl)
        }
        setLoad(false)
    }

    async function uploadImageAsync(uri) {
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", uri, true);
          xhr.send(null);
        });
        const fileRef = ref(getStorage(), uuidv4());
        const result = await uploadBytes(fileRef, blob);
        blob.close();
        return await getDownloadURL(fileRef);
      }

    let dato = {
        name:fName,
        lastName:lName,
        birthDate:date,
        photo:image,
        email:email,
        password:pass
    }

    let submit = ()=>{
        dispatch(signUp(dato))
        Alert.alert('success')
        navigation.navigate('Home')
        setDate(new Date())
        setImage(null)
        setFName('')
        setLName('')
        setEmail('')
        setPass('')
    }

    return (
        <ScrollView style={{ backgroundColor: "#f5f5f5", flex: 1, }}>
            <View style={style.signUpContainer}>
                <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "900" }}  >{t('sign_up')}</Text>
                <Text style={style.text1}>{t('name')}</Text>
                <TextInput placeholder={t('user_n')} style={style.input} value={fName} onChangeText={(item)=>setFName(item)} ></TextInput>
                <Text style={style.text1}>{t('Lname')}</Text>
                <TextInput placeholder={t('user_l')} style={style.input} value={lName} onChangeText={item=>setLName(item)} ></TextInput>
                <Text style={style.text1}>{t('birth')}</Text>
                <TouchableOpacity style={style.input} onPress={() => setShow(true)}>
                    <Text style={{textAlign:'center'}}>{date.toLocaleDateString()}</Text>
                </TouchableOpacity>
                {show && <DateTimePicker mode="date" value={date} onChange={onChange} />}
                <Text style={style.text1}>{t('photo')}</Text>
                <Button mode="outlined" onPress={pickImage} style={style.buttonPhoto}>
                    <Text style={{ textAlign: "center" }}>{t('choose')}</Text>
                </Button>
                {load  ? <View style={{backgroundColor: "rgba(0,0,0,0.4)",alignItems: "center",justifyContent: "center",width: 200, height: 200, borderRadius: 25, alignSelf: "center", marginTop: 25 }}>
                    <ActivityIndicator color="#fff" animating size="large" />
                </View>: ''}
                {image  && <Image source={{ uri: image }} style={load ? {display:'none'}:{ width: 200, height: 200, borderRadius: 25, alignSelf: "center", marginTop: 25 }} />}
                <Text style={style.text1}>{t('email')}</Text>
                <TextInput placeholder={t('user_e')} style={style.input} value={email} onChangeText={(item)=>setEmail(item)} />
                <Text style={style.text1}>{t('pass')}</Text>
                <TextInput secureTextEntry={true} style={style.input} placeholder={t('user_pas')} value={pass} onChangeText={(item)=>setPass(item)} />
                <Button mode="contained" style={style.button} onPress={submit} >
                    {t('register')}
                </Button>
            </View>
            <ImageBackground source={require("../../assets/backSign.jpg")} style={style.ImageBackground}>
                <Text style={style.text2}>{t('have_account')}</Text>
                <Button mode="contained" style={[style.button, style.buttonSignIn]} onPress={()=>navigation.navigate('Sign in')} >
                    <Text style={style.blackText}>{t('log_here')}</Text>
                </Button>
            </ImageBackground>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    signUpContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    text1: {
        fontSize: 16,
        padding: 5,
        marginTop: 10,
    },
    input: {
        borderColor:'#c8c8c8',
        borderWidth: 2,
        padding:10,
        paddingHorizontal: 15,
        borderRadius:15,
        backgroundColor:'#fff'
    },
    text2: {
        borderBottomColor: "white",
        borderTopColor: "white",
        borderBottomWidth: 3,
        borderTopWidth: 3,
        margin: 20,
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        color: 'white'
    },
    textbtn: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "500",
        color: "#fff",
    },
    button: {
        width:200,
        borderRadius:25,
        alignSelf:'center',
        marginVertical: 30,
        padding:5,
    },
    buttonPhoto: {
        borderRadius:15,
        paddingVertical: 2,
        paddingHorizontal: 15,  
    },
    ImageBackground: {
        height: 340,
        justifyContent: 'space-around',
        paddingVertical: 20
    },
    buttonSignIn: {
        backgroundColor: 'white'
    },
    blackText: {
        color: 'black'
    }
    
});
