import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

class Registration extends Component {
  constructor(props) {
  super(props);
  this.state = {
    fName: '',
    lName: '',
    email: '',
    password: ''
  }
}
  render(){
  return (
    <View style={styles.container}>
    <Image
    style={styles.logo}
    source={require('../images/logo.png')}
    />
      <TextInput style = {styles.input}
        placeholder = "First Name"
        placeholderTextColor = 'white'
        onChangeText = {(fName) => this.setState({fName})}
        value={this.state.text}
      />
      <TextInput style = {styles.input}
        placeholder = "Last Name"
        placeholderTextColor = 'white'
        onChangeText = {(lName) => this.setState({lName})}
        value={this.state.text}
      />
      <TextInput style = {styles.input}
        placeholder = "Email"
        placeholderTextColor = 'white'
        onChangeText = {(email) => this.setState({email})}
        value={this.state.text}
      />
      <TextInput style = {styles.input}
        secureTextEntry = {true}
        placeholder = "Password"
        placeholderTextColor = 'white'
        onChangeText = {(password) => this.setState({password})}
        value={this.state.text}
      />
      <TouchableOpacity style={styles.inputButton}
      >
      <Text style={styles.inputButtonText}>
        Register
      </Text>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#263238',
    alignItems: 'center'
  },
  input: {
    paddingLeft: '6%',
    width: '80%',
    color: 'white',
    backgroundColor: '#37474F',
    marginBottom: 10,
    fontSize: 15
  },
  logo: {
    resizeMode: 'contain',
    height: '25%',
    marginBottom:'10%'
  },
  inputButton: {
    marginTop: 10,
    padding:10,
    backgroundColor: '#0091EA',
    width: '80%',
  },
  inputButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800'
  }
});
export default Registration;
