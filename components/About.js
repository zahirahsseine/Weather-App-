import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class About extends React.Component{
    render()
    {
        return(
            <View>
                <Text style={style.title}>Weather App</Text>
                <Text>This App is for getting the weather of your current location.
                    It's just simple tutorial for getting the basic of react native like setting navigation and fetching
                    data, i hope this will help you , you can get source code from github.
                </Text>
            </View>
        )
            


        
    }
}
const style=StyleSheet.create({
    title:{
        fontSize:22,
        marginBottom:20,
        textAlign:"center"
    }
})
