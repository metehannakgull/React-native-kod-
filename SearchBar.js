import React, {Component} from "react";
import { TextInput, View ,StyleSheet,Dimensions} from "react-native";

const {width: WIDTH} = Dimensions.get('window');
import {SearchBar} from "react-native-elements"

export class SearchBaR extends Component{
        
  
    render(){
         
        return(
           
        
           <View
          style={styles.container}>
            <TextInput style={styles.searchInput}
            placeholder="Search groups...">
   
            </TextInput>
       </View>
                           
           )}
}
 
 const styles = StyleSheet.create({
     container:{
         width:WIDTH-50,
         height:40,
         backgroundColor: "white",
         marginTop:20,
         marginLeft:23,
         borderRadius:50,
         backgroundColor: "#e9e9e9",
        
           
         
     },
     searchInput:{
         width:"100%",
         height:"100%",
         paddingLeft:8,
         fontSize:18,
         paddingTop:10,         
     },
    
 })

 