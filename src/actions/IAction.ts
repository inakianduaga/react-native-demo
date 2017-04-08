import { IMovie } from '../models/Movie'
import { INavigationState } from '../reducers/main'

export const FETCH_MOVIES = 'FETCH_MOVIES'
export const UPDATE_MOVIES = 'UPDATE_MOVIES'
export const SELECT_MOVIE = 'SELECT_MOVIE'
export const SELECT_PAGE = 'SELECT_PAGE'
export const NAVIGATE_TO = 'NAVIGATE_TO'

export interface IStandardAction {
    type: String,
    payload: any
}

export interface ISelectPage extends IStandardAction {
  type: 'SELECT_PAGE',
  payload: number
}

export interface ISelectMovie extends IStandardAction {
  type: 'SELECT_MOVIE',
  payload: number
}

export interface IFetchMovies extends IStandardAction {
  type: 'FETCH_MOVIES',
  payload: null
}

export interface IUpdateMovies extends IStandardAction {
  type: 'UPDATE_MOVIES',
  payload: IMovie[]
}

export interface INavigateTo extends IStandardAction {
  type: 'NAVIGATE_TO',
  payload: INavigationState
}

// Include all actions in the system to do exhaustive pattern matching
// See TS tagged union types: https://blog.mariusschulz.com/2016/11/03/typescript-2-0-tagged-union-types
export type IApplicationAction = 
  | ISelectMovie
  | ISelectPage
  | IFetchMovies
  | IUpdateMovies
  | INavigateTo