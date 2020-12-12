import React, {Component} from "react";
import { Text,
    View,
    SafeAreaView,
    TouchableOpacity,  
    StyleSheet,   
      } from "react-native";
  
import {Header1} from "../Headers/Header1"; //Added Header1.js
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export class HomeScreen extends Component{
    
    render(){
        let{navigation} = this.props 
        return(
          
            <SafeAreaView style={{flex:1}}>             
            <Header1 title="Welcome"/>
             <View> 
                <View style={styles._1}>
                   <Text style={styles.text}>Poll of the week</Text>
                </View>
                <View style={styles._2}>

                </View>
                <View style={{flexDirection:"row"}}>              
                 
                   <TouchableOpacity 
                     onPress={()=>navigation.navigate('CreateScreen')}  
                     style={styles.touchable1} 
                                       
                   > 
                     <FontAwesome5 name={'pencil-alt'} size={40} color="#990000"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text2}>Create</Text>
                   </TouchableOpacity> 
                   
                   <TouchableOpacity                     
                     style={styles.touchable1} 
                     onPress={()=>navigation.navigate('VoteScreen')}                    
                   > 
                     <FontAwesome5 name={'vote-yea'} size={40} color="#663399"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text3}>Vote</Text>
                   </TouchableOpacity> 
                   
                   <TouchableOpacity                     
                     style={styles.touchable1} 
                     onPress={()=>navigation.navigate('PrivateScreen')}                      
                   > 
                     <FontAwesome5 name={'user-lock'} size={40}  color="#666699"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text2}>Private</Text>
                   </TouchableOpacity>
                   <TouchableOpacity                     
                     style={styles.touchable1} 
                     onPress={()=>navigation.navigate('ArchiveScreen')}                     
                   > 
                     <FontAwesome5 name={'folder'} size={40} color="#663333" 
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text2}>Archive</Text>
                   </TouchableOpacity> 
                                  
                </View> 
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity                     
                     style={styles.touchable1} 
                     onPress={()=>navigation.navigate('SurveysScreen')}                    
                   > 
                     <FontAwesome5 name={'poll-h'} size={40} color="#336666"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text4}>Surveys</Text>
                   </TouchableOpacity> 
                   <TouchableOpacity                     
                     style={styles.touchable1} 
                     onPress={()=>navigation.navigate('QuizScreen')}                     
                   > 
                     <FontAwesome5 name={'stopwatch'} size={40}  color="#336699"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text2}>Quiz</Text>
                   </TouchableOpacity>
                </View>
               
            </View>
             
              
            </SafeAreaView>
          
           )}
}
  

const styles = StyleSheet.create({ //styles
  
  touchable1:{
    width:65,
    height:69,
    marginLeft:16,
     marginTop:25,
  },
  
  
  text: {
    color: 'white'
},
 _1:{
  flexDirection:"row",
  paddingLeft:8,
  alignItems:'center',
  height:60,
  backgroundColor:'#FF6666',
  marginTop: 10,
  marginLeft:15,
  marginRight:15,
  borderTopStartRadius:10,
  borderTopEndRadius:10,

 },
 _2:{
  flexDirection:"row",
  justifyContent:'center',
  alignItems:'center',
  height:160,
  backgroundColor:'#FF8080',
  marginLeft:15,
  marginRight:15,
  borderBottomStartRadius:10,
  borderBottomEndRadius:10,
  
  
 },
 fontAwesome:{
   marginLeft:13,
   marginTop:5, 
 },
  
 text2:{
   marginLeft:15,
   width:50,
   opacity:0.6 
 },
   
 text3:{
  marginLeft:20,
  width:50,
  opacity:0.6 
},
text4:{
  marginLeft:10,
  width:50,
  opacity:0.6 
}

});
/*
 <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                     
                     <TouchableOpacity style={styles.touchable}  
                     onPress={()=> navigation.navigate('HomeScreenDetail')}>
                                         
                     <Text style={styles.text}>Home Detail</Text>
                  </TouchableOpacity>
              </View> 
              
              touchable: {
    width:250,
    height: 50,
    backgroundColor: 'blue',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
},
*/