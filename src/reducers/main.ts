type IState = {
}
type IStandardAction = {
    type: String,
    payload: any
}

const initialState: IState = {
}

const main = (state = initialState, action: IStandardAction) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default main;