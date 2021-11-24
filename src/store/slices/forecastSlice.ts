import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TForecastData = {
  DailyForecasts:{Date : string, Temperature : {Minimum : {Value : number, Unit : string}, Maximum : {Value : number, Unit : string}}}[]
}

export interface CityState {
  forecastData: TForecastData
}

const initialState: CityState = {
  forecastData: {
    DailyForecasts:[]
  }
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    forecastReceived: (state, action: PayloadAction<TForecastData>) => {
      state.forecastData.DailyForecasts = action.payload.DailyForecasts;
    },
  },
});

export const { forecastReceived } = forecastSlice.actions;

export default forecastSlice.reducer;
