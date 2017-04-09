import { INavigationState } from '../reducers/navigation'
import * as IAction from './IAction';

export const navigateTo = (to: INavigationState) => ({
  type: IAction.NAVIGATE_TO,
  payload: to
})