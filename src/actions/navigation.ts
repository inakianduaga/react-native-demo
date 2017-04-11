import { INavigationState } from '../reducers/navigation'
import * as IAction from './IAction';

export const navigateTo = (to: INavigationState): IAction.INavigateTo => ({
  type: IAction.NAVIGATE_TO,
  payload: to
})

export const goToDetailsPage = (id: string): IAction.INavigateToDetails => ({
  type: IAction.NAVIGATE_TO_DETAILS,
  payload: id
})