import 'react-native-gesture-handler';
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './navigation/StackNavigator';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {db} from './src/Config';
import Firebase from 'firebase';

let itemRef = db.ref()

let initialState = {
  searchStatus: false,
  bookData : [],
  categories : [],
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'Toggle_Status':
      return{ bookData: state.searchStatus==true ? initialState.bookData : state.bookData, searchStatus: state.searchStatus==true ? false : true , categories: state.categories}
    case 'Call_Data':
      return{ bookData: initialState.bookData, searchStatus: state.searchStatus, categories: state.categories }
    case 'Search_Filter':
      return{ bookData: initialState.bookData.filter(book => book.name.toLowerCase().includes(action.value)), searchStatus: state.searchStatus, categories: state.categories }
    case 'Call_Categories':
      return{ categories: initialState.categories, bookData: state.bookData, searchStatus: state.searchStatus }
    
  }
  return state
}
const store = createStore(reducer)



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
    }
  }

  componentDidMount(){
    itemRef.child('Books').on('value', snapshot => {
      let data = snapshot.val()
      console.log(data)
      if(snapshot.val()){
        const tempArr = []
        Object.keys(data).forEach(value => tempArr.push(data[value]))
        initialState.bookData = tempArr
        this.setState({
          isLoading: false,
        }, function(){
        });
      }
    })
    itemRef.child('Categories').on('value', snapshot => {
      let data = snapshot.val()
      console.log(data)
      if(snapshot.val()){
        const tempArr = []
        Object.keys(data).forEach(value => tempArr.push(data[value]))
        initialState.categories = tempArr
      }
    })
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, paddingTop: 250}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
    <Provider store={store}>
      <StackNavigator />
    </Provider>
    )
  }
}