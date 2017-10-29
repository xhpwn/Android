import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';


// Creating component
class Landing extends Component {

  render() {
    const { navigate } = this.props.navigation;
    var navigationView = (
   <View style={{flex: 1, backgroundColor: '#fff'}}>
     <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}}>View Experiments</Text>
       <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}}>Request Payments</Text>
     <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={() => navigate('Payments')}>Setup Payments</Text>
     <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}}>Log out</Text>
   </View>
 );
 return (
   <DrawerLayoutAndroid
     drawerWidth={300}
     drawerPosition={DrawerLayoutAndroid.positions.Left}
     renderNavigationView={() => navigationView}>
     <View style={{flex: 1, alignItems: 'center'}}>
       <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
       <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
     </View>
   </DrawerLayoutAndroid>
 );
  }



}

export default Landing;
