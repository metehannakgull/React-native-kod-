import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground
} from 'react-native';
const {width: WIDTH} = Dimensions.get('window');//The WIDTH is useful all devices

import Logo from '../component/Logo';

import Icon from "react-native-vector-icons/FontAwesome";
import {Input} from "react-native-elements"

export default class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
 
  render() {
    
    return (
      <ImageBackground
       source={require('../../images/background.png')} 
       style={styles.backgroundImage}
      >
        <View style={styles.container}>
        <Logo/>
        
    <View style={styles.view}> 
        <Input 
          placeholder="Username"
          placeholderTextColor="#BC8F8F"
          leftIcon={
            <Icon
              name="user"
              size={24}
              color="#FFE4E1"
              onChangeText={value => this.setState({ username: value })}
            />
          }
        />
      </View>
      <View style={styles.view2}> 
      <Input 
      placeholder="Password"
     secureTextEntry={true}
     placeholderTextColor="#BC8F8F"
    
     leftIcon={
        <Icon
              name="lock"
              size={24}
              color="#FFE4E1"
              onChangeText={value => this.setState({ password: value })}
            />
         }
      />
      </View>  
          <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.props.navigation.navigate('TabBar')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}
           onPress= {()=>this.props.navigation.navigate('Welcome')}>
             <Text style={styles.text}>Turn Back</Text>
          </TouchableOpacity>
    </View>
    </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({ //styles
      container: {
          flex: 1,
          
          alignItems: 'center',
          justifyContent: 'center',
      },
   
      touchable: {
          width:250,
          height: 50,
          backgroundColor: '#FFE4E1',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          opacity:0.9,
          borderRadius:50
      },
    
      text: {
          color: 'green'
      },
    
    
     backgroundImage: {
         flex: 1
    },
    view:{
      
      marginTop:20,
      width:250
      
    },
    view2:{
      marginTop:10,
      
      marginTop:20,
      width:250
    }
});
/**
 * 
 * 
 *  state = {
     username: '',
     password: ''
 }
    _onChangeTextUsername = text =>{
      this.setState({
          username : text
      })
  }
  _onChangeTextPassword = text =>{
    this.setState({
        password : text
    })
}

  const {
         username,
         password,
     }=this.state;


  <TextInput style={styles.textInp}
        value = {username}
        onChangeText= {this._onChangeTextUsername} // username's data was kept
        placeholder ='username'
        placeholderTextColor = 'white'
        />
        <TextInput style={styles.textInp}
            value ={password}
            onChangeText={this._onChangeTextPassword} //password's data was kept
            placeholder ='password'
            placeholderTextColor = 'white'
            secureTextEntry= {true} //hidden password
        />

        
      textInp:{
          width: WIDTH- 140,
          height: 40,
          borderWidth: 2,
          color: '#212121',
          borderColor:'black',
          marginTop: 20,
          borderRadius:10
     },
 */