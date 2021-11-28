import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IWeatherData {
    LocalObservationDateTime: string
    WeatherIcon: number
    WeatherText:string
    Temperature: {
        Metric: {
            Value: number,
            Unit: 'C'
        }
        Imperial: {
            Value: number,
            Unit: 'F'
        }
    }
}

export interface WeatherState {
    weatherData: IWeatherData | null
}

const initialState: WeatherState = {
    weatherData: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        weatherReceived: (state,action:PayloadAction<IWeatherData>) => {
            state.weatherData = action.payload
        }
    }
})

export const {weatherReceived} = weatherSlice.actions

export default weatherSlice.reducer

