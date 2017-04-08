import * as IAction from '../actions/IAction'
import { Record, List } from 'immutable'
import { toRecord as movieRecord, IMovie } from '../models/Movie'

type IState = {
  movies: List<IMovie>,
  currentPage: number,
  fetching: boolean
}

const initialState: IState = {
  movies: List<IMovie>(),
  currentPage: 1,
  fetching: false
}

// The redux state is an instance of the state record class
type IStateRecord = Record.Instance<IState>

const initialStateRecord: IStateRecord = new (Record(initialState, "Redux Store record"))()

const updateMovies = (state: IStateRecord, action: IAction.IUpdateMovies) =>   
  state.setIn("movies", action.payload.map(movie => movieRecord(movie)))

const selectPage = (state: IStateRecord, action: IAction.ISelectPage) => state.setIn("currentPage", action.payload)

const main = (state = initialStateRecord, action: IAction.IApplicationAction): IStateRecord => {
  switch (action.type) {
    case IAction.UPDATE_MOVIES:
      return updateMovies(state, action);
    case IAction.SELECT_PAGE:
      return selectPage(state, action);
    default:
      return state;
  }
}

export default main;