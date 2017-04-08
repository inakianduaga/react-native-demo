// import { combineReducers } from 'redux';
import * as Redux from 'redux'
import { combineReducers } from 'redux-immutable'
import main from './main';
import { combineEpics } from 'redux-observable';
import { Record, Collection } from 'immutable'
import { IStateRecord as IMainState } from './main'

// Redux-immutable override type declaration
// declare function combineReducers<S>(reducers: Redux.ReducersMapObject, getDefaultState?: () => Record.Instance<any> | Collection<string, any> ): Redux.Reducer<S>;
declare module "redux-immutable" {
    function combineReducers<S>(reducers: Redux.ReducersMapObject, getDefaultState?: () => Record.Instance<any> | Collection<string, any> ): Redux.Reducer<S>;
}

export const rootEpic = combineEpics();

type IState = {
  main: IMainState
}

// top level app state
export type IStateRecord = Record.Instance<IState>

// Use a record to contain the global app state
const StateRecord = Record({
	main: undefined
});

export const rootReducer = combineReducers({
  // every modules reducer should be define here
  main
}, StateRecord);

export default rootReducer;
