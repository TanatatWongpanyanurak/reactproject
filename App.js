import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const showData=() => {
  alert("Hello")
}
const App = () => {
  return (
    <View style={styles.continue}>
      <Text>Button Example</Text>
      <Button
        title="CLICK ME"
        color='#7DC9D7'
        onPress={showData}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  continue: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})