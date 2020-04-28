import {initialState} from '../store/initialState';

export const reducer = (state=initialState, action) => {
    switch(action.type){
      case 'Call_Data':
        return{ 
          ...state,
          bookData: action.data,
        }
      case 'Call_Categories':
        return{ 
          ...state,
          categories: action.data,
        }
      case 'Call_Books':
        return{ 
          ...state,
          bookList: action.data,
        }  
    }
    return state
  }