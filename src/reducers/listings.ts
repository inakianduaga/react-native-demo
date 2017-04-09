import * as IAction from '../actions/IAction'
import { Record, List } from 'immutable'
import { toRecord as movieRecord, IMovie } from '../models/Movie'

export type INavigationState = 'intro' | 'listings' | 'detail'

export type IState = {
  movies: List<IMovie>,
  totalResults: number,
  currentPage: number,
  fetching: boolean,
  navigation: INavigationState,
  searchTerm: string | null
}

const initialState: IState = {
  movies: List<IMovie>(),
  totalResults: 0,
  currentPage: 1,
  fetching: false,
  navigation: 'intro',
  searchTerm: null
}

// The redux state is an instance of the state record class
export type IStateRecord = Record.Instance<IState>

const initialStateRecord: IStateRecord = new (Record(initialState, "Redux Store record"))()

const updateMovies = (state: IStateRecord, action: IAction.IUpdateMovies) =>   
  state
    .setIn("movies", action.payload.movies.map(movie => movieRecord(movie)))
    .setIn("totalResults", action.payload.totalResults)

const selectPage = (state: IStateRecord, action: IAction.ISelectPage) => state.set("currentPage", action.payload)

const navigateTo = (state: IStateRecord, action: IAction.INavigateTo) => state.set('navigation', action.payload)

const updateSearchTerm = (state: IStateRecord, action: IAction.IUpdateSearchTerm) => state.set("searchTerm", action.payload)

const reducer = (state = initialStateRecord, action: IAction.IApplicationAction): IStateRecord => {
  switch (action.type) {
    case IAction.NAVIGATE_TO:
      return navigateTo(state, action);
    case IAction.UPDATE_MOVIES:
      return updateMovies(state, action);
    case IAction.SELECT_PAGE:
      return selectPage(state, action);
    case IAction.UPDATE_SEARCH_TERM:
      return updateSearchTerm(state, action);
    default:
      return state;
  }
}

export default reducer;