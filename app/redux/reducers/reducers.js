const initialState = {
  myBooks: [],
  books : [],
  categories : [],
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
      case 'Call_Mybooks':
        return{
          ...state,
          myBooks: action.data,
        }
      case 'Call_Books':
        return{ 
          ...state,
          books: action.data,
        }
      case 'Call_Categories':
        return{ 
          ...state,
          categories: action.data,
        } 
    }
    return state
  }