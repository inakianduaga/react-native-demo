import * as IAction from '../actions/IAction'
import { Record } from 'immutable'

export interface IDetails {
  title: string | null,
  year: string | null,
  released: string | null,
  actors: string | null,
  genre: string | null,
  plot: string | null,
  poster: string | null,
  imbdId: string | null,
}

export type IState = IDetails;

const initialState: IState = {
  imbdId: '123', // TODO: Read this from the React Native app environment
  title: null,
  year: null,
  released: null,
  actors: null,
  genre: null,
  plot: null,
  poster: null,
}

// The redux state is an instance of the state record class
export type IStateRecord = Record.Instance<IState>

const initialStateRecord: IStateRecord = new (Record(initialState, "Navigation state record"))()

const updateDetails = (state: IStateRecord, { payload }: IAction.IUpdateDetails) => 
  state
    .set("imbdId", payload.imbdId)
    .set("title", payload.title)
    .set("year", payload.year)
    .set("released", payload.released)
    .set("actors", payload.actors)
    .set("genre", payload.genre)
    .set("plot", payload.plot)
    .set("poster", payload.poster)

const reducer = (state = initialStateRecord, action: IAction.IApplicationAction): IStateRecord => {
  switch (action.type) {
    case IAction.UPDATE_DETAILS:
      return updateDetails(state, action);
    default:
      return state;
  }
}

export default reducer;