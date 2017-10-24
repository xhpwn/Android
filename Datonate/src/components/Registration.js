import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, Image } from 'react-native';
import Buttons from './Buttons'

class Registration extends Component {
  render(){
    const { navigate } = this.props.navigation;
    const {page, inputBox, container, header, buttonStyle, headerContainer} = styles;
  return (
  <View style={page}>

  <View style={headerContainer}>
  <Text style={header}> Datonate </Text>
  </View>
  <View style={container}>
  <TextInput
    placeholder="First Name"
    returnKeyType = "next"
    autoCorrect =  {false}
    style = {inputBox}
  />
  <TextInput
    placeholder="Last Name"
    returnKeyType = "next"
    autoCorrect =  {false}
    style = {inputBox}
  />
  <TextInput
    placeholder="E-mail"
    returnKeyType = "next"
    keyboardType = "email-address"
    autoCapitalize = "none"
    autoCorrect =  {false}
    style = {inputBox}
  />
  <TextInput
    placeholder="Password"
    returnKeyType = "next"
    secureTextEntry
    autoCapitalize = "none"
    autoCorrect =  {false}
    style = {inputBox}
  />
  <View style = {buttonStyle}>
  <Buttons
    title="Register"
  />
  </View>
  </View>
  </View>
  );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#99d8f7',
    flex: 1,
  },
  container: {
    marginTop: 50,
  },
  inputBox: {
    height: 40,
    marginLeft: 40,
    marginRight: 40,
    //backgroundColor: '#ffffff',
    color: '#000000',
  },
  header: {
    alignItems: 'center',
    fontSize: 40,
    color: '#000000',
  },
  buttonStyle: {
    alignItems: 'center',
    //marginLeft: 100,
    //marginRight: 100,
    marginTop: 20,
    width: 350,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 50,
  }
});

export default Registration;
