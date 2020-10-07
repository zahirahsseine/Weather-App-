# Weather-App

This mobile app is a simple tutorial for beginner to training in react native, in this tutorial, we will create a simple weather app using in api. 


## Step 1:Create react native project:
   for creating project , open any CLI you use: cmd, powershell or bash for github and tab command line:
   
    npx react-native init WeatherApp
    
## Step 2:Create pages:
   We will create some pages needed:
   
     # First page named "About.js":
  
     this page will contained small descrition of app.
     
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


     
    # Second Page name :"List.js"
     this page will listing the weather of 7 days. We will setup the list in next steps
     
## Step 3:Create tab bottom navigation:

  Open the project created using vs code or you can use any EDI , then you can start now to enjoy in coding :
  
  ### 1-Setting up:
  
   for setting up the navigation system in your app, you have to install the api @react-navigation/native:
      
      npm install @react-navigation/native
      and you have to install also other dependencies:
      
      npm install react-native-reanimated react-native-gesture-handler react-native-screens 
      react-native-safe-area-context @react-native-community/masked-view
      npm install @react-navigation/bottom-tabs
      
   for more information about this api you can go to:https://reactnavigation.org/docs/getting-started
      
  ### 2-Import the librairy:
     
     import { NavigationContainer } from '@react-navigation/native'
     import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
     
  ### 3-Create the tab bottom navigator:
         
   -Create constant: const Tab = createBottomTabNavigator();
   -Configure Tab:
   
       <NavigationContainer>
                     <Tab.Navigator
                      screenOptions={({ route }) => ({
                       tabBarIcon: ({ focused, color, size }) => {
                         let iconName;
                         if (route.name === 'Home') {

                         iconName='home'
                         }
                         else{
                           console.log(route.name)
                           iconName='help-circle'
                         }
                         // You can return any component that you like here!
                         return <Ionicons name={iconName} size={size} color={color} />;
                       },
                     })}
                     tabBarOptions={{
                       activeTintColor: 'white',
                       inactiveTintColor: 'white',
                       pressColor:"white",
                       indicatorStyle:{
                                  height:2,
                                  backgroundColor:'white'
                       },
                       style:{
                         backgroundColor:'#071a52'
                       }

                     }}
                     >
                       <Tab.Screen name="Home"
                                   component={List}
                                  />
                       <Tab.Screen name="About" component={About} />
                     </Tab.Navigator>
                   </NavigationContainer>
     
## Step 4: Connect to your api for getting data:

   Now, it's time to connect to api for retreiving data, we using for that https://openweathermap.org/ , we have using the free plan, this plan offer the possibilty to get data by position so for using the name of city, you have to switch to another plan. For getting a current position of user , we will use install librairy:
       
   ### Get Location:
   
   1- Install react-native-get-location:
   
                npm install react-native-get-location
                
   2- import librairy:
   
               import GetLocation from 'react-native-get-location'
               
   3- Now, we can get position :
           
              await  GetLocation.getCurrentPosition({
                   enableHighAccuracy: true,
                   timeout: 15000,
               })
               .then(location => {
                 console.log(location)
                  
               })
               .catch(error => {
                   const { code, message } = error;
                   console.warn(code, message);
               })
   ### Get Weather:
   1- First, Subscribe in free plan of the api https://openweathermap.org/ ,then get you key.
   
   2- Fetch data you have more choices to do that , we will  use fetch for our example, we have create a function that's required two 
           parameters(latitue,longitude):
           
            fetchWeatherData(lat,lng)
             {
                 fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lng+"&units=metric&dt=1601892480&appid=YourKey")
                 .then((response) => response.json())
                 .then((json) => {

                     console.log(json);

                 })
                 .catch(err => {
                     console.log(err);
                 });
             }
          
                 
        
## Step 5:Create a list of items:

  Finaly, After retreiving data, you have to settup our list :
       
   -Create component item, it has three props: degree value, date and icon that illustrate the state of the weather, this is the code:
       
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
         
   -Now, we can setting the list:
         
                <FlatList
                  data={this.state.report.daily}
                  renderItem={({ item, index, separators }) =><Item index={index} key={index} icon={item.weather[0].main} day={item.dt} text={item.temp.day}  />}
                  keyExtractor={(renderData)=>{renderData.dt}}
                />
                
  ### This is the final result of app :)
  
   <image  src="https://github.com/zahirahsseine/Weather-App-/blob/main/Screenshot_2020-10-07-16-01-31.png"></image>
   You can get the code :https://github.com/zahirahsseine/Weather-App-/tree/master
   I hope this can help you, please if you have any recommendation give me your feedback.
