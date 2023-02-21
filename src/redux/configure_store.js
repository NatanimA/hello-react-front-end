import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './store';

const rootReducer = combineReducers({ greetings: greetingsReducer });
const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

export default store;
