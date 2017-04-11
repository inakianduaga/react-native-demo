// https://redux-observable.js.org/docs/Troubleshooting.html#rxjs-operators-are-missing-eg-typeerror-actionoftypeswitchmap-is-not-a-function
import 'rxjs' // Monkey patches the Observable prototype w/ entire Rx library
import * as Rx from 'rxjs'
import { Store } from 'redux'
import { IStateRecord } from '../reducers/index'
import { fetchMovies, updateMovies, isFetching, resetPagination } from './listings'
import { navigateTo } from './navigation'
import { fetchDetails, updateDetails, IDetailsResponse } from './details'
import * as IAction from './IAction'
import config from '../config/config'
import { IMoviesResponse } from '../api/movies'

export const fetchMoviesAfterDebouncedUpdates$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.IFetchMovies> => 
  action$
    .filter(action => action.type === IAction.UPDATE_SEARCH_TERM)
    .filter((action: IAction.IUpdateSearchTerm) => action.payload.length > 0)
    .debounceTime(config.movies.inputDebounce)
    .mapTo(fetchMovies());

export const resetPaginationWhenSearchTermChanges$ = (action$: Rx.Observable<IAction.IApplicationAction>, store: Store<IStateRecord>): Rx.Observable<IAction.IResetPagination> => 
  action$
    .filter(action => action.type === IAction.UPDATE_SEARCH_TERM)
    .filter(_ => store.getState().getIn(['listings', 'currentPage']) !== 1)
    .mapTo(resetPagination())

export const clearMoviesListWhenSearchTermIsEmpty$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.IUpdateMovies> =>
  action$
    .filter(action => action.type === IAction.UPDATE_SEARCH_TERM)
    .filter((action: IAction.IUpdateSearchTerm) => action.payload.length === 0)
    .mapTo(updateMovies([], 0))

export const fetchDetailsWhenNavigatingToDetailsPage$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.IFetchDetails> =>
  action$
    .filter(action => action.type === IAction.NAVIGATE_TO_DETAILS)
    .map((action: IAction.INavigateToDetails) => fetchDetails(action.payload))

export const updateNavigationWhenGoingToDetails$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.INavigateTo> =>
  action$
    .filter(action => action.type === IAction.NAVIGATE_TO_DETAILS)
    .map(_ => navigateTo('detail'))

export const updateDetailsAfterFetching$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.IUpdateDetails> =>
  action$
    .filter(action => action.type === IAction.FETCH_DETAILS)
    .map((action: IAction.IFetchDetails) => action.payload)
    .map(imdbId => `${config.movies.api.baseUrl}?i=${imdbId}`)
    .flatMap(url => Rx.Observable.from(fetch(url)))
    .flatMap(response => Rx.Observable.from(response.json()))
    .map((results: IDetailsResponse) => ({
          imbdId: results.Response === "True" ? results.imbdId : null,
          title: results.Response === "True" ? results.Title : null,
          year: results.Response === "True" ? results.Year : null,
          released: results.Response === "True" ? results.Released : null,
          actors: results.Response === "True" ? results.Actors : null,
          genre: results.Response === "True" ? results.Genre : null,
          plot: results.Response === "True" ? results.Plot : null,
          poster: results.Response === "True" ? results.Poster : null,
        }))
    .map(updateDetails)

export const flagFetchingStart$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.IIsFetching> =>
  action$
    .filter(action => action.type === IAction.FETCH_MOVIES)
    .mapTo(isFetching(true))

export const fetchMoviesWhenPageSelected$ = (action$: Rx.Observable<IAction.IApplicationAction>): Rx.Observable<IAction.IFetchMovies> =>
  action$
    .filter(action => action.type === IAction.SELECT_PAGE)
    .mapTo(fetchMovies());

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