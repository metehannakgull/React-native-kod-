import React, {Component} from "react";
import { Text, View , SafeAreaView, Image,TouchableOpacity} from "react-native";

import {Header2} from "../Headers/Header2"; //Added Header2.js

export class HomeScreenDetail extends Component{
    
    render(){
        let{navigation} = this.props 
        return(
            <SafeAreaView style={{flex:1}}> 
            <Header2 title="HomeDetail" navigation={navigation}/>
              <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                     <Text>Home Details!</Text> 
                     
              </View>
            </SafeAreaView>
           )}
}