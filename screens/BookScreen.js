import React from 'react';
import {View, Image, Button, FlatList, Dimensions} from 'react-native';
import {connect} from 'react-redux';


const windowWidth = Dimensions.get('window').width

class BookScreen extends React.Component{

  constructor(props){
    super(props);
    const {category} = this.props.route.params
    this.props.callBookList(category)
    console.log(this.props.bookList)
    
  }
  
  render(){
    const {category} = this.props.route.params
    if(this.props.bookList.length == 0){
      return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Button onPress={()=>this.props.callBookList(category)}
          title="Load Books" />
        </View>
      )
    }
    return(
      <View>
        <View style={{paddingTop: 5}}>
        <FlatList
          data = {this.props.bookList}
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
    bookList: state.bookList,
  }
}

function mapDispatchToProps(dispatch){
  return{
    callBookList : (category) => dispatch({type: 'Call_BookList', value: category})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);