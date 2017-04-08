import { ActionCreator } from 'redux';
import * as IAction from './IAction';
import { IMovie } from '../models/Movie'
import { INavigationState } from '../reducers/main'

export const selectPage: ActionCreator<IAction.ISelectPage> = (page: number) => ({
  type: IAction.SELECT_PAGE,
  payload: page
});

export const selectMovie: ActionCreator<IAction.ISelectMovie> = (id: number) => ({
  type: IAction.SELECT_MOVIE,
  payload: id
});

export const fetchImages: ActionCreator<IAction.IFetchMovies> = () => ({
  type: IAction.FETCH_MOVIES,
  payload: null
});

export const updateImages: ActionCreator<IAction.IUpdateMovies> = (ids: IMovie[]) => ({
  type: IAction.UPDATE_MOVIES,
  payload: ids
});

export const navigateTo: ActionCreator<IAction.INavigateTo> = (to: INavigationState) => ({
  type: IAction.NAVIGATE_TO,
  payload: to
})


