import React from 'react';
import {Image} from 'react-native';


export const createRating=(rating)=>{
    let arr = []
    let path = ""
    for (let i = 0; i < 5; i++) {
        path = i>=rating ? require('../assets/images/unfilledRating.png') : require('../assets/images/filledRating.png')
        arr.push(<Image source={path}
        style = {{width: 20, height: 20}} />)
      }
      return arr
}