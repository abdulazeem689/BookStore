import {db} from "../config/Config";
import {callBooks, callCategories, callMyBooks} from '../redux/actions/actions'

export function fetchData(query){
  return dispatch => {
    db.ref().child(query).on('value', snapshot => {
      let data = snapshot.val()
      console.log(data)
      if(snapshot.val()){
        const tempArr = []
        Object.keys(data).forEach(value => tempArr.push(data[value]))
        switch (query) {
          case 'Books':
            dispatch(callMyBooks(tempArr))
            break;
          case 'Categories':
            dispatch(callCategories(tempArr))
            break;
          default:
            dispatch(callBooks(tempArr))
            break;
        }
      }
    })
  }
}