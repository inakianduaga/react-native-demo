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

export const fetchImages = (): IAction.IFetchMovies => ({
  type: IAction.FETCH_MOVIES,
  payload: null
});

export const updateImages = (ids: IMovie[]): IAction.IUpdateMovies => ({
  type: IAction.UPDATE_MOVIES,
  payload: ids
});


