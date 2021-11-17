import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import weatherReducer from './slices/weatherSlice'

export const store = configureStore({
  reducer: {
    cityReducer,
    weatherReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
