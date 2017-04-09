// https://redux-observable.js.org/docs/Troubleshooting.html#rxjs-operators-are-missing-eg-typeerror-actionoftypeswitchmap-is-not-a-function
import 'rxjs' // Monkey patches the Observable prototype w/ entire Rx library
import * as Rx from 'rxjs'
import { Store } from 'redux'
import { IStateRecord } from '../reducers/index'
import { fetchMovies, updateMovies } from './listings'
import { IApplicationAction, IFetchMovies, IUpdateSearchTerm, FETCH_MOVIES, UPDATE_SEARCH_TERM } from './IAction'
import config from '../config/config'

export const fetchMoviesAfterDebouncedUpdates = (action$: Rx.Observable<IApplicationAction>): Rx.Observable<IFetchMovies> => 
  action$
    .filter(action => action.type === UPDATE_SEARCH_TERM)
    .filter((action: IUpdateSearchTerm) => action.payload.length > 0)
    .debounceTime(config.movies.inputDebounce)
    .mapTo(fetchMovies());

export const processFetch = (action$: Rx.Observable<IApplicationAction>, store: Store<IStateRecord>): Rx.Observable<any> =>
  action$
    .filter(action => action.type === FETCH_MOVIES)
    .map(_ => {
      const state = store.getState();
      const page = state.getIn('listings.currentPage');
      const searchTerm = state.getIn('listings.searchTerm')
      return `${config.movies.api.baseUrl}?s=${searchTerm}&page=${page}`
    })
    .flatMap(url => Rx.Observable.from(fetch(url)))
    .mapTo(updateMovies)
