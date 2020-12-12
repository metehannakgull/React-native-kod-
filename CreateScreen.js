import React, {Component} from "react";
import { Text, View , SafeAreaView,TouchableOpacity,StyleSheet,ScrollView} from "react-native";

import {Header4} from "../Headers/Header4"; //Added Header1.js
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export class CreateScreen extends Component{
    
  

    render(){
        let{navigation} = this.props 
        return(
            <SafeAreaView style={{flex:1}}> 
            <Header4 navigation={navigation}/>
            <ScrollView 
               showsVerticalScrollIndicator={false}
              >
              <View style={styles.view1}>
                <Text style={styles.text2}>Start by choosing type</Text>
              </View>
               
              <View style={{flexDirection:"row"}}>
               
                <TouchableOpacity 
                     onPress={()=>navigation.navigate('TextPoll')}  
                     style={styles.touchable2}                                       
                   >                  
                    <FontAwesome5 name={'align-right'} size={20} color="#3399FF"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text3}>Text Poll</Text>
                      
                      <Text style={styles.text4}>Create text polls, attach reference image</Text>
                      
                   </TouchableOpacity> 
              </View>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                     onPress={()=>navigation.navigate('ImagePoll')}  
                     style={styles.touchable2}                                       
                   >                  
                    <FontAwesome5 name={'image'} size={20} color="red"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text3}>Image Poll</Text>
                      
                      <Text style={styles.text4}>Create image polls, add up to 6 images</Text>
                      
                   </TouchableOpacity> 
              </View>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                     onPress={()=>navigation.navigate('PrivatePoll')}  
                     style={styles.touchable2}                                       
                   >                  
                    <FontAwesome5 name={'eye-slash'} size={20} color="red"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text3}>Private Poll</Text>
                      
                      <Text style={styles.text4}>Share web or app link with voters</Text>
                      
                   </TouchableOpacity> 
              </View>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                     onPress={()=>navigation.navigate('Survey')}  
                     style={styles.touchable2}                                       
                   >                  
                    <FontAwesome5 name={'poll'} size={20} color="blue"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text3}>Survey</Text>
                      
                      <Text style={styles.text4}>Get answers fast                          </Text>
                      
                   </TouchableOpacity> 
              </View>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                     onPress={()=>navigation.navigate('QuizRoom')}  
                     style={styles.touchable2}                                       
                   >                  
                    <FontAwesome5 name={'hourglass-start'} size={20} color="gray"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text3}>QuizRoom</Text>
                      
                      <Text style={styles.text4}>Create trivia quiz contest                    </Text>
                      
                   </TouchableOpacity> 
              </View>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                     onPress={()=>navigation.navigate('AskQuestion')}  
                     style={styles.touchable2}                                       
                   >                  
                    <FontAwesome5 name={'question-circle'} size={20} color="aqua"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text3}>AskQuestion</Text>
                      
                      <Text style={styles.text4}>Get recommendations from fellow users                    </Text>
                      
                   </TouchableOpacity> 
              </View>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                     onPress={()=>navigation.navigate('ShareInterestingFact')}  
                     style={styles.touchable2}                                       
                   >                  
                    <FontAwesome5 name={'user-friends'} size={20} color="blue"
                       style={styles.fontAwesome}                     
                      />
                      <Text style={styles.text3}>ShareInterestingFact</Text>
                      
                      <Text style={styles.text4}>Share URL links or videos                   </Text>
                      
                   </TouchableOpacity> 
              </View>
               
              </ScrollView>        
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
  touchable2:{
  
    marginLeft:18,
    marginTop:25,
    marginRight:10,
    borderStyle:"solid",
    borderWidth:0.5,
    borderColor:"#DCDCDC",
    height:83,
    borderRadius:50,
    flexDirection:"row",
    flexWrap:"wrap"
 
   },
    
    text: {
      color: 'white'
  },
  text2: {
    fontSize:21,
    marginLeft:25,
    marginTop:10
    
  },
  text3:{
   fontSize:19,
   paddingTop:8,
   paddingLeft:7,
 
   
  },
  text4:{
   opacity:0.5,
   paddingTop:2,
   paddingLeft:45,
   fontSize:16

   
  },
  fontAwesome:{
    marginLeft:18,
    marginTop:12,
  
  },
  view1:{

  },
  view2:{
    
    
  },
 

});
/*
 <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>                  
                     <TouchableOpacity style={styles.touchable}
                     onPress={()=> navigation.navigate("CreateScreenDetail")}>
                 <Text style={styles.text}>Create Details</Text>
              </TouchableOpacity>
              </View> 
*/