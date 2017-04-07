import * as IAction from '../actions/IAction'

type IState = {
  images: number[],
  currentPage: number,
  fetching: boolean
}

const initialState: IState = {
  images: [],
  currentPage: 1,
  fetching: false
}

const updateImages = (state: IState, action: IAction.IUpdateImages) => ({...state, images: state.images.concat(action.payload)})

const selectPage = (state: IState, action: IAction.ISelectPage) => ({...state, currentPage: action.payload})

const main = (state = initialState, action: IAction.IStandardAction) => {
  switch (action.type) {
    case IAction.UPDATE_IMAGES:
      return updateImages(state, action as IAction.IUpdateImages);
    case IAction.SELECT_PAGE:
      return selectPage(state, action as IAction.ISelectPage);

    default:
      return state;
  }
}

export default main;