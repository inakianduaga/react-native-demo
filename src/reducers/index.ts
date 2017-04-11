// import { combineReducers } from 'redux';
import * as Redux from 'redux'
import { combineReducers } from 'redux-immutable'
import { combineEpics } from 'redux-observable';
import { Record, Collection } from 'immutable'

import listings from './listings';
import navigation from './navigation';
import details from './details';
import { IStateRecord as INavigationState } from './navigation'
import { IStateRecord as IListingsState } from './listings'
import { IStateRecord as IDetailsState } from './details'

import { 
  fetchMoviesAfterDebouncedUpdates$, 
  processFetch$, 
  flagFetchingStart$, 
  clearMoviesListWhenSearchTermIsEmpty$, 
  fetchMoviesWhenPageSelected$,
  resetPaginationWhenSearchTermChanges$,
 } from '../actions/searchEpic'

// Redux-immutable override type declaration
// declare function combineReducers<S>(reducers: Redux.ReducersMapObject, getDefaultState?: () => Record.Instance<any> | Collection<string, any> ): Redux.Reducer<S>;
declare module "redux-immutable" {
    function combineReducers<S>(reducers: Redux.ReducersMapObject, getDefaultState?: () => Record.Instance<any> | Collection<string, any> ): Redux.Reducer<S>;
}

export const rootEpic = combineEpics(
  fetchMoviesAfterDebouncedUpdates$,
  processFetch$,
  flagFetchingStart$,
  clearMoviesListWhenSearchTermIsEmpty$,
  fetchMoviesWhenPageSelected$,
  resetPaginationWhenSearchTermChanges$
);

type IState = {
  listings: IListingsState,
  navigation: INavigationState,
  details: IDetailsState,
}

// top level app state
export type IStateRecord = Record.Instance<IState>

// Use a record to contain the global app state
const StateRecord = Record({
	listings: undefined,
  navigation: undefined,
  details: undefined
});

export const rootReducer = combineReducers({
  // every modules reducer should be define here
  listings,
  navigation,
  details
}, StateRecord);

export default rootReducer;
