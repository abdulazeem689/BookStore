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
        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{fontSize: 20}}>Categories</Text>
        </View>
        <View style={{paddingTop: 10}}>
        <FlatList
          data = {this.props.categories}
          keyExtractor={(item, index)=>index.toString()}
          renderItem = {({item})=>
          <TouchableOpacity onPress = {()=>this.props.navigation.navigate("BookList", {category: item.name})}>
            <View style={{height: 190, margin: 20, backgroundColor: "white"}}>
              <Image source={{uri: item.imageUrl}}
              style={{height: 170, width: windowWidth/2 - 40, borderRadius: 10}}/>
              <Text style={{textAlign: "center"}}>{item.name}</Text>
            </View>
          </TouchableOpacity>
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
    callCategories : () => dispatch({type: 'Call_Categories'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);