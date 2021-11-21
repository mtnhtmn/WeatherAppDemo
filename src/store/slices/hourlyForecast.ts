import { createSlice } from '@reduxjs/toolkit';

export interface CityState {
  hourlyForecastData: any
}

const initialState: CityState = {
  hourlyForecastData: [],
};

export const hourlyForecastSlice = createSlice({
  name: 'hourlyForecast',
  initialState,
  reducers: {
    hourlyForecastReceived: (state, action) => {
      state.hourlyForecastData = action.payload;
    },
  },
});

export const { hourlyForecastReceived } = hourlyForecastSlice.actions;

export default hourlyForecastSlice.reducer;
