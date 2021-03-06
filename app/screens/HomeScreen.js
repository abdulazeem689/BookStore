import React from 'react';
import {View, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../firebaseServices/fetchData';
import { bindActionCreators } from 'redux';
import {windowWidth} from '../utils/dimensions';


class HomeScreen extends React.Component{

  constructor(props){
    super(props);
    this.props.callData('Books');
  }
  
  render(){
    return(
      <View>
        <View>
        <FlatList
          data = {this.props.myBooks}
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
    myBooks: state.myBooks,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  callData: fetchData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);