import React,{useState} from 'react'
import {TextInput,View,StyleSheet,Button,TouchableOpacity} from 'react-native'
import List  from './List';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Search extends React.Component{
  static navigationOptions={
      title:"Rechercher une ville"
  }
    constructor(props)
    {
        super(props)
        this.state={
            city:'Search City',
           
        }
    }
    setText(text)
    {
      this.setState({city:text})
    }
    submit()
    {
        this.props.navigation.navigate('result');
    }
    render()
    {
        const {navigate}=this.props.navigation;
        return(
            <View style={style.container}>
             <View style={style.containerInputText}>
                <TextInput style={style.search}
                  underlineColorAndroid="transparent"
                  value={this.state.city}
                
                  onChangeText={(text)=>this.setText(text)}
                 
                 />
                  <TouchableOpacity
                        style={style.button}
                      
                    >
                    <Ionicons  name='search'  size={50} style={{borderLeftColor:"white",borderLeftWidth:1}}  color={'white'}/>
                                        
                    </TouchableOpacity>
          
                         
               
           
            </View>
              <View  style={style.listcontainer}>
                              <List ></List>
               </View> 
            
            </View>
           
        )
            


        
    }
}
const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column"
    },
    listcontainer:{
        flex:8
    },
    containerInputText:{
         backgroundColor:"#086972",
         flex:1,
         flexDirection:"row",   
    },
    search:{
        fontSize:30,
        flex:2,
        color:"white",
        textAlign:"center",
        marginBottom:20,
        height:60,
        borderBottomColor:"white",
        borderBottomWidth:1,
        opacity:0.7
    },
    button:{
      flex:1,
      width:40,
      fontWeight:"bold"
    }
})
