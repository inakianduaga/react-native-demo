import * as IAction from '../actions/IAction'
import { Record, List } from 'immutable'
import { toRecord as toMovieRecord, IMovieInstance } from '../models/Movie'

export type INavigationState = 'intro' | 'listings' | 'detail'

export type IState = {
  movies: List<IMovieInstance>,
  totalResults: number,
  currentPage: number,
  fetching: boolean,
  navigation: INavigationState,
  searchTerm: string | null
}

const initialState: IState = {
  movies: List<IMovieInstance>(),
  totalResults: 0,
  currentPage: 1,
  fetching: false,
  navigation: 'intro',
  searchTerm: null
}

// The redux state is an instance of the state record class
export type IStateRecord = Record.Instance<IState>

const initialStateRecord: IStateRecord = new (Record(initialState, "Redux Store record"))()

const updateMovies = (state: IStateRecord, { payload }: IAction.IUpdateMovies) =>   state
  .setIn(['movies'], List(payload.movies.map(movie => toMovieRecord(movie))))
  .set("totalResults", payload.totalResults)
  .set('fetching', false)

const selectPage = (state: IStateRecord, action: IAction.ISelectPage) => state.set("currentPage", action.payload)

const updateSearchTerm = (state: IStateRecord, action: IAction.IUpdateSearchTerm) => state.set("searchTerm", action.payload)

const updateFetching = (state: IStateRecord, action: IAction.IIsFetching) => state.set('fetching', action.payload)

const reducer = (state = initialStateRecord, action: IAction.IApplicationAction): IStateRecord => {
  console.log('ACTION FIRED:', action.type, action)
  switch (action.type) {
    case IAction.UPDATE_MOVIES:
      return updateMovies(state, action);
    case IAction.SELECT_PAGE:
      return selectPage(state, action);
    case IAction.UPDATE_SEARCH_TERM:
      return updateSearchTerm(state, action);
    case IAction.IS_FETCHING:
      return updateFetching(state, action);
    default:
      return state;
  }
}

export default reducer;