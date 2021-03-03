import {
  createStore,
  applyMiddleware,
  Middleware,
  Reducer,
  Store,
} from 'redux';

export default (reducers: Reducer, middlewares: Middleware[]): Store => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
