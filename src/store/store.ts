import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import weatherReducer from './slices/weatherSlice';
import forecastReducer from './slices/forecastSlice';
import hourlyForecastReducer from './slices/hourlyForecast';

export const store = configureStore({
  reducer: {
    cityReducer,
    weatherReducer,
    forecastReducer,
    hourlyForecastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
