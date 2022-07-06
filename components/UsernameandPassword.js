import { StyleSheet, Text, View ,TextInput,Button} from 'react-native'
import React, { useState } from 'react'

const UsernameandPassword = () => {

    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
  return (
    <View style = {{flex: 1, marginTop:20,alignItems:'center'}}>
        <TextInput
            value={username}
            onChangeText = {(username)=>{setusername(username)}}
            style = {styles.textinput}
            placeholder = "Email"
        />
        <TextInput
            value={password}
            onChangeText = {(password)=>{setpassword(password)}}
            style = {styles.textinput}
            
            placeholder = "Password"
        />
        <Button
         title = 'Submit'
         onPress={()=>alert('email : '+username+'\npassword :  '+password)}
      />
    </View>
  )
}

export default UsernameandPassword

const styles = StyleSheet.create({
        textinput:{
             width:250,
             height: 45,
             padding: 10,
             marginTop:20,
             marginBottom:10,
             borderColor: '#00D0DA',
             borderWidth: 3

    
          }
          
})