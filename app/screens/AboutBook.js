import React from 'react';
import {Text, Image, View, Dimensions,ScrollView} from 'react-native';

const windowWidth = Dimensions.get("window").width

export default class AboutBook extends React.Component {

    createRating=(rating)=>{
        let arr = []
        let path = ""
        for (let i = 0; i < 5; i++) {
            path = i>=rating ? require('../assets/images/unfilledRating.png') : require('../assets/images/filledRating.png')
            arr.push(<Image source={path}
            style = {{width: 20, height: 20}} />)
          }
          return arr
    }

    render(){
        const {bookItem} = this.props.route.params

        return(
            <ScrollView>
                <Image source={{uri: bookItem.aboutImage}}
                style = {{width: windowWidth, height: Dimensions.get('window').height/3}} />
                <View style={{marginTop: 20, width: windowWidth-20 ,flexDirection: 'row', justifyContent: 'space-between', alignSelf: "center"}}>
                    <View>
                        <Text style={{color: 'grey'}}>Author</Text>
                        <Text style={{fontSize: 16}}>{bookItem.author}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        { this.createRating(bookItem.rating).map((value)=>{
                            return value
                        }) }
                    </View>
                </View>
                <Text style={{marginTop: 20, width: windowWidth-20, fontSize: 15, alignSelf: "center"}}>About the story</Text>
                <Text style={{marginTop: 5, width: windowWidth-20, fontSize: 15, alignSelf: "center", color: 'grey'}}>{bookItem.about}</Text>
            </ScrollView>
        )
    }
}