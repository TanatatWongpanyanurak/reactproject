import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Stysheet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
    </View>
  )
}

export default Stysheet

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#7DC9D7"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#43CD88",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });