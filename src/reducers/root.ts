// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable'
import main from './main';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics();

export const rootReducer = combineReducers({
  // every modules reducer should be define here
  main
});