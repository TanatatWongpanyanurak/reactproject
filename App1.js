import { StyleSheet, Text, View, Button} from "react-native";
import React from "react";
import Logo from "./components/Logo";
import Stysheet from "./components/Stysheet";
import TextInputExample from "./components/TextInputExample";
import Cat from "./components/Cat";
import Cafe from "./components/Cafe";
const App = () => {
  const showData=() => {
    alert("Hello Button")
  }

  return (
    <View>
      <Text style={[styles.title,styles.warning]}>HELLO React Native </Text>
      <Logo />
      <Button
        onPress={showData}
        title="Click Me"
      />
      {/* <Stysheet/> */}
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 20,
  },
  warning: {
    color: 'red'
  }

});