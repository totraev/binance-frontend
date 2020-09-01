import { combineReducers, configureStore, getDefaultMiddleware, AnyAction } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { reduxBatch } from '@manaflair/redux-batch';

import applicationReducer from './slices/application';
import productsReducer from './slices/products';

import api from 'services';
import rootEpic from 'epics';

const rootReducer = combineReducers({
  app: applicationReducer,
  products: productsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const defaultMiddlewares = getDefaultMiddleware({
  thunk: false,
  immutableCheck: true,
  serializableCheck: true,
});

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, AppState, typeof api>({
  dependencies: api,
});

export function createStore(preloadedState?: AppState) {
  const store = configureStore({
    preloadedState,
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: defaultMiddlewares.concat(epicMiddleware),
    enhancers: [reduxBatch],
  });

  epicMiddleware.run(rootEpic);

  return store;
}
