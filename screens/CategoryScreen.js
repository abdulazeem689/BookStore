import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, TextInput, Button} from 'react-native';
import Firebase from 'firebase';
import {db} from '../src/Config';
import {connect} from 'react-redux';


const windowWidth = Dimensions.get('window').width

class CategoryScreen extends React.Component{

  constructor(props){
    super(props);
    this.props.callCategories()
  }
  
  render(){
    return(
      <View>
        <View style={{paddingTop: 30}}>
        <FlatList
          data = {this.props.categories}
          keyExtractor={(item, index)=>index.toString()}
          renderItem = {({item})=>
          <View style={{height: 190, margin: 20, backgroundColor: "white"}}>
            <Image source={{uri: item.imageUrl}}
            style={{height: 170, width: windowWidth/2 - 40, borderRadius: 10}}/>
            <Text style={{textAlign: "center"}}>{item.name}</Text>
          </View>
        }
        numColumns = {2}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch){
  return{
    callCategories : () => dispatch({type: 'Call_Categories'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);