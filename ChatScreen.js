import React, {Component} from "react";
import { Text, View , SafeAreaView, Image,TouchableOpacity,StyleSheet} from "react-native";


import {Header3} from "../Headers/Header3"; //Added Header1.js
import {SearchBaR} from "./SearchBar";

export class ChatScreen extends Component{
    
    render(){
        let{navigation} = this.props 
        return(
            <SafeAreaView style={{flex:1}}> 
            <Header3 title= "Chats"/> 
            <SearchBaR/>
            
                   
            </SafeAreaView>
           )}
}
const styles = StyleSheet.create({ //styles
  
  touchable: {
    width:250,
    height: 50,
    backgroundColor: 'blue',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
},
  
  text: {
    color: 'white'
},
 
});
/*
  <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                     <Text>Chat!</Text> 
                     <TouchableOpacity style={styles.touchable}
                     onPress={()=> navigation.navigate("ChatScreenDetail")}>
                 <Text style={styles.text}>Chat Detail</Text>
              </TouchableOpacity>
              </View> */ 