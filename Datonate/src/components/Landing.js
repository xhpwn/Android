import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';


// Creating component
class Landing extends Component {

  render() {
    var navigationView = (
   <View style={{flex: 1, backgroundColor: '#fff'}}>
     <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>A New Drawer</Text>
     <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>The Drawer Strikes Back</Text>
     <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Return of the Drawer</Text>
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
