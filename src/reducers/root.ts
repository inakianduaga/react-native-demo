// import { combineReducers } from 'redux';
import * as Redux from 'redux'
import { combineReducers } from 'redux-immutable'
import { combineEpics } from 'redux-observable';
import { Record, Collection } from 'immutable'

import { IStateRecord as IListingsState } from './listings'
import listings from './listings';
import { IStateRecord as INavigationState } from './navigation'
import navigation from './navigation';

// Redux-immutable override type declaration
// declare function combineReducers<S>(reducers: Redux.ReducersMapObject, getDefaultState?: () => Record.Instance<any> | Collection<string, any> ): Redux.Reducer<S>;
declare module "redux-immutable" {
    function combineReducers<S>(reducers: Redux.ReducersMapObject, getDefaultState?: () => Record.Instance<any> | Collection<string, any> ): Redux.Reducer<S>;
}

export const rootEpic = combineEpics();

type IState = {
  listings: IListingsState,
  navigation: INavigationState
}

// top level app state
export type IStateRecord = Record.Instance<IState>

// Use a record to contain the global app state
const StateRecord = Record({
	listings: undefined,
  navigation: undefined
});

export const rootReducer = combineReducers({
  // every modules reducer should be define here
  listings,
  navigation
}, StateRecord);

export default rootReducer;
