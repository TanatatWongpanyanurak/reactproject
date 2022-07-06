import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({name,date})=>{
    return(
        <View style ={{alignItems:'center'}}>
                <text>Hello{name}{date} </text>  
        </View>
    )
}

const LotsOfGreetings = () => {
  return (
    <View style = {{alignItems:'center',top:50}}>
        <Greeting name = 'Marry Christmas'  date ='25/12/22'/>
        <Greeting name = 'Happy New Year  ' date =' 1/1/23'/>
        <Greeting name = 'Songkarn Festival'  date ='13-14/4/23'/>
    </View>
  )
}

export default LotsOfGreetings