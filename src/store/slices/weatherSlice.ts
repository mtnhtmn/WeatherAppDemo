import {createSlice} from "@reduxjs/toolkit";

export interface CityState {
    weatherData: any
}

const initialState: CityState = {
    weatherData: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        weatherReceived: (state,action) => {
            state.weatherData = action.payload
        }
    }
})

export const {weatherReceived} = weatherSlice.actions

export default weatherSlice.reducer

