import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from 'shared/api';
import { counterReducer } from 'features/counter';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  counter: counterReducer,
});
