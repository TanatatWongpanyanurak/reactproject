import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import UsernameandPassword from './components/UsernameandPassword'
import UsernamePassword from './components/UsernamePassword'
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/Touchable_Example'

const App = () => {
  return (
    <View style ={styles.container}>
      {/* <Logo/> */}
      {/* <User/> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
        {/* <InputText/> */}
        {/* <UsernameandPassword/> */}
        {/* <UsernamePassword/> */}
        {/* <AlertComponent/> */}
        {/* <ImageWithTextInput/> */}
        {/* <ButtonExample/> */}
        <Touchable_Example/>
   </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {flex: 1,
      alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ecf0f1',},

})
