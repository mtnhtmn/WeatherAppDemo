import {createSlice} from "@reduxjs/toolkit";

export interface CityState {
    forecastData: any
}

const initialState: CityState = {
    forecastData: null
}

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {
        forecastReceived: (state,action) => {
            state.forecastData = action.payload
        }
    }
})

export const {forecastReceived} = forecastSlice.actions

export default forecastSlice.reducer

