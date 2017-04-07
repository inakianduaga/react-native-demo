import { IFetchImages } from './IAction';
export const FETCH_IMAGES = 'FETCH_IMAGES'
export const UPDATE_IMAGES = 'UPDATE_IMAGES'
export const SELECT_IMAGE = 'SELECT_IMAGE'
export const SELECT_PAGE = 'SELECT_PAGE'

export interface IStandardAction {
    type: String,
    payload: any
}

export interface ISelectPage extends IStandardAction {
  type: 'SELECT_PAGE',
  payload: number
}

export interface ISelectImage extends IStandardAction {
  type: 'SELECT_IMAGE',
  payload: number
}

export interface IFetchImages extends IStandardAction {
  type: 'FETCH_IMAGES',
  payload: null
}

export interface IUpdateImages extends IStandardAction {
  type: 'UPDATE_IMAGES',
  payload: number[]
}

// Include all actions in the system to do exhaustive pattern matching
// See TS tagged union types: https://blog.mariusschulz.com/2016/11/03/typescript-2-0-tagged-union-types
export type IApplicationAction = 
  | ISelectImage 
  | ISelectPage
  | IFetchImages
  | IUpdateImages