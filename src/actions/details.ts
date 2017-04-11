import * as IAction from './IAction';
import { IDetails } from '../reducers/details'

export const fetchDetails = (id: string): IAction.IFetchDetails => ({
  type: IAction.FETCH_DETAILS,
  payload: id
})

export const updateDetails = (details: IDetails): IAction.IUpdateDetails => ({
  type: IAction.UPDATE_DETAILS,
  payload: details
})