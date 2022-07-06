import { View, Text ,TextInput,StyleSheet} from 'react-native'
import React from 'react'

const InputText = () => {

  

    const [username,setusername]=useState('')
  return (
    <View style = {{flex: 1, marginTop:20,alignItems:'center'}}>
      <Text>insert any text in below input</Text>
      <TextInput
            value={username}
            onChangeText = {(username)=>{setusername}}
            style = {styles.textinput}
            placeholder= "Plese Input username"
      />
      <Text>{username}</Text>
    </View>
  )
}

export default InputText
const styles = StyleSheet.create({
    textinput:{
         width:250,
         height: 45,
         padding: 10,
         marginTop:20,
         marginBottom:10,
         backgroundColor:"Blue"

      }
  })