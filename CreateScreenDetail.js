import React, {Component} from "react";
import { Text, View , SafeAreaView, Image,TouchableOpacity} from "react-native";

import {Header2} from "../Headers/Header2"; //Added Header2.js

export class CreateScreenDetail extends Component{
    
    render(){
        let{navigation} = this.props 
        return(
            <SafeAreaView style={{flex:1}}> 
            <Header2 title= "CreateDetail" navigation={navigation}/>
              <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                     <Text>Create Details!</Text> 
              </View>       
            </SafeAreaView>
           )}
}
