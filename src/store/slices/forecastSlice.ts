import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IForecast {
  Date: string;
  Temperature: {
    Minimum: { Value: number, Unit: string },
    Maximum: { Value: number, Unit: string }
  };
}

interface IForecastsState {
  forecastsData: IForecast[];
}

const initialState: IForecastsState = {

  forecastsData: []

};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    forecastReceived: (state, action: PayloadAction<IForecast[]>) => {
      state.forecastsData = action.payload;
    }
  }
});

export const { forecastReceived } = forecastSlice.actions;

export default forecastSlice.reducer;
