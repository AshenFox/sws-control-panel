import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk, { ThunkDispatch, ThunkMiddleware, ThunkAction } from 'redux-thunk';
import rootReducer from './reducers/index';
import { AppActions } from './types/types';

const initialState = {};

const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

const isDev = process.env.NODE_ENV === 'development'; // from create-react-app

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = isDev
  ? createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleware))
    )
  : createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;

export type AppState = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch &
  ThunkDispatch<RootState, null, AppActions>;

export type ThunkActionApp = ThunkAction<void, RootState, unknown, AppActions>;
