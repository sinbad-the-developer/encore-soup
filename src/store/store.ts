import { Action, combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import uiReducer from 'store/ui';
import projectReducer from 'store/project';

const rootReducer = combineReducers({
  ui: uiReducer,
  projects: projectReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
