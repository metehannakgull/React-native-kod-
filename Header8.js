import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import { IMAGE } from "../../icon/icon";

export class Header8 extends Component {
  render() {
    let {title, navigation} = this.props; 
    return (
      <View
        style={{flexDirection: 'row', height: 60}}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 25, height: 25, marginLeft: 15}}
            source={IMAGE.ICON_BACK3}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{flex:3, justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>{title}</Text>
        </View>

        <View style={{flex: 1}}></View>
      </View>
    );
  }
}
