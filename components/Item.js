import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import moment from 'moment'
import Ionicons from 'react-native-vector-icons/Ionicons';

//import 'moment/locale/fr'
//moment.locale("fr")
export default class Item extends React.Component
{

    constructor(props)
    {
        super(props)
      
    }
    getIcon(type)
    {
        console.log(type)
        switch(type)
        {
            case 'Clouds':
                return 'cloudy';
            break;
            case 'rain':
                return 'rainy';
            break;
            case 'Clear':
                return 'sunny';
            break;
        }
    }
    render()
    {
      
        let dayOfWeek=moment(this.props.day*1000).format('ddd')
        let day=moment(this.props.day*1000).format('DD/MM')
        let temp=parseInt(this.props.text)
        let icon=this.props.icon
       
            if(this.props.index==0)
            {
                return( 
                    <View style={style.firstViewContainer}>
                      <View style={style.firstViewSecondContainer}>
                      <View style={style.firstdate}>
                            <Text style={style.firstdayString}>{dayOfWeek.toUpperCase()}, </Text>
                            <Text style={style.firstday}>{day}</Text>
                        </View>
                          <Ionicons name={this.getIcon(icon)} style={{flex:5,marginLeft:10}} size={80}  color={'white'}/>
                         
                      </View>
                     
                      
                          <Text style={style.firstViewTemp}>{temp} °C</Text>
                      </View>
               )
            }
            else{
                return( 
                          <View style={style.container}>
                            <Ionicons name={this.getIcon(icon)} style={{flex:1,marginLeft:10}} size={40}  color={'white'}/>
                                <View style={style.date}>

                                    <Text style={style.dayString}>{dayOfWeek.toUpperCase()}, </Text>
                                    <Text style={style.day}>{day}</Text>
                                </View>
                            
                                <Text style={style.temp}>{temp} °C</Text>
                            </View>
                     )
            }
                
        
    }
}
const style=StyleSheet.create({
    firstViewContainer:{
        flex:1,
        flexDirection:"row",
        height:150,
        backgroundColor:"#086972",
        borderBottomColor:'#086972',
        borderBottomWidth:1,
        alignItems:"center"
    },
    firstViewSecondContainer:{
        flex:2,
        flexDirection:"column",
    },
    container:{
        flex:1,
        flexDirection:"row",
        height:70,
        backgroundColor:"#17b978",
        borderBottomColor:'#086972',
        borderBottomWidth:1,
        alignItems:"center"
    },
    firstdate:{ 
        flex:1,
        flexDirection:'row',
        textAlign:"center"
     },
    date:{ 
       flex:2,
       flexDirection:'row'
    },
    dayString:{
        color:'#071a52',
        fontSize:19,
        fontWeight:"bold"
    },
    day:{
        color:'white',
        fontSize:17,
        fontWeight:"bold"
       
    },
    firstdayString:{
        color:'#071a52',
        fontSize:20,
        fontWeight:"bold",
        marginLeft:5
    },
    firstday:{
        color:'white',
        fontSize:18,
        fontWeight:"bold"
    },
    temp:{
        fontSize:25,
        color:'white',
        fontWeight:"bold",
        marginRight:5

    },
    firstViewTemp:{
        fontSize:60,
        color:'white',
        fontWeight:"bold",
        marginRight:5

    }

})