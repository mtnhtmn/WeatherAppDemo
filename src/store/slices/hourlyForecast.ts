import { createSlice } from '@reduxjs/toolkit';

export interface IHourlyForecast {
  DateTime: string
  WeatherIcon: number
  Temperature: {
    Value: number
  }
}

export interface IHourlyForecastState  {
  hourlyForecastData: IHourlyForecast[]
}

const initialState: IHourlyForecastState = {
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
