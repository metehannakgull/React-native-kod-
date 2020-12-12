import React, {Component} from "react";
import { Text, View , SafeAreaView, Image,TouchableOpacity,StyleSheet} from "react-native";


export class Header3 extends Component{
    
       
    render(){
        let{title} = this.props //title parametremi props olarak attım
       
        return(
            <View style={styles.header} > 
              <View>
                  <Text style={styles.headerText}>{title}</Text>
              </View>
           </View>
           
           )}
}

const styles= StyleSheet.create({
    header:{
    width:"100%",
    height:60,
    flexDirection:"row"
    },
    headerText:{
       color:"black",
       fontSize:33,
       marginTop:25,
       marginLeft:18,
       fontWeight:"bold"
      
    }
})