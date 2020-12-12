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

const {width: WIDTH} = Dimensions.get('window'); //The WIDTH is useful all devices

 
import Icon from "react-native-vector-icons/FontAwesome";
import {Input} from "react-native-elements"

export default class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        number: '',
        email: '',
    }
      
  
    render() {
        
   
    return (
      <ImageBackground source={require('../../images/background.png')} 
      style={styles.backgroundImage}> 
      <View style={styles.container}>
      
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
      <View style={styles.view2}> 
      <Input 
       placeholder="Number"
       secureTextEntry={true}
       placeholderTextColor="#BC8F8F"
    
       leftIcon={
        <Icon
              name="lock"
              size={24}
              color="#FFE4E1"
              onChangeText={value => this.setState({ username: value })}
            />
         }
      />
      </View> 
      <View style={styles.view2}> 
      <Input 
       placeholder="Email"
       secureTextEntry={true}
       placeholderTextColor="#BC8F8F"
    
       leftIcon={
        <Icon
              name="lock"
              size={24}
              color="#FFE4E1"
              onChangeText={value => this.setState({ email: value })}
            />
         }
      />
      </View>   
         
       
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text style={styles.text}>Turn Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.props.navigation.navigate('TabBar')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
      
      </ImageBackground>
    );
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
        borderRadius:50,
        opacity:0.9
      },
  text: {
        color: 'green'
      },

  textInp:{
        width: WIDTH- 140,
        height: 40,
        borderWidth: 2,
        color: '#212121',
        borderColor:'black',
        marginTop: 20,
        borderRadius:10,
       
        
      },
  backgroundImage: {
        flex: 1
      },
      view:{   
        marginTop:10,
        width:250
        
      },
      view2:{
          
        marginTop:20,
        width:250
      }
});
/**
 * import PhoneInput from 'react-native-phone-input';
 * 
 * 
 * 
 * 
 *  const {
            username,
            password,
            number,
            email,
        }=this.state; 

 *   _onChangeTextUsername = text =>{
         this.setState({
             username : text
         })
     }
     _onChangeTextPassword = text =>{
       this.setState({
           password : text
       })
   }
     _onChangeTextPassword2 = text =>{
    this.setState({
        password2 : text
    })
}
_onChangeTextNumber = text =>{
  this.setState({
      number : text
  })
}
_onChangeTextEmail = text =>{
    this.setState({
        email : text
    })
  }

   <TextInput
          style={styles.textInp}
          value={username}
          onChangeText={this._onChangeTextUsername}//username's data was kept
          placeholder="username"
          placeholderTextColor="white"
        
        />
        <TextInput
          style={styles.textInp}
          value={password}
          onChangeText={this._onChangeTextPassword}//password's data was kept
          placeholder="password "
          placeholderTextColor="white"
        />
  <TextInput
          style={styles.textInp}
          value={password2}
          onChangeText={this._onChangeTextPassword2}
          placeholder="password"
          placeholderTextColor="white"
        />
         
        <TextInput
          style={styles.textInp}
          value={email}
          onChangeText={this._onChangeTextEmail}//email's data was kept
          placeholder="email"
          placeholderTextColor="white"
        />



        <PhoneInput 
          style={styles.textInp}
          value={number}     
          
          ref = {ref =>{ 
            this.number = ref;
          }}
          onChangeText={this._onChangeTextNumber} //number's data was kept
          value="+90">
          </PhoneInput>
 */