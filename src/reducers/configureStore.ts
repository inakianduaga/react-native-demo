import { rootReducer, rootEpic } from './root';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  return store;
}

export default configureStore;