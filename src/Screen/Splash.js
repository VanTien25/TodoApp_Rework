import { Image, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000)
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
      <Image source={require('../Images/Memorize.png')}  style={{ width: 500, height: 500, resizeMode: 'contain'}}/>
    </View>
  )
}

export default Splash