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

type IDetailsResponseSuccess = {
  Response: "True", 
  imbdId: string,
  Title: string,
  Year: string,
  Released: string,
  Actors: string,
  Genre: string,
  Plot: string,
  Poster: string,
}

type IDetailsResponseFailed = {
  Response: "False", 
  Error: string
}

export type IDetailsResponse = IDetailsResponseSuccess | IDetailsResponseFailed