import { applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from '../reducers/reducers';

const middlewares = [thunk];

export const store = createStore(reducer, applyMiddleware(...middlewares));