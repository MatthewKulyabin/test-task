import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './games';

const store = configureStore({
  reducer: gamesReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export default store;
