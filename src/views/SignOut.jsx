import { View, Text, Alert } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import userActions from '../redux/actions/userAction'
import { useTranslation } from 'react-i18next'

export default function SignOut({navigation}) {
    const {t} = useTranslation()
    let {token} = useSelector(state => state.userReducer)
    let dispatch = useDispatch()
    let {signOut} = userActions

    useEffect(() => {
        dispatch(signOut(token))
        Alert.alert('Signed Out')
        navigation.navigate(t('home'))
    }, [])

  return (
    <View>
      <Text>SignOut</Text>
    </View>
  )
}