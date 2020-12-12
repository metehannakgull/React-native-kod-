import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import { IMAGE } from "../../icon/icon";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export class Header7 extends Component {
  render() {
    let {title, navigation} = this.props; 
    return (
      <View
        style={{flexDirection: 'row', height: 60 , backgroundColor:"white"}}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 22, height: 25, marginLeft: 35}}
            source={IMAGE.ICON_BACK3}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{flex:2.5, justifyContent: 'center'}}>
          <Text style={{fontSize: 19, textAlign: "left"}}>{title}</Text>
        </View>

        <View>
            <TouchableOpacity> 
             
                <Text style={{fontSize: 17, textAlign: "right",marginRight:20
                ,marginTop:19,color:"#3399FF"}}>Create</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}