import { StyleSheet, Text, View,Button,Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {

        const simpleAlertHanler = ()=>{
            alert('Hello I am Simple Alert from Javascrip')
        }
        const twoOpionAlertHanler = ()=>{
            Alert.alert(
                'Hello',
                'I am two option alert from React Native',
                [
                    {
                        text:'Yes',
                        onPress: ()=> console.log('Yes Preesed')
                    },
                    {
                        text:'No',
                        onPress: ()=> alert('No Preesed'),
                        style:'cancel'
                    }
                ],
                {cancelable:false}
            );
        }

  return (
    <View style ={styles.container}>
        <Button
            titel='Simple Alert'
            onPress={simpleAlertHanler}
        />
        <Button
            titel='Alert With Two options'
            onPress={twoOpionAlertHanler}
            />
    </View>
  )
}

export default AlertComponent

const styles = StyleSheet.create({

    container: {flex: 1,
        alignItems: 'center',
    justifyContent: 'center',
    }
})