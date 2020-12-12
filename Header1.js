import React, {Component} from "react";
import { Text, View , SafeAreaView, Image,TouchableOpacity} from "react-native";



export class Header1 extends Component{
    
    render(){
        let{title} = this.props //title parametremi props olarak attım
        return(
            <View style={{flexDirection:"row",justifyContent:'center', alignItems:'center'
            ,height:60}}>
                   <Text style={{fontSize:20, textAlign: 'center'}}>{title}</Text> 
              </View>
        
           )}
}
