import * as IAction from './IAction';
import { IMovie } from '../models/Movie'
import { INavigationState } from '../reducers/main'

export const selectPage = (page: number) => ({
  type: IAction.SELECT_PAGE,
  payload: page
});

export const selectMovie = (id: number) => ({
  type: IAction.SELECT_MOVIE,
  payload: id
});

export const fetchImages = () => ({
  type: IAction.FETCH_MOVIES,
  payload: null
});

export const updateImages = (ids: IMovie[]) => ({
  type: IAction.UPDATE_MOVIES,
  payload: ids
});

export const navigateTo = (to: INavigationState) => ({
  type: IAction.NAVIGATE_TO,
  payload: to
})


