import {configureStore} from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import weatherReducer from './slices/weatherSlice'
import forecastReducer from './slices/ForecastSlice'

export const store = configureStore({
    reducer: {
        cityReducer,
        weatherReducer,
        forecastReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
