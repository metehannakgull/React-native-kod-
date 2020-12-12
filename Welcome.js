import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import Logo from '../component/Logo';

export default class Welcome extends React.Component {
  
  render() {
    //Added background image
    //Added Logo.js
        
    return (
      <ImageBackground source={require('../../images/background.png')} 
      style={styles.backgroundImage}
      > 
       <View style={styles.container}>       
        <Logo/>          
          <TouchableOpacity style={styles.touchable}
          onPress= {()=>this.props.navigation.navigate('Login')}// Login's TouchableOpacity route to Login.js. username and password are wanted
          >
             <Text style={styles.text}>Login</Text>
          </TouchableOpacity>         
          
          <TouchableOpacity style={styles.touchable}
           onPress= {()=>this.props.navigation.navigate('SignUp')}// SignUp' s TouchableOpacity route to SignUp.js. username, password, number and email are wanted
           >
             <Text style={styles.text}>SignUp</Text>
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
      margin: 30,
      marginTop:150,
      marginBottom: 130,  
  },
  touchable: {
      width:250,
      height: 50,
      backgroundColor: '#FFE4E1',
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:50,
      opacity:0.9

  },
  text: {
      color: 'green'
  },
  backgroundImage: {
      flex: 1
  }
 
});