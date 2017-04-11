import { IMovie } from '../models/Movie'
import { INavigationState } from '../reducers/navigation'
import { IDetails } from '../reducers/details'

export const FETCH_MOVIES = 'FETCH_MOVIES'
export const UPDATE_MOVIES = 'UPDATE_MOVIES'
export const SELECT_MOVIE = 'SELECT_MOVIE'
export const SELECT_PAGE = 'SELECT_PAGE'
export const NAVIGATE_TO = 'NAVIGATE_TO'
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'
export const IS_FETCHING = 'IS_FETCHING'
export const FETCH_DETAILS = 'FETCH_DETAILS'
export const UPDATE_DETAILS = 'UPDATE_DETAILS'
export const RESET_PAGINATION = 'RESET_PAGINATION'

export interface IStandardAction {
    type: String,
    payload: any
}

export interface ISelectPage extends IStandardAction {
  type: 'SELECT_PAGE',
  payload: number
}

export interface IResetPagination extends IStandardAction {
  type: 'RESET_PAGINATION',
  payload: null
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
  payload: {
    movies: IMovie[],
    totalResults: number
  }
}

export interface INavigateTo extends IStandardAction {
  type: 'NAVIGATE_TO',
  payload: INavigationState
}

export interface IUpdateSearchTerm extends IStandardAction {
  type: 'UPDATE_SEARCH_TERM',
  payload: string
}

export interface IIsFetching extends IStandardAction {
  type: 'IS_FETCHING',
  payload: boolean
}

export interface IFetchDetails extends IStandardAction {
  type: 'FETCH_DETAILS',
  payload: string
}

export interface IUpdateDetails extends IStandardAction {
  type: 'UPDATE_DETAILS',
  payload: IDetails
}

// Include all actions in the system to do exhaustive pattern matching
// See TS tagged union types: https://blog.mariusschulz.com/2016/11/03/typescript-2-0-tagged-union-types
export type IApplicationAction = 
  | ISelectMovie
  | ISelectPage
  | IResetPagination
  | IFetchMovies
  | IUpdateMovies
  | INavigateTo
  | IUpdateSearchTerm
  | IIsFetching
  | IFetchDetails
  | IUpdateDetails