import React from 'react';
import {Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  render(){
    return(
        <Drawer.Navigator initialRouteName = "Home">
          <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon: ()=>
          <Image source={require('../app/images/home.png')}
          style={{width: 25, height: 25}}/>
          }}/>
          <Drawer.Screen name="Categories" component={CategoryScreen} options={{drawerIcon: ()=>
          <Image source={require('../app/images/categories.png')}
          style={{width: 25, height: 25}}/>
          }}/>
        </Drawer.Navigator>
    )
  }
}