import { StyleSheet, Text, View, Button,SafeAreaView } from "react-native";
import React from "react";


    const Separator =() => (
        <View style = {styles.separator}/>
    )

const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.title}>
      <View>
        <Text>
          he title and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone.{" "}
        </Text>
        <Button title="Press me" 
          onPress={()=> alert('Button Bule press ')}
          color={'blue'}
        />
      </View>
      <Separator/>
      <View>
        <Text>
          he title and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone.{" "}
        </Text>
        <Button title="Press me" 
         onPress={()=> alert('Button Pink Press')}
            color={'pink'}
            />
      </View>
      <Separator/>
      <View>
        <Text>
          he title and onPress handler are required.It is recommended to set
          accessigilityLabel to thelp make your app usable by everyone.{" "}
        </Text>
        <Button title="Press me" 
                disabled
            />
      </View>
      <View >
        <Text>
          he title and onPress handler are required.It is recommended to set.{" "}
        </Text>
     <View style = {styles.fixToText}>
        <Button title="Left Button" 
          onPress={() => alert('Left button Pressed')}
            />
            <Button title="Right Button" 
          onPress={() => alert('Right button Pressed')}
            />
            </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", marginHorizontal: 16 },
  title: { textAlign: "center", marginVertical: 8 },
  fixToText: { flexDirection: "row", justifyContent: "space-between" },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
