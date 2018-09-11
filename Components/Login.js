import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,TextInput
} from 'react-native';
import { Button,ImageBackground } from 'react-native';



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = 
       {
        u: "123",
        p: "321",
        username: '',
        password: '',
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
     
}

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  getLogin(){
    let {username,password,u,p} = this.state;  

    if(username == u && password == p){
    this.props.navigation.navigate('Home')
    }
    else {
        alert('incorrect details')
    }  
}

  render() {
    return (
        <ImageBackground
  source={require('../images/img1.jpg')}
  style={{width: '100%', height: '100%'}}
> 
          <View style={{flex: 1 , marginTop: 180}}>

          <View style={{backgroundColor: 'white'}}>  
          <TextInput 
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeText={username => this.setState({username})}
        />
        </View>

           <View style={{backgroundColor: 'white'}}>  
        <TextInput
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={password => this.setState({password})}
        />
        </View>

        <Button title="login" onPress={this.getLogin.bind(this)}/>
        
              </View>

              </ImageBackground>
    );
  }
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   }
// });