import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  render(){
    return(
        <Drawer.Navigator initialRouteName = "Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Categories" component={CategoryScreen} />
        </Drawer.Navigator>
    )
  }
}