import * as IAction from './IAction';
import { IMovie } from '../models/Movie'

export const selectPage = (page: number): IAction.ISelectPage => ({
  type: IAction.SELECT_PAGE,
  payload: page
});

export const selectMovie = (id: number): IAction.ISelectMovie => ({
  type: IAction.SELECT_MOVIE,
  payload: id
});

export const fetchMovies = (): IAction.IFetchMovies => ({
  type: IAction.FETCH_MOVIES,
  payload: null
});

export const updateMovies = (movies: IMovie[], totalResults: number): IAction.IUpdateMovies => ({
  type: IAction.UPDATE_MOVIES,
  payload: {
    movies,
    totalResults
  }
});

export const updateSearchTerm = (term: string): IAction.IUpdateSearchTerm => ({
  type: IAction.UPDATE_SEARCH_TERM,
  payload: term
});