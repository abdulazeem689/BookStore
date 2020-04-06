import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DrawerNavigator} options={({navigation})=>(
            {
              title: "Your Books",
              headerLeft: ()=>(
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) }>
                  <Image style = {{height: 30, width: 30}}
                  source = {require('../app/images/hmMenu.png')}
                  />
                </TouchableOpacity>
              ),
            }
          )
          } />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}