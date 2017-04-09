import { IApiMovieResponse } from './../api/movies';
import * as IAction from './IAction';

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

export const updateMovies = (movies: IApiMovieResponse[], totalResults: number): IAction.IUpdateMovies => ({
  type: IAction.UPDATE_MOVIES,
  payload: {
    movies: movies.map(movie => ({
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
      poster: movie.Poster,
      type: movie.Type
    })),
    totalResults
  }
});

export const updateSearchTerm = (term: string): IAction.IUpdateSearchTerm => ({
  type: IAction.UPDATE_SEARCH_TERM,
  payload: term
});

export const isFetching = (payload: boolean): IAction.IIsFetching => ({
  type: IAction.IS_FETCHING,
  payload
})