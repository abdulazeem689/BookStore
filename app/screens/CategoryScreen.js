import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../firebaseServices/fetchData';
import {bindActionCreators} from 'redux';


const windowWidth = Dimensions.get('window').width

class CategoryScreen extends React.Component{

  constructor(props){
    super(props);
    this.props.callCategories('Categories')
  }
  
  render(){
    return(
      <View>
        <View>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  callCategories: fetchData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);