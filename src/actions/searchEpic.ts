// https://redux-observable.js.org/docs/Troubleshooting.html#rxjs-operators-are-missing-eg-typeerror-actionoftypeswitchmap-is-not-a-function
import 'rxjs' // Monkey patches the Observable prototype w/ entire Rx library
import * as Rx from 'rxjs'
import { Store } from 'redux'
import { IStateRecord } from '../reducers/index'
import { fetchMovies, updateMovies, isFetching } from './listings'
import * as IAction from './IAction'
import config from '../config/config'
import { IMoviesResponse } from '../api/movies'

export const fetchMoviesAfterDebouncedUpdates$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.IFetchMovies> => 
  action$
    .filter(action => action.type === IAction.UPDATE_SEARCH_TERM)
    .filter((action: IAction.IUpdateSearchTerm) => action.payload.length > 0)
    .debounceTime(config.movies.inputDebounce)
    .mapTo(fetchMovies());

export const clearMoviesListWhenSearchTermIsEmpty$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.IUpdateMovies> =>
  action$
    .filter(action => action.type === IAction.UPDATE_SEARCH_TERM)
    .filter((action: IAction.IUpdateSearchTerm) => action.payload.length === 0)
    .mapTo(updateMovies([], 0))

export const flagFetchingStart$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.IIsFetching> =>
  action$
    .filter(action => action.type === IAction.FETCH_MOVIES)
    .mapTo(isFetching(true))

export const processFetch$ = (action$: Rx.Observable<IAction.IApplicationAction>, store: Store<IStateRecord>): Rx.Observable<IAction.IUpdateMovies> =>
  action$
    .filter(action => action.type === IAction.FETCH_MOVIES)
    .map(_ => {
      const state = store.getState();
      const page = state.getIn(['listings', 'currentPage']);
      const searchTerm = state.getIn(['listings', 'searchTerm'])
      return `${config.movies.api.baseUrl}?s=${searchTerm}&page=${page}`
    })    
    .flatMap(url => Rx.Observable.from(fetch(url)))
    .flatMap(response => Rx.Observable.from(response.json()))
    .map((results: IMoviesResponse) => 
      results.Response === "True" ? 
        updateMovies(results.Search, parseInt(results.totalResults)) : 
        updateMovies([], 0) 
    )

