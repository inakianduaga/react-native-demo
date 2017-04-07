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
