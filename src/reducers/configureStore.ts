import { rootReducer, rootEpic } from './root';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

declare const module: any;

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  // Enable HMR in redux
  // https://github.com/reactjs/redux/issues/2204
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./root').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;