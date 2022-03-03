import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './reducers/reducers';

const rootReducer = combineReducers({app: appReducer})
export const store = createStore(rootReducer, applyMiddleware(thunk))