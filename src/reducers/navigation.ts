import * as IAction from '../actions/IAction'
import { Record } from 'immutable'
import { UIManager } from 'react-native'

export type INavigationState = 'intro' | 'listings' | 'detail'

export type IState = {
  navigation: INavigationState,
}

const initialState: IState = {
  navigation: 'intro',
}

// The redux state is an instance of the state record class
export type IStateRecord = Record.Instance<IState>

const initialStateRecord: IStateRecord = new (Record(initialState, "Navigation state record"))()

const navigateTo = (state: IStateRecord, action: IAction.INavigateTo) => {  
  console.log((UIManager as any).navigationUpdate);
  (UIManager as any).navigationUpdate && (UIManager as any).navigationUpdate(action.payload)
  return state.set('navigation', action.payload)
}

const reducer = (state = initialStateRecord, action: IAction.IApplicationAction): IStateRecord => {
  switch (action.type) {
    case IAction.NAVIGATE_TO:
      return navigateTo(state, action);
    default:
      return state;
  }
}

export default reducer;