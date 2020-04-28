import React from 'react';
import {View, Image, Button, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../firebaseServices/fetchData';


const windowWidth = Dimensions.get('window').width

class BookScreen extends React.Component{

  constructor(props){
    super(props);
    const {category} = this.props.route.params
    this.props.callBookList(category)  
  }
  
  render(){
    return(
      <View>
        <View>
        <FlatList
          data = {this.props.bookList}
          keyExtractor={(item, index)=>index.toString()}
          renderItem = {({item})=>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("AboutBook", {bookItem: item})} >
            <View style={{margin: 20}}>
              <Image source={{uri: item.imageUrl}}
              style={{height: 230, width: windowWidth/2 - 40, borderRadius: 10}}/>
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
    bookList: state.bookList,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  callBookList: fetchData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);