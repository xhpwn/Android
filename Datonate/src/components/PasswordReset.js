// Importing libraries
import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import Button from 'react-native-button';

// Creating component
class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  _userReset = () => {
    alert("A reset code has been sent to " + this.state.email);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { textStyle, viewStyle, bodytextStyle, textbar, buttonStyle, buttonStyle2, backgroundImage } = styles;

    return (
      <Image source={require('../images/background.jpg')} style={backgroundImage}>
      <View style={viewStyle}>
        <Text style={textStyle}>Datonate</Text>
        <Text style={bodytextStyle}>Password Reset</Text>
        <TextInput placeholder='Email' style={textbar} onChangeText={(email) => this.setState({email})}/>
        <Button style={buttonStyle} onPress={this._userReset}> Reset </Button>
        <Button style={buttonStyle2} onPress={() => navigate('Login')}> Back </Button>
      </View>
      </Image>
    );
  }
}

const styles = {
  viewStyle: {
    alignItems: 'center',
    height: 700,
    paddingTop: 50,
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 50,
    color: '#ffffff'
  },
  bodytextStyle: {
    fontSize: 30,
    color: '#f5f5f2',
    paddingTop: 40,
    paddingBottom: 50
  },
  textbar: {
    height: 50,
    borderColor: 'white',
    color: 'white',
    borderWidth: 0,
    paddingTop: 20,
    width: 200,
  },
  buttonStyle: {
    fontSize: 20,
    color: 'black',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 100,
    marginTop: 60,
  },
  buttonStyle2: {
    fontSize: 20,
    color: 'black',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 100,
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
};

// Exporting Component
export default PasswordReset;
