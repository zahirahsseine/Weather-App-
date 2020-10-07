import React from 'react'
import {FlatList,View,ActivityIndicator, Text,SafeAreaView}  from 'react-native'
import Item from './Item'
import GetLocation from 'react-native-get-location'


  
export default class List extends React.Component
{
  

    constructor(props)
    {
        
        super(props)
        this.state={
            report:null
        }
      
    }
    async componentDidMount()
    {
        console.log("start componentWillUnmount")
        await  GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
      })
      .then(location => {
        console.log(location)
         this.fetchWeatherData(location.latitude,location.longitude)
      })
      .catch(error => {
          const { code, message } = error;
          console.warn(code, message);
      })
        
        console.log("end componentWillUnmount")
    }
     fetchWeatherData(lat,lng)
    {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lng+"&units=metric&dt=1601892480&appid=45fab4e7ad31982d297b7bee33839c8d")
        .then((response) => response.json())
        .then((json) => {
            
            this.setState({
                report:json
            })
     
        })
        .catch(err => {
            console.log(err);
        });
    }
    render()
    {
        if(this.state.report===null)
        {
               return (    <ActivityIndicator size="large" color="tomato" />)
        }
        else{
           console.log(this.state.report)
            return(
                <SafeAreaView>
                <FlatList
                  data={this.state.report.daily}
                  renderItem={({ item, index, separators }) =><Item index={index} key={index} icon={item.weather[0].main} day={item.dt} text={item.temp.day}  />}
                  keyExtractor={(renderData)=>{renderData.dt}}
                />
              </SafeAreaView>
            )
        }
       
    }
}