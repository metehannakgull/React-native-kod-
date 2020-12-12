import React, {Component} from "react";
import { Text, View , SafeAreaView, Image,TouchableOpacity,StyleSheet,ScrollView} from "react-native";

import {Header5} from "../Headers/Header5"; //Added Header1.js
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export class GroupScreen extends Component{
    
    render(){
        let{navigation} = this.props 
        return(
            <SafeAreaView style={{flex:1}}> 
      <Header5 title= "Groups"/>
      <View>
        <Text style={styles.text2}>My Groups</Text>
        <TouchableOpacity
          onPress={()=>navigation.navigate('MyGroups')}  
                     style={styles.touchable2}
        > 
        <FontAwesome5 name={'plus'} size={30} 
                       style={styles.fontAwesome}                     
                      />
      </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text3}>Categories</Text>
         <ScrollView 
         horizontal={true}
         showsHorizontalScrollIndicator={false} 
         
         > 
         <View style={{flexDirection:"row"}}>
         <TouchableOpacity
          onPress={()=>navigation.navigate('Art')}  
                     style={styles.touchable3}
        > 
            <Image
            style={styles.image}
            source={require("../../../images/art.png")}
            />
            <Text style={styles.text4}>Art</Text>
            </TouchableOpacity>

            <TouchableOpacity
          onPress={()=>navigation.navigate('Education')}  
                     style={styles.touchable3}
            > 
            <Image
            style={styles.image2}
            source={require("../../../images/education.png")}
            />
            <Text style={styles.text5}>Education</Text>
            </TouchableOpacity>

            <TouchableOpacity
          onPress={()=>navigation.navigate('Entertainment')}  
                     style={styles.touchable3}
            > 
            <Image
            style={styles.image2}
            source={require("../../../images/entertainment.png")}
            />
            <Text style={styles.text6}>Entertainment</Text>
            </TouchableOpacity>

            <TouchableOpacity
          onPress={()=>navigation.navigate('Political')}  
                     style={styles.touchable3}
            > 
            <Image
            style={styles.image2}
            source={require("../../../images/political.png")}
            />
            <Text style={styles.text5}>Political</Text>
            </TouchableOpacity>
           
            <TouchableOpacity
          onPress={()=>navigation.navigate('Lifestyle')}  
                     style={styles.touchable3}
            > 
            <Image
            style={styles.image2}
            source={require("../../../images/lifestyle.png")}
            />
            <Text style={styles.text5}>Lifestyle</Text>
            </TouchableOpacity>

            <TouchableOpacity
          onPress={()=>navigation.navigate('Social')}  
                     style={styles.touchable3}
            > 
            <Image
            style={styles.image2}
            source={require("../../../images/social.png")}
            />
            <Text style={styles.text5}>Social</Text>
            </TouchableOpacity>
   
            <TouchableOpacity
          onPress={()=>navigation.navigate('Sports')}  
                     style={styles.touchable3}
            > 
            <Image
            style={styles.image2}
            source={require("../../../images/sports.png")}
            />
            <Text style={styles.text5}>Sports</Text>
            </TouchableOpacity>
           
            <TouchableOpacity
          onPress={()=>navigation.navigate('Technology')}  
                     style={styles.touchable3}
            > 
            <Image
            style={styles.image2}
            source={require("../../../images/technology.png")}
            />
            <Text style={styles.text5}>Technology</Text>
            </TouchableOpacity>

            <TouchableOpacity
          onPress={()=>navigation.navigate('Travel')}  
                     style={styles.touchable3}
            > 
            <Image
            style={styles.image2}
            source={require("../../../images/travel.png")}
            />
            <Text style={styles.text5}>Travel</Text>
            </TouchableOpacity>

            <TouchableOpacity
          onPress={()=>navigation.navigate('Issues')}  
                     style={styles.touchable3}
            > 
            <Image
            style={styles.image2}
            source={require("../../../images/issues.png")}
            />
            <Text style={styles.text5}>Issues</Text>
            </TouchableOpacity>
            
          </View>
         </ScrollView>
         <Text style={styles.text3}>Join groups and start interacting</Text>
      </View>
              
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
  backgroundColor:"#DCDCDC",
  width:65,
  height:65,
  marginLeft:16,
  marginTop:5,
  borderRadius:70,

},
touchable3:{

},
  text: {
    color: 'white'
},
text2: {
  fontSize:18,
  marginLeft:20,
  marginTop:18,
  fontWeight:"bold"
},
text3:{
  fontSize:18,
  marginLeft:20,
  marginTop:5,
  fontWeight:"bold"
},
text4:{
  position: 'absolute',
  fontSize: 20,
  color:"white",
  marginLeft:65,
  marginTop:25,
  fontWeight:"bold"

},
text5:{
  position: 'absolute',
  fontSize: 19,
  color:"white",
  marginLeft:35,
  marginTop:25,
  fontWeight:"bold"
},
text6:{
  position: 'absolute',
  fontSize: 19,
  color:"white",
  marginLeft:18,
  marginTop:25,
  fontWeight:"bold"
},
fontAwesome:{
    marginTop:10,
    marginLeft:20,
    paddingTop:8
},
image:{
  width:130,
  height:70,
  marginLeft:20,
  borderRadius:10,
  marginTop:5
},
image2:{
  width:130,
  height:70,
  marginLeft:10,
  borderRadius:10,
  marginTop:5
}
 
});
/*
<View style={{flex:1,justifyContent:'center', alignItems:'center'}}>            
               <TouchableOpacity style={styles.touchable}
               onPress={()=> navigation.navigate("GroupScreenDetail")}>
           <Text style={styles.text}>Group Detail</Text>
        </TouchableOpacity>
        </View> 
*/