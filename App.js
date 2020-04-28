import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './app/navigation/StackNavigator';
import {store} from './app/redux/store/store'
import {Provider} from 'react-redux';


export default function App(){
    return(
    <Provider store={store}>
      <StackNavigator />
    </Provider>
    )
}