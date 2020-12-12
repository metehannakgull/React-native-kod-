import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image  
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import { SafeAreaView } from 'react-native-safe-area-context';
import{createStackNavigator} from '@react-navigation/stack' ;
//import {TouchableOpacity} from 'react-native-gesture-handler'

import { IMAGE } from '../icon/icon'; //Added Tab bar icons


import {HomeScreen, HomeScreenDetail} from "./HomeScreen"; //Added HomeScreen.js and HomeScreenDetail.js
import {ChatScreen,ChatScreenDetail} from "./ChatScreen"; //Added ChatScreen.js and CharScreenDetail.js
import {GroupScreen,GroupScreenDetail} from "./GroupScreen";//Added ProfileScreen.js and ProfileScreenDetail.js
import {CreateScreen,CreateScreenDetail} from "./CreateScreen";//Added CreateScreen.js and CreateScreenDetail.js
 

 
 import {ArchiveScreen} from "./HomeScreen/pages/ArchiveScreen"
 import {PrivateScreen} from "./HomeScreen/pages/PrivateScreen"
 import {QuizScreen} from "./HomeScreen/pages/QuizScreen"
 import {SurveysScreen} from "./HomeScreen/pages/SurveysScreen"
 import {VoteScreen} from "./HomeScreen/pages/VoteScreen"

 import {TextPoll} from "./CreateScreen/pages/TextPoll"
 import {ImagePoll} from "./CreateScreen/pages/ImagePoll"
 import {PrivatePoll} from "./CreateScreen/pages/PrivatePoll"
 import {Survey} from "./CreateScreen/pages/Survey"
 import {QuizRoom} from "./CreateScreen/pages/QuizRoom"
 import {AskQuestion} from "./CreateScreen/pages/AskQuestion"
 import {ShareInterestingFact} from "./CreateScreen/pages/ShareInterestingFact"

import {SelectStandardOption} from "./CreateScreen/pages/pages/SelectStandardOption";


 import {MyGroups} from "./GroupScreen/pages/MyGroups"
 import {Art} from "./GroupScreen/pages/Art"
 import {Education} from "./GroupScreen/pages/Education"
 import {Entertainment} from "./GroupScreen/pages/Entertainment"
 import {Political} from "./GroupScreen/pages/Political"
 import {Lifestyle} from "./GroupScreen/pages/Lifestyle"
 import {Social} from "./GroupScreen/pages/Social"
 import {Sports} from "./GroupScreen/pages/Sports"
 import {Technology} from "./GroupScreen/pages/Technology"
 import {Travel} from "./GroupScreen/pages/Travel"
 import {Issues} from "./GroupScreen/pages/Issues"
 
const Tab = createBottomTabNavigator();// Tab.navigator and Tab.Screen used
const Stack= createStackNavigator(); // Stack.Navigator and Stack.Screen used

const navigationOptionHandler = ()=>({ // Removed header 
  headerShown : false                  // Because I created Header1.js and Header2.js
})

function HomeStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="HomeScreenDetail" component={HomeScreenDetail} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="CreateScreen" component={CreateScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="VoteScreen" component={VoteScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="PrivateScreen" component={PrivateScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="ArchiveScreen" component={ArchiveScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="SurveysScreen" component={SurveysScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="QuizScreen" component={QuizScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="TextPoll" component={TextPoll} options={navigationOptionHandler}></Stack.Screen>   
      <Stack.Screen name="ImagePoll" component={ImagePoll} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="PrivatePoll" component={PrivatePoll} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Survey" component={Survey} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="QuizRoom" component={QuizRoom} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="AskQuestion" component={AskQuestion} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="ShareInterestingFact" component={ShareInterestingFact} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="SelectStandardOption" component={SelectStandardOption} options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

function ChatStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="ChatScreenDetail" component={ChatScreenDetail} options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

function GroupStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="GroupScreen" component={GroupScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="GroupScreenDetail" component={GroupScreenDetail} options={navigationOptionHandler}></Stack.Screen> 
      <Stack.Screen name="MyGroups" component={MyGroups} options={navigationOptionHandler}></Stack.Screen>  
      <Stack.Screen name="Art" component={Art} options={navigationOptionHandler}></Stack.Screen> 
      <Stack.Screen name="Education" component={Education} options={navigationOptionHandler}></Stack.Screen> 
      <Stack.Screen name="Entertainment" component={Entertainment} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Political" component={Political} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Lifestyle" component={Lifestyle} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Social" component={Social} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Sports" component={Sports} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Technology" component={Technology} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Travel" component={Travel} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Issues" component={Issues} options={navigationOptionHandler}></Stack.Screen>
      
    </Stack.Navigator>
  )
}
function CreateStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="CreateScreen" component={CreateScreen} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="CreateScreenDetail" component={CreateScreenDetail} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="TextPoll" component={TextPoll} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="ImagePoll" component={ImagePoll} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="PrivatePoll" component={PrivatePoll} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Survey" component={Survey} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="QuizRoom" component={QuizRoom} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="AskQuestion" component={AskQuestion} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="ShareInterestingFact" component={ShareInterestingFact} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="SelectStandardOption" component={SelectStandardOption} options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}
export default function TabBar (){
    //HomeStack, ProfileStack, CreateStack and ChatStack were run.
    //Because i have to go to Screen and ScreenDetail pages
        return(
            <NavigationContainer> 
            <Tab.Navigator 
             screenOptions = {({route}) => ({
              tabBarIcon : ({focused, color ,size}) => {
                
                let IconName

                 if(route.name == "Home")  //changed icons
                 {
                   IconName =focused
                   ? IMAGE.ICON_HOMEPAGE2
                   : IMAGE.ICON_HOMEPAGE1
                 }
                 else if(route.name == "Chat"){//changed icons
                     IconName = focused
                  ? IMAGE.ICON_CHAT2
                   : IMAGE.ICON_CHAT1
                 }
                 else if (route.name == "Group"){//changed icons
                  IconName = focused
                  ? IMAGE.ICON_PROFILE2
                   : IMAGE.ICON_PROFILE1
                 }
                 else if ( route.name =="Create"){//changed icons
                  IconName = focused
                  ? IMAGE.ICON_CREATE2
                   : IMAGE.ICON_CREATE1
                 }
                 return <Image source={IconName}  style ={{width:20, height:20}}/>
              }
            })}
            tabBarOptions= {{
              activeTintColor: "orange",
              inactiveTintColor: "black"
            }}> 
            <Tab.Screen name="Home" component={HomeStack}/>
            <Tab.Screen name="Group" component={GroupStack}/>
            <Tab.Screen name ="Create" component = {CreateStack}/>
            <Tab.Screen name="Chat" component={ChatStack}/>
                       
            </Tab.Navigator>
            </NavigationContainer>
        )
    
}
/*
const styles = StyleSheet.create({ //styles
    container: {
      flex: 1,  
      alignItems: 'center',
      justifyContent: 'center', 
      margin: 30,
      marginTop:150,
      marginBottom: 130,
      
  },
    
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
   
});*/