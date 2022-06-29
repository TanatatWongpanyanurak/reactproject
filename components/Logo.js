import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  const textLogo ="Thai-Nichi"
  const isTH = false
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>
      {
        // isTH && <Text>ภาษาไทย</Text>
      }
      {/* {Use if/else or conditional operatop} */}
      {
        isTH
        ?(<Text>ภาษาไทย</Text>)
        :(<Text>English</Text>)
      }
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{
        color:"yellow",
        fontSize:60
    }
})