import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TWeatherData = {Temperature:{Imperial:{Unit:string,Value:Number},Metric:{Unit:string,Value:Number}},WeatherText: string}

export interface CityState {
    weatherData: TWeatherData | null
}

const initialState: CityState = {
    weatherData: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        weatherReceived: (state,action:PayloadAction<TWeatherData>) => {
            state.weatherData = action.payload
        }
    }
})

export const {weatherReceived} = weatherSlice.actions

export default weatherSlice.reducer

