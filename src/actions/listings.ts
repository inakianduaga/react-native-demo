import * as IAction from './IAction';

export const selectPage = (page: number): IAction.ISelectPage => ({
  type: IAction.SELECT_PAGE,
  payload: page
});

export const selectImage = (id: number): IAction.ISelectImage => ({
  type: IAction.SELECT_IMAGE,
  payload: id
});

export const fetchImages = (): IAction.IFetchImages => ({
  type: IAction.FETCH_IMAGES,
  payload: null
});

export const updateImages = (ids: number[]): IAction.IUpdateImages => ({
  type: IAction.UPDATE_IMAGES,
  payload: ids
});


