import React from 'react';
import {Text, Image, View, Dimensions,ScrollView} from 'react-native';
import {windowWidth} from '../utils/dimensions';
import {createRating} from '../utils/ratings';

export default class AboutBook extends React.Component {

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
                        { createRating(bookItem.rating).map((value)=>{
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