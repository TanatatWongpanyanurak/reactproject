import { StyleSheet, Text, View ,TextInput,Button} from 'react-native'
import React, { useState } from 'react'


const UsernamePassword = () => {
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const checkTextInput= () => {
        if(!username.trim()){
            alert('please Enter Name')
           return
        }
        if(!email.trim()){
            alert('please Enter Email')
           return
        }
        alert('Success')
        return
    
    }
  return (
    <View style = {{flex: 1, marginTop:20,alignItems:'center'}}>
        <TextInput
            value={username}
            onChangeText = {(username)=>{setusername(username)}}
            style = {styles.textinput}
            placeholder = "ENTER NAME"
        />
        <TextInput
            value={email}
            onChangeText = {(email)=>{setemail(email)}}
            style = {styles.textinput}
            
            placeholder = "ENTER EMAIL"
        />
        <Button
         title = 'Submit'
         onPress = {checkTextInput}
         
      />
    </View>
  )
}

export default UsernamePassword

const styles = StyleSheet.create({
        textinput:{
             width:'100%',
             height: 40,
             paddingHorizontal: 5,
             marginTop:15,  
             borderWidth: 0.5

    
          }
          
})