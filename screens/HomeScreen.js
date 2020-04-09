import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, TextInput} from 'react-native';
import {connect} from 'react-redux';


const windowWidth = Dimensions.get('window').width

class HomeScreen extends React.Component{


  constructor(props){
    super(props);
    this.props.callData()
  }
  
  render(){
    return(
      <View>
        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{fontSize: 20}}>Your Books</Text>
          {
            this.props.searchStatus ? <TextInput style={{fontSize: 15, width: 200, borderBottomColor: "grey", borderBottomWidth: 1}} placeholder='search a book' onChangeText = {text => this.props.SearchFilter(text.toLowerCase())} /> : null
          }
          <TouchableOpacity onPress={()=>this.props.toggleStatus()}>
            <Image style = {{height: 25, width: 25}}
                   source = {require('../app/images/searchBtn.png')}

            />
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 5}}>
        <FlatList
          data = {this.props.bookData}
          keyExtractor={(item, index)=>index.toString()}
          renderItem = {({item})=>
          <View style={{margin: 20}}>
            <Image source={{uri: item.imageUrl}}
            style={{height: 230, width: windowWidth/2 - 40, borderRadius: 10}}/>
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
    searchStatus: state.searchStatus,
    bookData: state.bookData
  }
}

function mapDispatchToProps(dispatch){
  return{
    toggleStatus : () => dispatch({type: 'Toggle_Status'}),
    callData : () => dispatch({type: 'Call_Data'}),
    SearchFilter : (searchText) => dispatch({type: 'Search_Filter', value: searchText}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


const styles = StyleSheet.create({
  imageContainer : {
    marginTop: 40,
    marginLeft: 10,
    height: 40,
    width: 40,
  },
})