import { View, Text } from 'react-native'
import React from 'react'
    
    const Fistname = ({fname1,fname2,lname1,lname2}) =>{
            return(
                <View style = {{alignItems : 'center'}}>
                    <text> Your Fistname is {fname1} {fname2}! and Lastname {lname1} {lname2} </text>
                </View>
                
            )

    }

const MyCustomTextWith = () => {
  return (
    <View style = {{alignItems : 'center',top:400}}>
      <Fistname fname1={"Tanatat"} lname1 ={"Wongpunayanurak"}/>
      <Fistname fname2={"Boonyanucth"} lname2 ={"Onkling"}/>
    </View>
  )
}

export default MyCustomTextWith