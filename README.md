# Weather-App

This mobile app is a simple tutorial for beginner to training in react native, in this tutorial, we will create a simple weather app using in api. 


## Step 1:Create react native project:
   for creating project , open in CLI you use: cmd, powershell or bash for github and tab command line:
    npx react-native init WeatherApp
## Step 2:Create tab bottom navigation:
    Open the project created using vs code or you can use any EDI , then you can start now to enjoy in coding :
    # 1-Setting up:
      for setting up the navigation system in your app, you have to install the api @react-navigation/native:
      
      npm install @react-navigation/native
      and you have to install also other dependencies:
      
      npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
      npm install @react-navigation/bottom-tabs
      
      for more information about this api you can go to:https://reactnavigation.org/docs/getting-started
      
    # 2-Import the librairy:
     
     import { NavigationContainer } from '@react-navigation/native'
     import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
     
    # 3-Create the tab bottom navigator:
         
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
     
## Step 3: Connect to your api for getting data:
## Step 4:Create a list of items:
