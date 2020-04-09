import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import BookScreen from '../screens/BookScreen';

const Stack = createStackNavigator();

class StackNavigator extends React.Component {

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DrawerNavigator} options={({navigation})=>(
            {
              title: "BookStore",
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
          <Stack.Screen name="BookList" component={BookScreen} options={({route}) =>({title: route.params.category, headerBackTitleVisible: false})} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default StackNavigator;