import * as IAction from './IAction';
import { IMovie } from '../models/Movie'

export const selectPage = (page: number) => ({
  type: IAction.SELECT_PAGE,
  payload: page
});

export const selectMovie = (id: number) => ({
  type: IAction.SELECT_MOVIE,
  payload: id
});

export const fetchMovies = () => ({
  type: IAction.FETCH_MOVIES,
  payload: null
});

export const updateMovies = (ids: IMovie[]) => ({
  type: IAction.UPDATE_MOVIES,
  payload: ids
});

export const updateSearchTerm = (term: string) => ({
  type: IAction.UPDATE_SEARCH_TERM,
  payload: term
});